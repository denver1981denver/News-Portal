import showImg from './loadImages.js';

const fetchRequest = async (postfix = 'business', URL, {
  method = 'get',
  callback,
  headers,
  count = 12,
  search,
}) => {
  try {
    const options = {
      method,
    };

    if (headers) options.headers = headers;

    const response = await fetch(`${URL}${postfix}`, options);

    if (response.ok) {
      const data = await response.json();
      const photos = [];

      if (callback) {
        data.articles.forEach((article, i) => {
          if (i < count) photos.push(article.urlToImage);
        });

        return showImg(photos).then(img => callback(null, data.articles, count, img, search));
      }
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
