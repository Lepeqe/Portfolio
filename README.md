# Portfolio PM/PO 🚀

Portfolio profesional moderno para Product Manager y Product Owner, construido con tecnologías web estándar (HTML5, CSS3, TypeScript) y Tailwind CSS.

## ✨ Características

### 🎯 **Diseño Específico para PM/PO**
- Secciones optimizadas para mostrar experiencia en gestión de productos
- Métricas de impacto y KPIs prominentes
- Casos de éxito con datos cuantificables
- Metodologías ágiles y frameworks destacados

### 🔧 **Tecnologías Modernas**
- **TypeScript** para desarrollo robusto y type-safe
- **Tailwind CSS** para estilos profesionales y responsive
- **Vite** para desarrollo rápido y build optimizado
- **Vanilla JavaScript** sin dependencias pesadas
- **Arquitectura modular** y escalable

### 🌗 **Experiencia de Usuario Superior**
- Tema claro/oscuro con persistencia
- Diseño responsive optimizado para todos los dispositivos
- Animaciones suaves y profesionales
- Navegación intuitiva con scroll spy
- Formulario de contacto funcional
- Accesibilidad web (WCAG)

### 📊 **Contenido Estructurado**
- **Proyectos**: Casos de éxito con métricas de impacto
- **Experiencia**: Timeline profesional detallado
- **Skills**: Competencias organizadas por categoría
- **Metodologías**: Frameworks ágiles y de producto
- **Certificaciones**: Validación formal de conocimientos

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ y npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio-pm-po.git
cd portfolio-pm-po

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El portfolio estará disponible en http://localhost:3000
```

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot reload

# Build
npm run build        # Build para producción
npm run preview      # Preview del build de producción

# Calidad de código
npm run type-check   # Verificación de tipos TypeScript
```

## 📁 Estructura del Proyecto

```
portfolio-pm-po/
├── src/
│   ├── data/
│   │   └── portfolio.ts     # Datos del portfolio (proyectos, experiencia, etc.)
│   ├── types/
│   │   └── index.ts         # Definiciones de tipos TypeScript
│   ├── utils/
│   │   └── theme.ts         # Gestor de temas
│   └── main.ts              # Aplicación principal
├── ASSETS/                  # Imágenes y recursos estáticos
├── index.html               # Página principal
├── tailwind.config.js       # Configuración de Tailwind CSS
├── tsconfig.json           # Configuración de TypeScript
├── vite.config.ts          # Configuración de Vite
└── package.json            # Dependencias y scripts
```

## 🛠️ Personalización

### 1. **Datos Personales**
Edita `src/data/portfolio.ts` para actualizar:
- Información personal
- Proyectos y métricas
- Experiencia laboral
- Skills y certificaciones

### 2. **Estilos y Branding**
Modifica `tailwind.config.js` para personalizar:
- Colores primarios y secundarios
- Tipografías
- Espaciados y dimensiones

### 3. **Contenido HTML**
Actualiza `index.html` para cambiar:
- Información de contacto
- Meta tags y SEO
- Enlaces a redes sociales

## 🎨 Tema y Personalización Visual

El portfolio incluye un sistema de temas profesional:

- **Tema Claro**: Optimizado para lectura diurna
- **Tema Oscuro**: Moderno y elegante para uso nocturno
- **Persistencia**: Recuerda la preferencia del usuario
- **Detección automática**: Respeta la preferencia del sistema

### Colores Personalizados

```css
/* Ejemplo de personalización en tailwind.config.js */
colors: {
  primary: {
    500: '#tu-color-primario',
    600: '#tu-color-primario-oscuro',
    // ...
  }
}
```

## 📱 Responsive Design

Diseñado mobile-first con breakpoints optimizados:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Wide**: > 1280px

## ⚡ Performance

- **Lazy Loading**: Imágenes y componentes
- **Code Splitting**: Carga modular
- **Tree Shaking**: Bundle optimizado
- **Compresión**: Assets minimizados
- **CDN Ready**: Optimizado para CDN

## 🔒 Seguridad y Accesibilidad

- **HTTPS**: Configurado para SSL
- **ARIA**: Labels y roles apropiados
- **Keyboard Navigation**: Totalmente navegable por teclado
- **Screen Readers**: Compatible con lectores de pantalla
- **Contrast**: Ratios de contraste WCAG AA

## 📈 SEO y Metadatos

- **Open Graph**: Integración para redes sociales
- **Schema.org**: Structured data para mejor indexación
- **Meta tags**: Optimizados para SEO
- **Sitemap**: Generación automática

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy la carpeta dist/
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push dist/ a rama gh-pages
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Tailwind CSS](https://tailwindcss.com/) por el framework de CSS
- [TypeScript](https://www.typescriptlang.org/) por el tipado estático
- [Vite](https://vitejs.dev/) por la herramienta de build
- [Inter Font](https://rsms.me/inter/) por la tipografía

---

**Creado con 💙 para la comunidad PM/PO**

Si este portfolio te fue útil, ¡dale una ⭐ en GitHub! 