// Modern UX enhancements: reveal on scroll + existing nav behavior
(function(){
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

    primaryNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          primaryNav.style.display = 'none';
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      });
    });

    // Reveal on scroll (prefers-reduced-motion respected)
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } else {
      // Fallback: make visible immediately
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }

    // Optional: simple keyboard accessibility for project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // For now we just focus contact section as placeholder for "open"
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }
      });
    });

  });
})();
