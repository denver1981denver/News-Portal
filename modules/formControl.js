const formControl = (form, header, main, footer, initSearch, initSelect, preload) => {
  form.addEventListener('change', async ({target}) => {
    const select = target.closest('.form__select');

    if (select) {
      const dataSelect = select.value;
      header.style.display = 'none';
      main.textContent = '';
      footer.style.display = 'none';

      initSelect(dataSelect).then(data => {
        preload.remove();
        if (data[0]) {
          main.append(data[0]);
          header.style.display = 'block';
          footer.style.display = 'block';
        }
      });
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {search, select} = Object.fromEntries(formData);
    header.style.display = 'none';
    main.textContent = '';
    footer.style.display = 'none';

    initSearch(search, select).then(data => {
      preload.remove();
      if (data[0]) main.append(data[0]);
      if (data[1]) {
        main.append(data[1]);
        footer.style.display = 'block';
        header.style.display = 'block';
      }
    });
    form.reset();
  });
};

export default formControl;
