const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

if (menu && navlist) {
  const closeMenu = () => {
    menu.classList.remove('open');
    navlist.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };

  menu.addEventListener('click', () => {
    const isOpen = navlist.classList.toggle('open');
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  navlist.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!navlist.contains(event.target) && !menu.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-categories]');

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach((card) => {
        const categories = (card.dataset.categories || '').split(' ');
        card.hidden = selected !== 'all' && !categories.includes(selected);
      });
    });
  });
}
