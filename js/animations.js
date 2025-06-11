class Animations {
  constructor() {
    this.initScrollAnimations();
    this.initHoverAnimations();
  }

  initScrollAnimations() {
    // Verificar si el navegador soporta IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Fallback: mostrar todos los elementos
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('animate');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Opcional: dejar de observar después de la animación
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px' // Activar animación un poco antes
    });

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });
  }

  initHoverAnimations() {
    // Efecto hover para tarjetas de certificación
    document.querySelectorAll('.certification-card').forEach(card => {
      const img = card.querySelector('.certification-thumbnail img');
      
      card.addEventListener('mouseenter', () => {
        if (img) {
          img.style.transform = 'scale(1.05)';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        if (img) {
          img.style.transform = 'scale(1)';
        }
      });
    });
  }
}