// Mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const navPanel = document.querySelector('.nav-panel');

menuToggle?.addEventListener('click', () => {
  const isOpen = navPanel.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navPanel?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navPanel.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  });
});

// Theme toggle (dark is the default)
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle?.querySelector('i');

themeToggle?.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') !== 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'light' : 'dark');
  if (themeIcon) themeIcon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
});

// Reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Add the class on entry and remove it on exit so the animation
      // plays again every time the visitor returns to the section.
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -5% 0px'
  });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
