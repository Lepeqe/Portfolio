document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de módulos
  const themeManager = new ThemeManager();
  const particles = new Particles();
  const animations = new Animations();

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile Menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navList.classList.toggle('active');
      document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    });
  }

  // Footer Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Form Validation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Mensaje enviado con éxito. Gracias por contactarme!');
      contactForm.reset();
    });
  }

  // Image Viewer Functionality
  const initImageViewer = () => {
    const modal = document.getElementById('imageViewerModal');
    const modalImgContainer = document.querySelector('.modal-image-container');
    const captionText = document.getElementById('imageCaption');
    const closeModal = document.querySelector('.close-modal');
    
    if (!modal) return;
    
    // Abrir modal
    document.querySelectorAll('.certification-thumbnail img').forEach(img => {
      img.addEventListener('click', function() {
        const fullsizeImg = new Image();
        fullsizeImg.src = this.dataset.fullsize;
        
        fullsizeImg.onload = () => {
          modalImgContainer.innerHTML = `
            <img class="modal-image" src="${this.dataset.fullsize}" alt="${this.alt}">
          `;
          captionText.textContent = this.alt;
          modal.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        };
      });
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  };

  initImageViewer();
});