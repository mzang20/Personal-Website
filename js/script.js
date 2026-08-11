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

if (window.ScrollReveal && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const sr = ScrollReveal({
    distance: '34px',
    duration: 900,
    delay: 80,
    reset: false,
    easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)'
  });

  sr.reveal('.hero-text, .page-heading', { origin: 'top' });
  sr.reveal('.hero-img, .intro-photo', { origin: 'bottom', delay: 140 });
  sr.reveal('.intro-block, .timeline-card, .project-card, .contact-card, .impact-card, .journey-item, .skill-card, .availability-card', {
    origin: 'bottom',
    interval: 70
  });
}
