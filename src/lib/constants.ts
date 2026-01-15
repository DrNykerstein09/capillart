// Información de contacto
export const CONTACT_INFO = {
  whatsapp: "5215520923088", // Número de WhatsApp (actualizar con el real)
  whatsappMessage: "Hola, me gustaría agendar mi diagnóstico gratuito para trasplante capilar",
  email: "contacto@capilart.com.mx",
  phone: "+52 55 2092 3088",
  address: "C. Querétaro 27, Roma Nte., Cuauhtémoc, 06700, CDMX",
  googleMapsUrl: "https://maps.app.goo.gl/zSKJ9dhDnkvgTX8M7",
};

// Redes sociales
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61583446914067",
  instagram: "https://www.instagram.com/capilart.oficial?igsh=MWZwMWRsZDFkbGZtcA==",
  tiktok: "https://www.tiktok.com/@capilart2?_r=1&_t=ZS-932n7436MC7",
};

// Servicios principales
export const SERVICES = {
  trasplantes: {
    title: "Procedimientos de Trasplante",
    items: [
      {
        id: "fue-manual",
        title: "FUE Manual",
        description: "Técnica de alta precisión con micropunches para extracción manual de folículos",
        features: ["Control manual completo", "Alta precisión", "Técnica tradicional probada"],
      },
      {
        id: "fue-robotica",
        title: "FUE Robótica (ARTAS IX)",
        description: "Sistema robótico con IA para máxima precisión y velocidad",
        features: ["99% de efectividad", "3x más rápido", "Recuperación acelerada"],
        highlight: true,
      },
      {
        id: "dhi",
        title: "Implantación Directa DHI",
        description: "Colocación directa sin incisiones previas para resultados naturales",
        features: ["Sin incisiones previas", "Control total de dirección", "Aspecto 100% natural"],
      },
      {
        id: "cejas-barba",
        title: "Trasplante de Cejas y Barba",
        description: "Servicios especializados para mejorar densidad facial",
        features: ["Diseño personalizado", "Resultados naturales", "Técnicas especializadas"],
      },
    ],
  },
  complementarios: {
    title: "Tratamientos Complementarios",
    items: [
      {
        id: "celulas-madre",
        title: "Terapia con Células Madre",
        description: "Estimula el crecimiento de nuevos folículos y mejora la salud del cuero cabelludo",
      },
      {
        id: "prp",
        title: "Factores de Crecimiento (PRP)",
        description: "Plasma Rico en Plaquetas para potenciar regeneración",
      },
      {
        id: "exosomas", 
        title: "Exosomas",
        description: "Vesículas extracelulares para regenerar y revitalizar folículos",
      },
      {
        id: "laser",
        title: "Terapia Láser LLLT",
        description: "Estimula flujo sanguíneo y mejora salud folicular",
      },
      {
        id: "micropigmentacion",
        title: "Micropigmentación Capilar",
        description: "Solución cosmética que simula apariencia de cabello denso",
      },
    ],
  },
};

// Proceso de 6 pasos
export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Envía tus fotos",
    description: "Mándanos al menos 4 fotos laterales de tu cabeza mostrando la situación que deseas corregir",
    icon: "Camera",
  },
  {
    number: 2,
    title: "Recibe información",
    description: "Obtén nuestro brochure informativo con invitación a diagnóstico totalmente gratuito",
    icon: "FileText",
  },
  {
    number: 3,
    title: "Plan personalizado",
    description: "Elaboramos un plan de implante especial con número de injertos necesarios y presupuesto detallado",
    icon: "ClipboardCheck",
  },
  {
    number: 4,
    title: "Fecha de cirugía",
    description: "Agenda la fecha de tu cirugía seleccionada según tu comodidad",
    icon: "Calendar",
  },
  {
    number: 5,
    title: "Trasplante capilar",
    description: "Procedimiento con tecnología robótica ARTAS IX, mínimamente invasivo y máxima precisión",
    icon: "Activity",
  },
  {
    number: 6,
    title: "Seguimiento post-operatorio",
    description: "Acompañamiento continuo con terapias complementarias y cuidados especializados",
    icon: "Heart",
  },
];

// Tabla comparativa
export const COMPARISON_DATA = [
  {
    other: "Tasa de permanencia del cabello trasplantado entre el 70% y el 90%",
    capilart: "La tasa de permanencia es siempre del 99% con FUE Robotizado",
  },
  {
    other: "Se desconoce la satisfacción real",
    capilart: "Satisfacción garantizada del cliente",
  },
  {
    other: "Se desconoce quién será el equipo que realizará la intervención",
    capilart: "Conocerás a un equipo profesional con dos décadas de experiencia",
  },
  {
    other: "No hay garantía del médico",
    capilart: "Médicos especializados dedicados a la formación de más médicos",
  },
  {
    other: "Existe una deficiencia en la explicación del proceso y los resultados",
    capilart: "Información clara con evaluación minuciosa y solución honesta",
  },
  {
    other: "No se tiene una idea clara de los resultados que el paciente puede esperar",
    capilart: "Modelos virtuales con IA para visualizar resultados esperados",
  },
];

// Tecnología ARTAS
export const ARTAS_FEATURES = [
  {
    title: "Extracción Precisa",
    description: "IA y robótica avanzada para extracción eficiente reduciendo daño folicular",
    icon: "Cpu",
  },
  {
    title: "Implantación Automatizada",
    description: "Uniformidad en ángulo, profundidad y orientación para resultados naturales",
    icon: "Target",
  },
  {
    title: "Recuperación Reducida",
    description: "Mínimo daño a tejidos circundantes permite recuperación más corta",
    icon: "Clock",
  },
  {
    title: "Resultados Personalizados",
    description: "Software analiza cabello existente y planifica procedimiento individualizado",
    icon: "User",
  },
];

// Equipo médico
export const TEAM = {
  directors: [
    {
      id: "omar",
      name: "Dr. Omar Carreón Terrones",
      role: "Director Médico",
      image: "/src/assets/dr-omar.jpg",
      shortBio: "Médico experimentado con más de 15 años en el sector salud",
      fullBio: "Médico experimentado con más de 15 años en el sector salud, especializado en ultrasonido, medicina estética y gestión institucional. Líder del equipo médico de CapilArt con amplia experiencia en técnicas FUE y medicina estética.",
      credentials: [
        "Egresado de la Universidad Justo Sierra",
        "Diplomados en ultrasonido y medicina estética",
        "Maestría en gestión de instituciones de salud",
        "Miembro de asociaciones médicas nacionales e internacionales",
        "Especialista en técnica FUE (Follicular Unit Extraction)",
      ],
      experience: "15+ años",
      specialty: "FUE, Ultrasonido, Medicina Estética",
    },
    {
      id: "ana",
      name: "Dr. Ana Claudia Castillo Flores",
      role: "Director Administrativo",
      image: "/src/assets/dr-ana.jpg",
      shortBio: "Más de 20 años de experiencia en áreas administrativas",
      fullBio: "Contadora Pública con más de 20 años de experiencia, especializada en gestión operativa, finanzas y recursos humanos. Dirige los aspectos operacionales del negocio con enfoque en resolución de problemas y gestión institucional.",
      credentials: [
        "Contadora Pública",
        "Diplomado en Habilidades Gerenciales - Universidad Anáhuac",
        "Certificaciones en técnicas ortopédicas - Medacta Academy",
        "Experiencia en asistencia técnica en áreas quirúrgicas",
        "Especialista en gestión operativa y relaciones públicas",
      ],
      experience: "20+ años",
      specialty: "Gestión Operativa, Finanzas, RH",
    },
    {
      id: "bernardo",
      name: "Bernardo Camacho Chavaría",
      role: "Dirección de Finanzas",
      image: null,
      shortBio: "15 años de experiencia en Banca de Inversión y Finanzas Corporativas",
      fullBio: "Economista especializado en planeación financiera y estrategia corporativa, con amplia experiencia en fusiones y adquisiciones. Experto en transferencia de tecnología y consolidación de empresas de alta innovación.",
      credentials: [
        "Economista - Universidad Panamericana",
        "Posgrado en Finanzas - Universidad Panamericana",
        "Posgrado en Gestión de Riesgos Financieros",
        "Estudios en University of Oxford (ISIS Innovation Center)",
        "Estudios en Wharton Business School, University of Pennsylvania",
        "9 años como socio fundador/director en Avanza Capital",
      ],
      experience: "15 años",
      specialty: "Estrategia Financiera, M&A, Innovación",
    },
  ],
};

// Meta información para SEO
export const SITE_META = {
  title: "CapilArt - Clínica de Trasplante Capilar con Robot ARTAS IX",
  description: "Clínica especializada en trasplante capilar FUE con tecnología robótica ARTAS IX. 99% de efectividad garantizada. Diagnóstico gratuito.",
  keywords: "trasplante capilar, FUE, ARTAS IX, robot capilar, alopecia, implante capilar, México",
  url: "https://capilart.com.mx",
};