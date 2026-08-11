const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

const closeMenu = () => {
  if (!menu || !navlist) return;
  menu.classList.remove('open');
  navlist.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
};

if (menu && navlist) {
  menu.addEventListener('click', () => {
    const isOpen = navlist.classList.toggle('open');
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!navlist.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

const views = [...document.querySelectorAll('.page-view')];
const navLinks = [...document.querySelectorAll('.navlist a[data-view]')];
const pageTitles = {
  home: 'Michael Zang | Machine Learning & Data Science',
  introduction: 'Introduction | Michael Zang',
  resume: 'Resume | Michael Zang',
  projects: 'Projects | Michael Zang',
  contact: 'Contact | Michael Zang'
};

function showTarget(hash, updateHistory = false) {
  const cleanHash = hash && hash !== '#' ? hash : '#home';
  const target = document.querySelector(cleanHash);
  if (!target) return;

  const view = target.classList.contains('page-view') ? target : target.closest('.page-view');
  if (!view) return;

  views.forEach((item) => { item.hidden = item !== view; });
  document.body.classList.toggle('home-page', view.id === 'home');

  navLinks.forEach((link) => {
    const active = link.dataset.view === view.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  document.title = pageTitles[view.id] || 'Michael Zang';
  closeMenu();

  if (updateHistory) history.pushState(null, '', cleanHash);

  requestAnimationFrame(() => {
    if (target === view) window.scrollTo(0, 0);
    else target.scrollIntoView({ block: 'start' });
  });
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute('href');
  if (!hash || !document.querySelector(hash)) return;
  event.preventDefault();
  showTarget(hash, true);
});

window.addEventListener('popstate', () => showTarget(location.hash || '#home'));
showTarget(location.hash || '#home');

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
