const loadImg = url => new Promise((resolve, reject) => {
  const img = new Image();
  img.hight = 200;
  img.src = url;
  img.className = 'article__image';
  img.addEventListener('load', () => resolve(img));
  img.addEventListener('error', () => reject(new Error(`Ошибка загрузки изображения по адресу: ${url}`)));
});

const showImg = async (photos) => {
  const promises = photos.map(photo => loadImg(photo).catch(error => {
    console.warn(error.message);
    return null;
  }));

  return Promise.all(promises);
};

export default showImg;


