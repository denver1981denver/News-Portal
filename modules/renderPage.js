import fetchRequest from './fetchRequest.js';
import renderArticles from './renderArticles.js';
import renderHeader from './renderHeader.js';
import renderFooter from './renderFooter.js';
import formControl from './formControl.js';

const URL_headlines = 'https://newsapi.org/v2/top-headlines?country=us&category=';
const URL_search = 'https://newsapi.org/v2/everything?q=';
const API_key = 'a21f81a63bb743669469c879c066ff42';

const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const initLoadPage = () => {
  return Promise.all ([
    fetchRequest('sport', URL_headlines, {
      callback: renderArticles,
      headers: {
            'X-Api-Key': API_key,
         },
  }),
    renderHeader(),
    renderFooter(),
  ]);
};

const initSearch = (search, select) => {
  return Promise.all ([
    fetchRequest(search, URL_search, {
      callback: renderArticles,
      headers: {
        'X-Api-Key': API_key,
     },
      count: 8,
      search: search,
    }),
     fetchRequest(select, URL_headlines, {
      callback: renderArticles,
      headers: {
        'X-Api-Key': API_key,
     },
      count: 4,
    }),
  ]);
};

const initSelect = select => {
  return Promise.all ([
     fetchRequest(select, URL_headlines, {
      callback: renderArticles,
      headers: {
        'X-Api-Key': API_key,
     },
      select: select,
    }),
  ]);
};

initLoadPage().then(data => {
  if (data[0]) {
    main.append(data[0]);
    header.append(data[1].container);
    footer.append(data[2]);
  }
  formControl(data[1].form, header, main, footer, initSearch, initSelect);
});


