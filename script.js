// Pequeño script para toggle de navegación en móvil y mejoras UX
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if (!expanded) {
      primaryNav.style.display = 'block';
    } else {
      primaryNav.style.display = 'none';
    }
  });

  // Cerrar menú al cambiar de sección (mejora UX)
  primaryNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        primaryNav.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});
