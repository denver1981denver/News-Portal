const checkTitle = (data, search, title) => {
  if (data.length < 7 && data.length > 4 && search) {
    title.textContent = `По вашему запросу "${search}" найдено ${data.length} новостей`;
  }
  if (data.length < 4 && data.length > 1 && search) {
    title.textContent = `По вашему запросу "${search}" найдено ${data.length} новости`;
  }
  if (data.length === 1 && search) {
    title.textContent = `По вашему запросу "${search}" найдена ${data.length} новость`;
  }
  if (data.length === 0 && search) {
    title.textContent = 'По вашему запросу ничего не найдено';
  }
};

const renderArticles = (err, data, count, img, search) => {
  if (err) {
    console.warn(err);
    return;
  }

  const styleArticle = (search) ? 'search' : 'headlines';
  const textTitle = (search) ? `По вашему запросу "${search}" найдено 8 новостей` : 'Свежие новости';
  const section = document.createElement('section');
  section.className = `${styleArticle}`;
  const container = document.createElement('div');
  container.className = 'container';
  const wrapper = document.createElement('div');
  wrapper.className = `${styleArticle}__wrapper wrapper-news`;
  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = `${textTitle}`;

  checkTitle(data, search, title);

  container.append(title, wrapper);
  section.append(container);

  const cardsArray = [];

  data.forEach((
      {
        url,
        title,
        description,
        author,
        publishedAt,
      }, i) => {
    const dateTime = new Date(publishedAt);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString().slice(0, -3);

    author = author ?? '';
    description = description ?? '';

    const image = document.createElement('img');
    image.className = 'article__image';
    image.src = 'img/no_photo.jpg';
    
    const images = img[i] ?? image;
    const card = document.createElement('div');
    card.className = 'wrapper__news card-news';
    const article = document.createElement('article');
    article.className = 'card-news__article article';
    card.append(article);
    article.insertAdjacentHTML('beforeend', `
      <header class="article__header">
        <a class="article__link" href="${url}" target="_blank">
          <h3 class="article__title">${title}</h3>
          <svg class="article__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6H18V16M18 6L6 18L18 6Z" stroke="#F2994A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <p class="article__description">${description}</p>
      </header>
      `);
    article.append(images);
    article.insertAdjacentHTML('beforeend', `
      <footer class="article__footer">
        <p class="article__wrapper-text">
          <time class="article__time" datetime="${publishedAt}">
            <span>${date}</span>
            <span>${time}</span>
          </time>
          <span>${author}</span>
        </p>
      </footer>
    `);

    if (i < count) cardsArray.push(card);
  });
  wrapper.append(...cardsArray);

  return section;
};

export default renderArticles;


