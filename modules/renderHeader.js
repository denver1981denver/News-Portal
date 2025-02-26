
const renderHeader = selectData => {
  const container = document.createElement('div');
  const nav = document.createElement('nav');
  const form = document.createElement('form');
  container.className = 'header__container container';
  nav.className = 'header__navigation navigation';
  form.className = 'navigation__form form';
  
nav.insertAdjacentHTML('beforeend', `
  <img class="logo" src="img/logo.svg" alt="Логотип новостного портала only fresh news">
`);
form.insertAdjacentHTML('beforeend', `
  <div class="form__search">
  <input class="form__search-input" type="search" name="search" placeholder="Я хочу узнать про..." required>
  <button class="form__submit" type="submit">
    <svg class="form__search-icon" width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.0996 16.1287L19.785 18.8127C19.9102 18.9424 19.9795 19.1161 19.9779 19.2963C19.9764 19.4766 19.9041 19.649 19.7766 19.7765C19.6491 19.904 19.4767 19.9763 19.2964 19.9778C19.1162 19.9794 18.9425 19.9101 18.8129 19.7849L16.1275 17.0995C14.3727 18.603 12.1037 19.3683 9.79673 19.235C7.48976 19.1016 5.32411 18.0799 3.7542 16.3843C2.1843 14.6886 1.33218 12.4508 1.37666 10.1404C1.42113 7.82998 2.35874 5.62661 3.99273 3.99261C5.62673 2.35862 7.8301 1.42101 10.1405 1.37654C12.4509 1.33206 14.6887 2.18418 16.3844 3.75408C18.08 5.32399 19.1018 7.48964 19.2351 9.79661C19.3685 12.1036 18.6031 14.3725 17.0996 16.1274V16.1287ZM10.3126 17.875C12.3183 17.875 14.2419 17.0782 15.6601 15.66C17.0783 14.2417 17.8751 12.3182 17.8751 10.3125C17.8751 8.30679 17.0783 6.38324 15.6601 4.96499C14.2419 3.54675 12.3183 2.74999 10.3126 2.74999C8.30691 2.74999 6.38336 3.54675 4.96512 4.96499C3.54687 6.38324 2.75011 8.30679 2.75011 10.3125C2.75011 12.3182 3.54687 14.2417 4.96512 15.66C6.38336 17.0782 8.30691 17.875 10.3126 17.875Z"/>
    </svg>
  </button>
  </div>
  <select class="form__select" name="select">
    <option value="sport">sport</option> 
    <option value="business">business</option> 
    <option value="science">science</option> 
  </select>
`);

  nav.append(form);
  container.append(nav);

  return {container, form};
};

export default renderHeader;


