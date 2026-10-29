/**
 * Глобальный скрипт для общих компонентов сайта (навигация, адаптивное меню)
 */
document.addEventListener('DOMContentLoaded', function () {
  // 1. Управление мобильным меню
  const nav = document.querySelector('nav');
  const toggleBtn = document.querySelector('.menu-toggle');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('open');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggleBtn.contains(e.target)) {
        nav.classList.remove('open');
      }
    });

    // Закрытие при переходе по ссылке
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // 2. Автоматическая подсветка активной ссылки в шапке
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function (link) {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });
});

