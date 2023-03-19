const navigate = () => {
  const topMenu = document.querySelector('div.top-menu');
  const upBtn = document.querySelector('img.up');

  upBtn.addEventListener('click', (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

  topMenu.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
    const category = event.target.getAttribute('href');
    document.querySelector(category).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

export default navigate;