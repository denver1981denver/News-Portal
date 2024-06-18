const renderFooter = () => {
  const container = document.createElement('div');
  container.className = 'footer__container container';
  container.insertAdjacentHTML('beforeend', `
  <img class="footer__logo logo" src="img/logo.svg" alt="Логотип новостного портала only fresh news">
  <p class="footer__copyright">
    <small>&copy;2020-2022 News</small>
  </p> 
  <ul class="footer__social social">
    <li class="social__item">
      <a class="social__link" href="#">
        <svg viewBox="0 0 30 30" width="30" height="30">
          <use href="#x"></use>
        </svg>
      </a>
    </li>
    <li class="social__item">
      <a class="social__link" href="#">
        <svg viewBox="0 0 30 30" width="30" height="30">
          <use href="#icon"></use>
        </svg>
      </a>
    </li>
    <li class="social__item">
      <a class="social__link" href="#">
        <svg viewBox="0 0 30 30" width="30" height="30">
          <use href="#vk"></use>
        </svg>
      </a>
    </li>
  </ul>
  `);

  return container;
};

export default renderFooter;