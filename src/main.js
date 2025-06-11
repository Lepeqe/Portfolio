/**
 * Aplicación principal del portfolio PM/PO
 * Inicializa todos los módulos y gestiona la interactividad
 */
class PortfolioApp {
  constructor() {
    this.init();
  }

  /**
   * Inicializa la aplicación
   */
  async init() {
    console.log('🚀 Iniciando aplicación Portfolio PM/PO...');
    
    try {
      console.log('📋 Configurando event listeners...');
      await this.setupEventListeners();
      
      console.log('🎨 Renderizando contenido...');
      await this.renderContent();
      
      console.log('✨ Configurando animaciones...');
      this.setupAnimations();
      
      console.log('📅 Actualizando año actual...');
      this.updateCurrentYear();
      
      console.log('✅ Portfolio PM/PO inicializado correctamente');
    } catch (error) {
      console.error('❌ Error inicializando portfolio:', error);
    }
  }

  /**
   * Configura los event listeners
   */
  async setupEventListeners() {
    // Navegación suave
    this.setupSmoothScrolling();
    
    // Menú móvil
    this.setupMobileMenu();
    
    // Formulario de contacto
    this.setupContactForm();
    
    // Navegación activa
    this.setupActiveNavigation();
  }

  /**
   * Configura la navegación suave
   */
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href) return;

        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Configura el menú móvil
   */
  setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuToggle || !mobileMenu) return;

    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        mobileMenuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      }
    });

    // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      });
    });
  }

  /**
   * Configura el formulario de contacto
   */
  setupContactForm() {
    console.log('🔧 Iniciando configuración del formulario de contacto...');
    
    const contactForm = document.getElementById('contact-form');
    console.log('📝 Formulario encontrado:', contactForm);
    
    if (!contactForm) {
      console.error('❌ ERROR: No se encontró el formulario con ID "contact-form"');
      return;
    }

    console.log('✅ Formulario encontrado correctamente, agregando event listener...');

    contactForm.addEventListener('submit', async (e) => {
      console.log('🚀 EVENT: Formulario enviado - preventDefault activado');
      e.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      console.log('🔘 Botón de envío encontrado:', submitButton, 'Texto original:', originalText);
      
      // Mostrar estado de carga
      submitButton.textContent = 'Enviando...';
      submitButton.disabled = true;
      console.log('🔄 Estado del botón cambiado a "Enviando..."');
      
      try {
        const formData = new FormData(contactForm);
        const templateParams = {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
          to_email: 'cespedesagustin@gmail.com'
        };
        
        console.log('📋 Datos del formulario extraídos:', templateParams);
        console.log('📧 Iniciando envío de email...');

        // Enviar email usando EmailJS
        await this.sendEmail(templateParams);
        
        console.log('✅ Email enviado exitosamente');
        
        // Mostrar mensaje de éxito
        this.showSuccessMessage();
        
        // Limpiar formulario
        contactForm.reset();
        console.log('🧹 Formulario limpiado');
        
      } catch (error) {
        console.error('❌ Error al enviar email:', error);
        this.showErrorMessage();
      } finally {
        // Restaurar botón
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        console.log('🔄 Botón restaurado al estado original');
      }
    });
    
    console.log('✅ Event listener del formulario configurado correctamente');
  }

  /**
   * Envía email usando EmailJS
   */
  async sendEmail(templateParams) {
    console.log('📧 Función sendEmail iniciada con parámetros:', templateParams);
    
    // Verificar si EmailJS está disponible
    console.log('🔍 Verificando disponibilidad de EmailJS...');
    console.log('EmailJS disponible:', typeof window.emailjs !== 'undefined');
    console.log('EmailJS object:', window.emailjs);
    
    if (typeof window.emailjs === 'undefined') {
      console.error('❌ EmailJS no está cargado');
      throw new Error('EmailJS no está cargado');
    }

    console.log('✅ EmailJS está disponible, iniciando envío...');

    try {
      console.log('🔧 Configuración de envío:');
      console.log('  - Service ID: PortfolioContact');
      console.log('  - Template ID: template_wyv6edo');
      console.log('  - Parámetros:', templateParams);
      
      const response = await window.emailjs.send(
        'PortfolioContact', // Service ID de EmailJS
        'template_wyv6edo', // Template ID de EmailJS
        templateParams
      );
      
      console.log('📬 Respuesta de EmailJS:', response);
      console.log('📊 Status de respuesta:', response.status);
      
      if (response.status !== 200) {
        console.error('❌ Error del servidor:', response.status);
        throw new Error(`Error del servidor: ${response.status}`);
      }
      
      console.log('✅ Email enviado exitosamente por EmailJS');
      return response;
    } catch (error) {
      console.error('❌ Error en EmailJS:', error);
      if (error instanceof Error) {
        console.error('Detalles del error:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
      throw error;
    }
  }

  /**
   * Muestra mensaje de éxito
   */
  showSuccessMessage() {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `
      fixed top-4 right-4 z-50 bg-green-600 text-white px-8 py-4 rounded-xl shadow-2xl border border-green-500/30
      transform translate-x-full opacity-0 transition-all duration-300 font-medium backdrop-blur-sm
    `;
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span>¡Mensaje enviado exitosamente!</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
      notification.classList.remove('translate-x-full', 'opacity-0');
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  /**
   * Muestra mensaje de error
   */
  showErrorMessage() {
    // Crear elemento de notificación de error
    const notification = document.createElement('div');
    notification.className = `
      fixed top-4 right-4 z-50 bg-red-600 text-white px-8 py-4 rounded-xl shadow-2xl border border-red-500/30
      transform translate-x-full opacity-0 transition-all duration-300 font-medium backdrop-blur-sm
    `;
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <span>Error al enviar mensaje. Inténtalo nuevamente.</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
      notification.classList.remove('translate-x-full', 'opacity-0');
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  /**
   * Configura la navegación activa
   */
  setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.id;
          
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
              link.classList.add('text-burgundy-400');
              link.classList.remove('text-gray-300');
            } else {
              link.classList.remove('text-burgundy-400');
              link.classList.add('text-gray-300');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }

  /**
   * Renderiza todo el contenido dinámico
   */
  async renderContent() {
    // Esta función se puede implementar más tarde si necesitas contenido dinámico
    console.log('🎨 Contenido dinámico renderizado');
  }

  /**
   * Configura las animaciones
   */
  setupAnimations() {
    // Implementar Intersection Observer para animaciones de entrada
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('section').forEach(el => {
      observer.observe(el);
    });
  }

  /**
   * Actualiza el año actual en el footer
   */
  updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('🌐 DOM Content Loaded - Inicializando PortfolioApp...');
  console.log('📊 Estado del documento:', document.readyState);
  new PortfolioApp();
});

console.log('📜 Archivo main.js cargado correctamente');

// Funciones para el modal de certificados
function openModal(imageSrc, title) {
  console.log('🖼️ Abriendo modal para certificado:', title);
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  
  modalImage.src = imageSrc;
  modalImage.alt = title;
  modalTitle.textContent = title;
  
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function closeModal() {
  console.log('❌ Cerrando modal de certificado');
  const modal = document.getElementById('certificateModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Cerrar modal con Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById('certificateModal').addEventListener('click', (e) => {
  if (e.target.id === 'certificateModal') {
    closeModal();
  }
});

// Hacer las funciones globales para que funcionen con onclick
window.openModal = openModal;
window.closeModal = closeModal;

// Variables del carrusel
let currentSlideIndex = 0;
const totalSlides = 3;

// Funciones del carrusel de certificados
function changeSlide(direction) {
  console.log('🎠 Cambiando slide:', direction > 0 ? 'siguiente' : 'anterior');
  
  currentSlideIndex += direction;
  
  // Controlar límites
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  } else if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }
  
  updateCarousel();
}

function goToSlide(slideIndex) {
  console.log('🎯 Ir al slide:', slideIndex + 1);
  currentSlideIndex = slideIndex;
  updateCarousel();
}

function updateCarousel() {
  const carousel = document.getElementById('certificatesCarousel');
  const currentSlideSpan = document.getElementById('currentSlide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicators = document.querySelectorAll('.slide-indicator');
  
  if (!carousel) {
    console.error('❌ No se encontró el carrusel de certificados');
    return;
  }
  
  // Actualizar posición del carrusel
  const translateX = -currentSlideIndex * 100;
  carousel.style.transform = `translateX(${translateX}%)`;
  
  // Actualizar contador
  if (currentSlideSpan) {
    currentSlideSpan.textContent = currentSlideIndex + 1;
  }
  
  // Actualizar indicadores
  indicators.forEach((indicator, index) => {
    if (index === currentSlideIndex) {
      indicator.classList.remove('bg-gray-600');
      indicator.classList.add('bg-burgundy-500');
    } else {
      indicator.classList.remove('bg-burgundy-500');
      indicator.classList.add('bg-gray-600');
    }
  });
  
  // Actualizar estados de botones (opcional - para deshabilitar en extremos)
  // if (prevBtn && nextBtn) {
  //   prevBtn.disabled = currentSlideIndex === 0;
  //   nextBtn.disabled = currentSlideIndex === totalSlides - 1;
  // }
  
  console.log('✅ Carrusel actualizado - Slide:', currentSlideIndex + 1);
}

// Auto-play del carrusel (opcional)
function startAutoPlay() {
  return setInterval(() => {
    changeSlide(1);
  }, 5000); // Cambia cada 5 segundos
}

// Detener auto-play
function stopAutoPlay(intervalId) {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

// Inicializar carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎠 Inicializando carrusel de certificados...');
  
  // Configurar carrusel inicial
  updateCarousel();
  
  // Opcional: Iniciar auto-play
  // const autoPlayInterval = startAutoPlay();
  
  // Pausar auto-play al hacer hover
  // const carouselContainer = document.querySelector('#credentials .relative.max-w-6xl');
  // if (carouselContainer) {
  //   carouselContainer.addEventListener('mouseenter', () => stopAutoPlay(autoPlayInterval));
  //   carouselContainer.addEventListener('mouseleave', () => startAutoPlay());
  // }
});

// Controles de teclado para el carrusel
document.addEventListener('keydown', (e) => {
  // Solo si no hay modal abierto
  const modal = document.getElementById('certificateModal');
  if (modal && !modal.classList.contains('hidden')) {
    return;
  }
  
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    changeSlide(-1);
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    changeSlide(1);
  }
});

// Hacer funciones globales
window.changeSlide = changeSlide;
window.goToSlide = goToSlide; 