import { projects, experiences, certifications, skills, methodologies } from './data/portfolio.js';
import type { Project, Experience, Certification, Skill, Methodology } from './types/index.js';

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
  private async init(): Promise<void> {
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
  private async setupEventListeners(): Promise<void> {
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
  private setupSmoothScrolling(): void {
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
  private setupMobileMenu(): void {
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
  private setupContactForm(): void {
    console.log('🔧 Iniciando configuración del formulario de contacto...');
    
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    console.log('📝 Formulario encontrado:', contactForm);
    
    if (!contactForm) {
      console.error('❌ ERROR: No se encontró el formulario con ID "contact-form"');
      return;
    }

    console.log('✅ Formulario encontrado correctamente, agregando event listener...');

    contactForm.addEventListener('submit', async (e) => {
      console.log('🚀 EVENT: Formulario enviado - preventDefault activado');
      e.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = submitButton.textContent;
      console.log('🔘 Botón de envío encontrado:', submitButton, 'Texto original:', originalText);
      
      // Mostrar estado de carga
      submitButton.textContent = 'Enviando...';
      submitButton.disabled = true;
      console.log('🔄 Estado del botón cambiado a "Enviando..."');
      
      try {
        const formData = new FormData(contactForm);
        const templateParams = {
          from_name: formData.get('name') as string,
          from_email: formData.get('email') as string,
          message: formData.get('message') as string,
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
  private async sendEmail(templateParams: Record<string, string>): Promise<void> {
    console.log('📧 Función sendEmail iniciada con parámetros:', templateParams);
    
    // Verificar si EmailJS está disponible
    console.log('🔍 Verificando disponibilidad de EmailJS...');
    console.log('EmailJS disponible:', typeof (window as any).emailjs !== 'undefined');
    console.log('EmailJS object:', (window as any).emailjs);
    
    if (typeof (window as any).emailjs === 'undefined') {
      console.error('❌ EmailJS no está cargado');
      throw new Error('EmailJS no está cargado');
    }

    console.log('✅ EmailJS está disponible, iniciando envío...');

    try {
      console.log('🔧 Configuración de envío:');
      console.log('  - Service ID: PortfolioContact');
      console.log('  - Template ID: template_wyv6edo');
      console.log('  - Parámetros:', templateParams);
      
      const response = await (window as any).emailjs.send(
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
  private showSuccessMessage(): void {
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
  private showErrorMessage(): void {
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
  private setupActiveNavigation(): void {
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
  private async renderContent(): Promise<void> {
    await Promise.all([
      this.renderExperience(),
      this.renderProjects(),
      this.renderSkills(),
      this.renderCertifications()
    ]);
  }

  /**
   * Renderiza la sección de experiencia
   */
  private async renderExperience(): Promise<void> {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    const html = experiences.map((exp, index) => `
      <div class="relative pl-12 pb-12 ${index !== experiences.length - 1 ? 'border-l-2 border-burgundy-700/30' : ''}">
        <div class="absolute -left-3 top-0 w-6 h-6 bg-burgundy-600 rounded-full shadow-lg border-2 border-gray-800"></div>
        <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-burgundy-500/10 hover:border-burgundy-700/50 transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h3 class="text-2xl font-bold text-white mb-2">${exp.position}</h3>
              <p class="text-burgundy-400 font-semibold text-lg">${exp.company}</p>
            </div>
            <div class="text-sm text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg font-medium mt-4 lg:mt-0 border border-gray-600/30">
              ${exp.startDate} - ${exp.endDate || 'Presente'}
            </div>
          </div>
          
          <p class="text-gray-300 mb-6 leading-relaxed text-lg">${exp.description}</p>
          
          <div class="mb-6">
            <h4 class="font-semibold text-white mb-4 text-lg">Logros principales:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${exp.achievements.map(achievement => 
                `<div class="flex items-start space-x-3 group">
                  <div class="flex-shrink-0 w-6 h-6 bg-green-900/50 border border-green-700/50 rounded-full flex items-center justify-center group-hover:bg-green-800/50 transition-colors duration-300">
                    <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-gray-300 text-sm leading-relaxed">${achievement}</span>
                </div>`
              ).join('')}
            </div>
          </div>
          
          ${exp.teamSize ? 
            `<div class="flex items-center space-x-6 text-sm text-gray-400 bg-gray-900/30 border border-gray-700/30 rounded-lg p-4">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-burgundy-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                <span>Equipo de ${exp.teamSize} personas</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-burgundy-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <span>${exp.location}</span>
              </div>
            </div>` : ''
          }
        </div>
      </div>
    `).join('');

    container.innerHTML = html;
  }

  /**
   * Renderiza la sección de proyectos
   */
  private async renderProjects(): Promise<void> {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const html = projects.map(project => `
      <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl hover:shadow-burgundy-500/10 hover:border-burgundy-700/50 transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
              <span class="px-3 py-1 text-xs font-semibold bg-burgundy-900/50 border border-burgundy-700/50 text-burgundy-300 rounded-full">
                ${project.role}
              </span>
              <span class="px-3 py-1 text-xs font-semibold ${
                project.status === 'completed' 
                  ? 'bg-green-900/50 border border-green-700/50 text-green-300' 
                  : project.status === 'ongoing'
                  ? 'bg-yellow-900/50 border border-yellow-700/50 text-yellow-300'
                  : 'bg-gray-700/50 border border-gray-600/50 text-gray-300'
              } rounded-full">
                ${project.status === 'completed' ? 'Completado' : project.status === 'ongoing' ? 'En curso' : 'Concepto'}
              </span>
            </div>
          </div>
          
          <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-burgundy-300 transition-colors">
            ${project.title}
          </h3>
          
          <p class="text-gray-300 mb-6 leading-relaxed line-clamp-3">
            ${project.description}
          </p>
          
          <div class="mb-6">
            <p class="text-sm text-gray-400 mb-2">
              <span class="font-semibold text-burgundy-400">${project.company}</span> • ${project.duration}
            </p>
          </div>
          
          ${project.metrics ? `
            <div class="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-900/50 border border-gray-700/30 rounded-xl">
              ${project.metrics.userGrowth ? `<div class="text-center"><div class="text-xl font-bold text-burgundy-400">${project.metrics.userGrowth}</div><div class="text-xs text-gray-400 font-medium">Crecimiento</div></div>` : ''}
              ${project.metrics.revenue ? `<div class="text-center"><div class="text-xl font-bold text-green-400">${project.metrics.revenue}</div><div class="text-xs text-gray-400 font-medium">Revenue</div></div>` : ''}
              ${project.metrics.efficiency ? `<div class="text-center"><div class="text-xl font-bold text-blue-400">${project.metrics.efficiency}</div><div class="text-xs text-gray-400 font-medium">Eficiencia</div></div>` : ''}
              ${project.metrics.satisfaction ? `<div class="text-center"><div class="text-xl font-bold text-purple-400">${project.metrics.satisfaction}</div><div class="text-xs text-gray-400 font-medium">Satisfacción</div></div>` : ''}
            </div>
          ` : ''}
          
          <div class="flex flex-wrap gap-2">
            ${project.methodologies.slice(0, 3).map(methodology => 
              `<span class="px-3 py-1 text-xs bg-gray-700/50 border border-gray-600/30 text-gray-300 rounded-full font-medium">
                ${methodology}
              </span>`
            ).join('')}
            ${project.methodologies.length > 3 ? 
              `<span class="px-3 py-1 text-xs bg-burgundy-900/50 border border-burgundy-700/50 text-burgundy-300 rounded-full font-medium">
                +${project.methodologies.length - 3} más
              </span>` : ''
            }
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = html;
  }

  /**
   * Renderiza la sección de skills
   */
  private async renderSkills(): Promise<void> {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    // Agrupar skills por categoría
    const skillsByCategory = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);

    // Añadir metodologías como una categoría especial
    const methodologyCategory = {
      methodology: methodologies
    };

    const categoryIcons = {
      product: '🚀',
      agile: '🔄',
      data: '📊',
      technical: '⚙️',
      leadership: '👥',
      methodology: '🎯'
    };

    const categoryNames = {
      product: 'Product Management',
      agile: 'Metodologías Ágiles',
      data: 'Data & Analytics',
      technical: 'Herramientas Técnicas',
      leadership: 'Liderazgo',
      methodology: 'Metodologías & Frameworks'
    };

    const allCategories = { ...skillsByCategory, ...methodologyCategory };

    const html = Object.entries(allCategories).map(([category, items]) => `
      <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl hover:shadow-burgundy-500/10 hover:border-burgundy-700/50 transition-all duration-300 transform hover:-translate-y-1">
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-12 h-12 bg-burgundy-900/50 border border-burgundy-700/30 rounded-xl flex items-center justify-center">
            <span class="text-2xl">${categoryIcons[category as keyof typeof categoryIcons]}</span>
          </div>
          <h3 class="text-xl font-bold text-white">
            ${categoryNames[category as keyof typeof categoryNames]}
          </h3>
        </div>
        
        <div class="space-y-4">
          ${items.map(item => {
            if ('proficiency' in item) {
              // Es un skill
              const skill = item as Skill;
              return `
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-gray-200 font-medium">${skill.name}</span>
                    <span class="text-xs text-gray-400 font-semibold">${skill.proficiency}/5</span>
                  </div>
                  <div class="flex space-x-1">
                    ${Array.from({ length: 5 }, (_, i) => 
                      `<div class="h-2 flex-1 rounded-full ${
                        i < skill.proficiency 
                          ? 'bg-gradient-to-r from-burgundy-500 to-burgundy-600' 
                          : 'bg-gray-700'
                      }"></div>`
                    ).join('')}
                  </div>
                </div>
              `;
            } else {
              // Es una metodología
              const methodology = item as Methodology;
              return `
                <div class="border-l-4 border-burgundy-500 pl-4 py-2 bg-burgundy-900/20 border border-burgundy-800/30 rounded-r-lg">
                  <div class="flex items-center space-x-2 mb-2">
                    <span class="text-lg">${methodology.icon}</span>
                    <span class="font-semibold text-white">${methodology.name}</span>
                  </div>
                  <p class="text-sm text-gray-300 mb-2 leading-relaxed">${methodology.description}</p>
                  <p class="text-xs text-burgundy-300 font-medium">${methodology.experience}</p>
                </div>
              `;
            }
          }).join('')}
        </div>
      </div>
    `).join('');

    container.innerHTML = html;
  }

  /**
   * Renderiza la sección de certificaciones
   */
  private async renderCertifications(): Promise<void> {
    const container = document.getElementById('certifications-grid');
    if (!container) return;

    const categoryIcons = {
      agile: '🔄',
      product: '🚀',
      data: '📊',
      leadership: '👥',
      technical: '⚙️'
    };

    const html = certifications.map(cert => `
      <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-2xl hover:shadow-burgundy-500/10 hover:border-burgundy-700/50 transition-all duration-300 group transform hover:-translate-y-1">
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-burgundy-900/50 border border-burgundy-700/30 rounded-xl flex items-center justify-center group-hover:bg-burgundy-800/50 transition-colors duration-300">
              <span class="text-2xl">${categoryIcons[cert.category]}</span>
            </div>
            <div>
              <h3 class="font-bold text-white group-hover:text-burgundy-300 transition-colors text-lg">
                ${cert.title}
              </h3>
              <p class="text-sm text-burgundy-400 font-semibold">${cert.issuer}</p>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span class="font-medium">${new Date(cert.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })}</span>
          ${cert.credentialId ? 
            `<span class="font-mono text-xs bg-gray-700/50 border border-gray-600/30 px-3 py-1 rounded-full">
              ${cert.credentialId}
            </span>` : ''
          }
        </div>
        
        ${cert.url ? 
          `<div class="mt-4">
            <a href="${cert.url}" target="_blank" rel="noopener noreferrer" 
               class="inline-flex items-center text-sm text-burgundy-400 hover:text-burgundy-300 transition-colors font-semibold group">
              Ver certificado
              <svg class="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>` : ''
        }
      </div>
    `).join('');

    container.innerHTML = html;
  }

  /**
   * Configura las animaciones
   */
  private setupAnimations(): void {
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
  private updateCurrentYear(): void {
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

console.log('📜 Archivo main.ts cargado correctamente');

// Exportar para testing o uso externo
export { PortfolioApp }; 