class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    if (!this.themeToggle) return;

    this.initTheme();
    this.initEventListeners();
    this.initSystemThemeListener();
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    this.applyTheme(currentTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.themeToggle.setAttribute('aria-pressed', theme === 'dark');
    
    // Actualizar meta tag para theme-color
    const themeColor = theme === 'dark' ? '#121212' : '#f8f9fa';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
  }

  initEventListeners() {
    this.themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.applyTheme(newTheme);
    });
  }

  initSystemThemeListener() {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    colorSchemeQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        this.applyTheme(newTheme);
      }
    });
  }
}