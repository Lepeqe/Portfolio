import type { Project, Experience, Certification, Skill, Methodology } from '../types/index.js';

// Datos de ejemplo para proyectos de PM/PO
export const projects: Project[] = [
  {
    id: 'fintech-app',
    title: 'Plataforma FinTech de Pagos Digitales',
    description: 'Lideré el desarrollo de una plataforma integral de pagos digitales que procesó más de $50M en transacciones durante el primer año.',
    role: 'Product Manager',
    company: 'TechFinance Solutions',
    duration: '2022 - 2024',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Stripe API'],
    methodologies: ['Scrum', 'Lean Startup', 'Design Thinking', 'OKRs'],
    achievements: [
      'Incrementé la adopción de usuarios en un 300% en 6 meses',
      'Reduje el time-to-market de nuevas features en 40%',
      'Lideré un equipo multidisciplinario de 12 personas',
      'Implementé métricas de producto que mejoraron la retención en 25%'
    ],
    metrics: {
      userGrowth: '+300%',
      revenue: '$50M+',
      efficiency: '+40%',
      satisfaction: '4.8/5',
      teamSize: 12,
      timeToMarket: '-40%'
    },
    status: 'completed'
  },
  {
    id: 'ecommerce-platform',
    title: 'Marketplace B2B SaaS',
    description: 'Transformé una plataforma legacy en un marketplace moderno que conecta +1000 proveedores con empresas.',
    role: 'Product Owner',
    company: 'Digital Commerce Inc',
    duration: '2021 - 2022',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'GCP'],
    methodologies: ['Scrum', 'Kanban', 'User Story Mapping', 'A/B Testing'],
    achievements: [
      'Migré exitosamente 850K usuarios sin pérdida de datos',
      'Aumenté el GMV (Gross Merchandise Value) en 180%',
      'Optimicé el funnel de conversión mejorando el checkout en 60%',
      'Establecí proceso de Product Discovery que redujo features fallidas en 70%'
    ],
    metrics: {
      userGrowth: '850K migrados',
      revenue: '+180% GMV',
      efficiency: '+60%',
      satisfaction: '4.6/5',
      teamSize: 8
    },
    status: 'completed'
  },
  {
    id: 'healthtech-mvp',
    title: 'App de Telemedicina MVP',
    description: 'Conceptualización y desarrollo de MVP para startup de telemedicina enfocada en atención primaria.',
    role: 'PM/PO',
    company: 'HealthTech Startup',
    duration: '2024 - Presente',
    technologies: ['React', 'FastAPI', 'WebRTC', 'Firebase', 'Stripe'],
    methodologies: ['Lean Startup', 'Design Sprint', 'Jobs-to-be-Done', 'Continuous Discovery'],
    achievements: [
      'Validé hipótesis de producto con 500+ entrevistas de usuarios',
      'Alcancé Product-Market Fit en 4 meses',
      'Conseguí 10K usuarios registrados en fase beta',
      'Establecí partnerships con 25 profesionales de salud'
    ],
    metrics: {
      userGrowth: '10K beta users',
      satisfaction: '4.9/5',
      teamSize: 6,
      timeToMarket: '4 meses'
    },
    status: 'ongoing'
  }
];

export const experiences: Experience[] = [
  {
    id: 'senior-pm',
    position: 'Senior Product Manager',
    company: 'TechFinance Solutions',
    startDate: '2022-03',
    endDate: '2024-02',
    location: 'Buenos Aires, Argentina (Remoto)',
    description: 'Lideré la estrategia de producto para una plataforma FinTech B2B que procesaba +$100M anuales.',
    responsibilities: [
      'Definición y ejecución de roadmap de producto para 3 líneas de negocio',
      'Gestión de backlog y priorización basada en valor de negocio y user research',
      'Coordinación con equipos de Engineering, Design, Data y Business',
      'Análisis de métricas de producto y definición de KPIs',
      'Gestión de stakeholders internos y externos'
    ],
    achievements: [
      'Incrementé el Annual Recurring Revenue (ARR) en $12M',
      'Implementé proceso de Product Discovery que redujo tiempo de desarrollo en 35%',
      'Lideré migración tecnológica que mejoró performance en 50%',
      'Desarrollé cultura data-driven que incrementó la precisión de predicciones en 80%'
    ],
    technologies: ['Mixpanel', 'Amplitude', 'Figma', 'Miro', 'Jira', 'Confluence'],
    teamSize: 15
  },
  {
    id: 'product-owner',
    position: 'Product Owner',
    company: 'Digital Commerce Inc',
    startDate: '2020-06',
    endDate: '2022-02',
    location: 'São Paulo, Brasil (Híbrido)',
    description: 'Responsable de producto para marketplace B2B con +500K usuarios activos mensuales.',
    responsibilities: [
      'Gestión de product backlog para 4 scrum teams',
      'Definición de acceptance criteria y user stories',
      'Facilitación de ceremonias ágiles (sprint planning, reviews, retrospectives)',
      'Colaboración estrecha con UX/UI para mejoras de usabilidad',
      'Análisis de customer feedback y datos de comportamiento'
    ],
    achievements: [
      'Aumenté la conversión de visitantes a compradores en 45%',
      'Reduje el abandono de carrito en 30% mediante optimizaciones UX',
      'Implementé sistema de recomendaciones que incrementó el AOV en 25%',
      'Establecí métricas de cohort que mejoraron la retención en 40%'
    ],
    technologies: ['Google Analytics', 'Hotjar', 'Optimizely', 'Zeplin', 'Azure DevOps'],
    teamSize: 12
  }
];

export const certifications: Certification[] = [
  {
    id: 'cspo',
    title: 'Certified Scrum Product Owner (CSPO)',
    issuer: 'Scrum Alliance',
    date: '2023-08',
    category: 'agile',
    credentialId: 'SA-12345678'
  },
  {
    id: 'psm',
    title: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    date: '2023-03',
    category: 'agile',
    credentialId: 'PSM-987654'
  },
  {
    id: 'lean-six-sigma',
    title: 'Lean Six Sigma Green Belt',
    issuer: 'IASSC',
    date: '2022-11',
    category: 'product',
    credentialId: 'IASSC-54321'
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics Individual Qualification',
    issuer: 'Google',
    date: '2023-12',
    category: 'data',
    credentialId: 'GA-IQ-123456'
  },
  {
    id: 'product-management',
    title: 'Product Management Fundamentals',
    issuer: 'Product School',
    date: '2022-05',
    category: 'product',
    credentialId: 'PS-PM-789'
  }
];

export const skills: Skill[] = [
  // Product Skills
  { name: 'Product Strategy', category: 'product', proficiency: 5 },
  { name: 'Product Discovery', category: 'product', proficiency: 5 },
  { name: 'User Research', category: 'product', proficiency: 4 },
  { name: 'Product Analytics', category: 'product', proficiency: 5 },
  { name: 'Roadmapping', category: 'product', proficiency: 5 },
  { name: 'Go-to-Market Strategy', category: 'product', proficiency: 4 },
  
  // Agile Skills
  { name: 'Scrum', category: 'agile', proficiency: 5 },
  { name: 'Kanban', category: 'agile', proficiency: 4 },
  { name: 'SAFe', category: 'agile', proficiency: 3 },
  { name: 'Lean Startup', category: 'agile', proficiency: 5 },
  
  // Data Skills
  { name: 'SQL', category: 'data', proficiency: 4 },
  { name: 'Google Analytics', category: 'data', proficiency: 5 },
  { name: 'Mixpanel', category: 'data', proficiency: 5 },
  { name: 'A/B Testing', category: 'data', proficiency: 4 },
  { name: 'Cohort Analysis', category: 'data', proficiency: 4 },
  
  // Technical Skills
  { name: 'API Understanding', category: 'technical', proficiency: 4 },
  { name: 'Wireframing', category: 'technical', proficiency: 4 },
  { name: 'Figma', category: 'technical', proficiency: 4 },
  { name: 'Jira', category: 'technical', proficiency: 5 },
  
  // Leadership Skills
  { name: 'Stakeholder Management', category: 'leadership', proficiency: 5 },
  { name: 'Team Leadership', category: 'leadership', proficiency: 4 },
  { name: 'Cross-functional Collaboration', category: 'leadership', proficiency: 5 },
  { name: 'Conflict Resolution', category: 'leadership', proficiency: 4 }
];

export const methodologies: Methodology[] = [
  {
    name: 'Scrum',
    description: 'Framework ágil para desarrollo iterativo e incremental',
    experience: '4+ años como PO y SM certificado',
    category: 'agile',
    icon: '🔄'
  },
  {
    name: 'Lean Startup',
    description: 'Metodología para desarrollo de productos con validación continua',
    experience: '3+ años aplicando Build-Measure-Learn',
    category: 'lean',
    icon: '🚀'
  },
  {
    name: 'Design Thinking',
    description: 'Proceso centrado en el usuario para resolver problemas complejos',
    experience: '2+ años facilitando design sprints',
    category: 'design',
    icon: '💡'
  },
  {
    name: 'Jobs-to-be-Done',
    description: 'Framework para entender las motivaciones reales de los usuarios',
    experience: '2+ años aplicando JTBD en discovery',
    category: 'product',
    icon: '🎯'
  },
  {
    name: 'OKRs',
    description: 'Sistema de gestión de objetivos y resultados clave',
    experience: '3+ años implementando OKRs a nivel producto',
    category: 'agile',
    icon: '📊'
  },
  {
    name: 'Data-Driven Decision Making',
    description: 'Toma de decisiones basada en datos y experimentación',
    experience: '4+ años con analytics y A/B testing',
    category: 'data',
    icon: '📈'
  }
]; 