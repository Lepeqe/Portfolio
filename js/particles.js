class Particles {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'particles-canvas';
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    heroSection.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.frameId = null;
    
    this.init();
    this.animate();
    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  resize() {
    this.width = this.canvas.width = this.canvas.offsetWidth;
    this.height = this.canvas.height = this.canvas.offsetHeight;
    this.init();
  }

  init() {
    const particleCount = Math.floor(this.width / 10);
    
    this.particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.2 + 0.1
    }));
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary');
    
    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      
      if (p.x < 0 || p.x > this.width) p.speedX *= -1;
      if (p.y < 0 || p.y > this.height) p.speedY *= -1;
      
      p.opacity += (Math.random() * 0.02 - 0.01);
      p.opacity = Math.max(0.1, Math.min(0.3, p.opacity));
      
      this.ctx.fillStyle = `rgba(${hexToRgb(primaryColor)}, ${p.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    
    this.frameId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
    this.canvas.remove();
  }
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}