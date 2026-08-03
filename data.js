// Data for Orange LATAM AI Tools Presentation
const slidesData = [
  {
    id: 19,
    type: "closing",
    title: "ORANGE LATAM",
    tagline: "WE CREATE · WE PLAN · WE DO",
    web: "WWW.ORANGE-LA.COM",
    locations: ["BOGOTÁ", "MÉXICO", "BUENOS AIRES", "MIAMI", "CHILE", "QUITO"],
    slideNum: "01"
  },


  {
    id: 2,
    type: "identity",
    title: "WE CREATE WE PLAN WE DO",
    subtitle: "Orange LATAM",
    copyright: "PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®",
    slideNum: "02"
  },
  {
    id: 3,
    type: "intro",
    title: "Guía Práctica de Herramientas",
    subtitle: "QUÉ SE PUDIERA USAR EN CADA ÁREA · QUE YA TENEMOS DISPONIBLE · QUE COMPLEMENTAN",
    copyright: "PROPIEDAD GRÁFICA E INTELECTUAL. TODOS LOS DERECHOS RESERVADOS ®",
    slideNum: "03"
  },
  {
    id: 4,
    type: "concept-three",
    category: "Conceptos IA",
    title: "¿Fundamentos de la Inteligencia artificial (IA)?",
    slideNum: "01",
    concepts: [
      {
        title: "El núcleo",
        desc: "Un motor estadístico que predice —palabra, píxel o acción— la opción más probable a partir de billones de datos."
      },
      {
        title: "Modelos de lenguaje",
        desc: "Redes neuronales masivas que interpretan contexto y generan lenguaje natural, simulando el razonamiento humano sin realmente pensar."
      },
      {
        title: "De generar a razonar",
        desc: "Pasó de crear activos simples (copys, imágenes) a ejecutar lógica de negocio y tomar decisiones autónomas dentro de un flujo de trabajo completo."
      }
    ]
  },
  {
    id: 5,
    type: "concept-two",
    category: "Conceptos IA",
    title: "Chat y Agente",
    slideNum: "01",
    concepts: [
      {
        title: "Chat (Asistencia Reactiva)",
        desc: "Dinámica de instrucción y respuesta: el humano dirige cada paso y toma las decisiones finales. Uso típico: redactar, traducir documentos breves o generar ideas rápidas de campaña."
      },
      {
        title: "Agente (Autonomía Proactiva)",
        desc: "Recibe un objetivo de negocio, diseña su plan, se autoevalúa y ejecuta todo el proceso sin supervisión. Uso típico en la agencia: auditar el SEO de un cliente nuevo de forma automática y enviarlo por email."
      }
    ]
  },
  {
    id: 6,
    type: "concept-two",
    category: "Guía de Recursos",
    title: "Tokens y Créditos",
    slideNum: "02",
    concepts: [
      {
        title: "Tokens (Métrica Técnica)",
        desc: "Unidad mínima de procesamiento de un LLM (~4 caracteres); es el \"combustible\" que la IA lee y escribe. Cobro: pago por uso real vía APIs de desarrollo (OpenAI, Anthropic); ideal para automatizaciones personalizadas en n8n o Make."
      },
      {
        title: "Créditos (Métrica Comercial)",
        desc: " \"Monedas\" internas que las herramientas comerciales asignan al inicio de mes. Cobro: prepago o suscripción de usuario; cada acción compleja (una imagen, un reporte) consume créditos predefinidos."
      }
    ]
  },
  {
    id: 7,
    type: "ecosystem",
    category: "Arquitectura IA",
    title: "Ecosistema Agéntico Técnico",
    slideNum: "03",
    steps: [
      { num: "1", title: "El LLM", subtitle: "El Cerebro Lógico", desc: "Modelo fundacional (GPT-4o, Claude) que interpreta intenciones y razona instrucciones complejas." },
      { num: "2", title: "Contexto", subtitle: "La Memoria RAM", desc: "Cuánta información (briefs, reglas, histórico) puede mantener activa la IA sin perder detalles clave." },
      { num: "3", title: "El Agente", subtitle: "El Ejecutor Autónomo", desc: "Envuelve al LLM dándole iniciativa propia para autoevaluarse y planificar flujos lógicos." },
      { num: "4", title: "El MCP", subtitle: "El Enchufe Universal", desc: "Protocolo estándar (como un puerto USB) que conecta la IA a otras apps o bases de datos." },
      { num: "5", title: "Las Tools", subtitle: "Las Manos Técnicas", desc: "Acciones del agente —buscar en Google, redactar emails, descargar un Excel— para ejecutar tareas." }
    ]
  },
  {
    id: 8,
    type: "concept-two",
    category: "Criterio Metodológico",
    title: "Tools vs. Skills",
    slideNum: "04",
    concepts: [
      {
        title: "Tools (Las Herramientas)",
        desc: "Son \"las manos\" del agente: sistemas externos que ejecuta de forma autónoma. No determinan la calidad del resultado, sino su alcance técnico. Ejemplos: buscador web, APIs de analítica, protocolo MCP para leer archivos, envío de correos."
      },
      {
        title: "Skills (Las Habilidades)",
        desc: "Son \"la metodología y criterio\": instrucciones (prompts, reglas de negocio) que enseñan al agente a usar las Tools con el estándar de calidad de la agencia. Ejemplos: reporte SEO enfocado en conversión, auditar competidores con nuestra matriz, priorizar keywords transaccionales."
      }
    ]
  },
  {
    id: 9,
    type: "categories-grid",
    title: "Áreas de Herramientas IA",
    subtitle: "Propiedad Gráfica e Intelectual",
    slideNum: "04",
    categories: ["SEO", "VIDEO", "AUDIO", "IMÁGENES", "DISEÑO UI", "ASISTENTES", "AGENTICO"]
  },
  {
    id: 10,
    type: "types-explanation",
    title: "Tipos de Herramientas",
    subtitle: "Estructura de Acceso para la Agencia",
    slideNum: "05",
    groups: [
      {
        title: "Ya disponibles en SEO Conjuntas",
        badge: "✓ YA LO TIENES",
        desc: "Herramientas que la agencia ya tiene activadas en el plan actual de SEO Conjuntas. Solo hay que usarlas, sin costo adicional.",
        examples: ["Semrush", "Mangools", "Ubersuggest", "Midjourney", "Freepik", "DALL·E 3", "InVideo", "Magisto", "SORA", "ChatGPT Plus incluido"]
      },
      {
        title: "Herramientas independientes",
        badge: "★ INDEPENDIENTE",
        desc: "Herramientas de IA de primera línea que no son de SEO Conjuntas, pero se recomiendan por su impacto real en el trabajo de la agencia.",
        examples: ["Claude", "Gemini", "ChatGPT", "NotebookLM", "Perplexity", "Metricool", "ElevenLabs", "Google Stitch", "Nano Banana"]
      }
    ]
  },
  {
    id: 11,
    type: "tools",
    category: "SEO",
    title: "SEO",
    subtitle: "Posicionamiento en buscadores y auditoría técnica",
    slideNum: "06",
    tools: [
      {
        name: "SEMRUSH GURÚ",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Análisis + Auditoría + Contenido",
        desc: "Para auditorías de cliente, investigación de competidores y estrategia de contenido mensual.",
        tutorial: "https://www.youtube.com/watch?v=4_xOC5cmuVc"
      },
      {
        name: "MANGOOLS AGENCY",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Keywords · Tracking · Backlinks",
        desc: "Para búsqueda de keywords diaria y seguimiento de rankings de clientes.",
        tutorial: "https://www.youtube.com/watch?v=JZry_EFgqzg"
      },
      {
        name: "SCREAMING FROG",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Auditoría técnica profunda",
        desc: "Para auditorías técnicas antes de lanzar o migrar un sitio web de cliente.",
        tutorial: "https://www.youtube.com/watch?v=IGy3NBR1XqM"
      },
      {
        name: "PERPLEXITY AI",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Research en tiempo real",
        desc: "Antes de escribir cualquier pieza de contenido o brief de cliente. Reemplaza horas de búsqueda.",
        tutorial: "https://www.youtube.com/watch?v=SfuXCj8jqmk"
      },
      {
        name: "ANSWER THE PUBLIC",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Ideas de contenido SEO",
        desc: "Al planificar el calendario editorial de un cliente nuevo.",
        tutorial: "https://www.youtube.com/watch?v=K5EkttOpr3s"
      }
    ]
  },
  {
    id: 12,
    type: "tools",
    category: "VIDEO",
    title: "VIDEO",
    subtitle: "Creación, edición de video con IA",
    slideNum: "07",
    tools: [
      {
        name: "INVIDEO AI",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Texto → Video completo",
        desc: "Para crear videos de redes sociales o explainers desde un artículo o texto en minutos. Tiene generador de voz en off incluido.",
        tutorial: "https://www.youtube.com/watch?v=JFoXttlALZw"
      },
      {
        name: "SORA (CHATGPT)",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Generación de video con IA",
        desc: "Para crear clips de marca visualmente impactantes desde una descripción de texto. Disponible via ChatGPT Plus incluido en la conjunta.",
        tutorial: "https://www.youtube.com/watch?v=kkwe8zVecM0"
      },
      {
        name: "MAGISTO PRO",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Edición automática + Vimeo Pro",
        desc: "Para editar videos de cliente con estilos automáticos. Incluye Vimeo Pro para hosting profesional sin marca de agua.",
        tutorial: "https://www.youtube.com/watch?v=1KGtxMcCD4E"
      },
      {
        name: "OPUS CLIP",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Repurposing automático",
        desc: "Convierte un video largo en clips cortos virales. Clave para agencias que producen contenido para múltiples plataformas. Plan gratis disponible.",
        tutorial: "https://www.youtube.com/watch?v=MVUDXVNaQ58"
      },
      {
        name: "FREEPIK VIDEO IA",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Texto/imagen → video corto",
        desc: "Para generar clips cortos de producto o campaña desde texto. Ya incluido en tu plan Freepik de SEO Conjuntas.",
        tutorial: "https://www.youtube.com/watch?v=RrEf5NsMlTI"
      },
      {
        name: "ELEVENLABS",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Voz en off fotorrealista",
        desc: "Para locuciones y voice-overs de calidad profesional. Clona voces o elige entre 200+ voces en español. Plan gratuito con 10K caracteres/mes.",
        tutorial: "https://www.youtube.com/watch?v=qCZHNbf7z5g"
      }
    ]
  },
  {
    id: 13,
    type: "tools",
    category: "EDICIÓN",
    title: "EDICIÓN DE VIDEO",
    subtitle: "Edición de video con IA",
    slideNum: "09",
    tools: [
      {
        name: "HIGGSFIELD AI",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Texto/Imagen → Video cinemático",
        desc: "Genera clips de video hiperrealistas, controla los ángulos de cámara como un director, clona voces y mantiene consistencia de rostros.",
        tutorial: "https://www.youtube.com/watch?v=k5snckO_l0I"
      },
      {
        name: "SUBMAGIC",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Video corto → Subtítulos",
        desc: "Añade subtítulos dinámicos estilo influencer, emojis automáticos y efectos de sonido en segundos para máxima viralidad.",
        tutorial: "https://www.youtube.com/watch?v=pbmRmo73DFA"
      },
      {
        name: "WISECUT",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Recorte automático de silencios",
        desc: "Elimina automáticamente las pausas incómodas de tus grabaciones. Equilibra la música de fondo de forma inteligente.",
        tutorial: "https://www.youtube.com/watch?v=muzzSuYj64M"
      },
      {
        name: "DESCRIPT",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Transcripción → Edición por texto",
        desc: "Edita tu video borrando texto como si fuera un Word. Elimina muletillas (\"ehh\", \"umm\") y silencios con un solo clic.",
        tutorial: "https://www.youtube.com/watch?v=Eo-FPrDONqY"
      },
      {
        name: "CAPCUT",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Todo en uno → Plantillas y efectos",
        desc: "La herramienta más accesible para arrastrar clips, aplicar subtítulos, eliminar fondos y usar transiciones al instante.",
        tutorial: "https://www.youtube.com/watch?v=jFUPLsPctlc"
      },
      {
        name: "HEYGEN",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Texto → Avatares hiperrealistas",
        desc: "Plataforma líder para portavoces de IA. Clona tu voz, traduce videos moviendo los labios (Lipsync) y genera videos en minutos.",
        tutorial: "https://www.youtube.com/watch?v=uMkt8UaOOOg"
      }
    ]
  },
  {
    id: 14,
    type: "tools",
    category: "AUDIO",
    title: "AUDIO",
    subtitle: "Voz, música y transcripción",
    slideNum: "10",
    tools: [
      {
        name: "ELEVENLABS",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Voz en off fotorrealista",
        desc: "Convierte texto en voz profesional. Más de 5,000 voces en 70+ idiomas. Clona voces y genera locuciones para videos de clientes.",
        tutorial: "https://www.youtube.com/watch?v=qCZHNbf7z5g"
      },
      {
        name: "SUNO V4 (Mureka)",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Música generativa desde texto",
        desc: "Genera canciones completas con letra, melodía y producción desde un prompt. Ideal para jingles y música de fondo.",
        tutorial: "https://www.youtube.com/watch?v=n2x43tA-hzI"
      },
      {
        name: "WHISPER",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Transcripción automática con IA",
        desc: "Transcribe reuniones, entrevistas y podcasts a texto con alta precisión. Detecta hablantes y genera subtítulos.",
        tutorial: "https://www.youtube.com/watch?v=iosd0jUKcvU"
      }
    ]
  },
  {
    id: 15,
    type: "tools",
    category: "IMÁGENES",
    title: "IMÁGENES",
    subtitle: "Generación y edición de imágenes para campañas",
    slideNum: "08",
    tools: [
      {
        name: "MIDJOURNEY",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Imágenes artísticas de campaña",
        desc: "Para assets creativos únicos de alta calidad. El estándar de oro para contenido visual de marcas. Disponible en SEO Conjuntas.",
        tutorial: "https://www.youtube.com/watch?v=xNEUlMQRBjo"
      },
      {
        name: "FREEPIK IA (Magnific)",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Generación + edición integrada",
        desc: "Genera imágenes, las edita con IA y exporta en múltiples formatos. Cuenta con LoRAs para consistencia de personajes.",
        tutorial: "https://www.youtube.com/watch?v=rIic3PuQHAU"
      },
      {
        name: "CANVA (EDU)",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Diseño + plantillas + marca",
        desc: "Para el día a día: posts, stories, presentaciones y documentos. Magic Studio de Canva genera y edita con IA.",
        tutorial: "https://www.youtube.com/watch?v=s1Xj1UDR6aM"
      },
      {
        name: "DALL·E 3",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Generación desde texto",
        desc: "Incluido en ChatGPT Plus de la conjunta. Genera imágenes rápidas sin salir de tu flujo de conversación en ChatGPT.",
        tutorial: "https://www.youtube.com/watch?v=mmfz73EW60w"
      },
      {
        name: "NANO BANANA (GOOGLE)",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Consistencia de marca",
        desc: "Genera imágenes 4K manteniendo la consistencia de personaje o estilo en todos los assets. Gratis en Google Labs.",
        tutorial: "https://www.youtube.com/watch?v=ZSoVm6Q-sbc"
      },
      {
        name: "ADOBE FIREFLY",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Uso comercial 100% legal",
        desc: "Entrenado exclusivamente con imágenes bajo licencia. Ideal para clientes corporativos. Plan gratis disponible.",
        tutorial: "https://www.youtube.com/watch?v=Z1Yj0hct1nA"
      }
    ]
  },
  {
    id: 16,
    type: "tools",
    category: "DISEÑO UI",
    title: "DISEÑO UI",
    subtitle: "Herramientas para diseñar, prototipar y generar assets visuales",
    slideNum: "11",
    tools: [
      {
        name: "CLAUDE DESIGN",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Diseño UI e interfaces con IA",
        desc: "Para prototipado visual acelerado y creación de flujos de usuario dinámicos basados en prompts.",
        tutorial: "https://www.youtube.com/watch?v=R1UHzF_9n4A"
      },
      {
        name: "GENSPARK AI",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Workspace agente · Todo en uno",
        desc: "Para agencias que quieren máxima potencia: slides, research, imágenes y video desde un solo prompt. Plan gratis.",
        tutorial: "https://www.youtube.com/watch?v=7i8-R1qEOzQ"
      },
      {
        name: "STITCH (GOOGLE)",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Diseño e interfaces asistidas",
        desc: "Workspace de diseño inteligente de Google para flujos UX interactivos basados en diseño adaptativo.",
        tutorial: "https://www.youtube.com/watch?v=kgInSDPkWSM"
      },
      {
        name: "V0 (VERCEL)",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Generación de interfaces UI",
        desc: "Sube capturas de pantalla, bocetos o ideas. Genera código limpio en React, HTML y Tailwind listo para producción.",
        tutorial: "https://www.youtube.com/watch?v=n4GNdIqOYFc"
      },
      {
        name: "ANIMA",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Diseño de Figma a código vivo",
        desc: "Conecta tus lienzos de diseño de Figma directamente con tu entorno de desarrollo, exportando componentes modulares.",
        tutorial: "https://www.youtube.com/watch?v=LDfY9qH1g9c"
      },
      {
        name: "GALILEO AI",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Crea interfaces completas",
        desc: "Genera diseños UI de alta fidelidad para aplicaciones móviles y web a partir de un simple prompt de texto en segundos.",
        tutorial: "https://www.youtube.com/watch?v=jjSaUeqJi4s"
      }
    ]
  },
  {
    id: 17,
    type: "tools",
    category: "ASISTENTES",
    title: "ASISTENTES",
    subtitle: "Para el día a día, redacción, análisis y estrategia",
    slideNum: "09",
    tools: [
      {
        name: "CHAT GPT PLUS",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Uso general · #1 global",
        desc: "Incluido en SEO Conjuntas. Excelente para redacción, traducción, lluvias de ideas y resúmenes. Puerta de entrada del equipo.",
        tutorial: "https://www.youtube.com/watch?v=K5EkttOpr3s"
      },
      {
        name: "CLAUDE",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Análisis profundo · Textos largos",
        desc: "El mejor para redactar con precisión contextual, analizar documentos técnicos extensos y estrategia de marca. Plan gratis generoso.",
        tutorial: "https://www.youtube.com/watch?v=qth5wFHKDV8"
      },
      {
        name: "GEMINI",
        type: "independent",
        label: "★  INDEPENDIENTE",
        subtitle: "Integración con Google Workspace",
        desc: "Si el equipo usa Gmail, Drive o Docs. Analiza correos, resume archivos en la nube y asiste directamente en tu espacio Google.",
        tutorial: "https://www.youtube.com/watch?v=D2b-b-gQyzg"
      },
      {
        name: "PERPLEXITY AI",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Investigación con fuentes reales",
        desc: "Para research de mercado, auditorías de competidores y datos actualizados con citas verificables directas de la web.",
        tutorial: "https://www.youtube.com/watch?v=liiMB8iISJQ"
      },
      {
        name: "NOTEBOOKLM",
        type: "included",
        label: "✓  YA LO TIENES",
        subtitle: "Análisis de documentos locales",
        desc: "Sube briefings, PDFs o informes de clientes. Genera resúmenes estructurados, responde dudas y crea Audio Overviews en inglés.",
        tutorial: "https://www.youtube.com/watch?v=g9fwgx54dEo"
      }
    ]
  },
  {
    id: 18,
    type: "giants",
    title: "Los Nuevos Gigantes de la IA",
    subtitle: "Orange LATAM · Vanguardia Tecnológica",
    slideNum: "05",
    giants: [
      {
        name: "Qwen (Alibaba)",
        tagline: "Líder de Código Abierto",
        desc: "Destacada por su procesamiento multilingüe avanzado y rendimiento sobresaliente en generación de código y automatización lógica."
      },
      {
        name: "DeepSeek",
        tagline: "Eficiencia Disruptiva",
        desc: "Arquitecturas de razonamiento lógico y matemático profundo, con desempeño similar a los líderes occidentales a un costo mucho menor."
      },
      {
        name: "MiniMax",
        tagline: "Poder Multimodal",
        desc: "Enfocada en assets generativos comerciales, con síntesis de voz fotorrealista y video cinematográfico hiperrealista (Hailuo)."
      }
    ]
  },

];

// Export formatting for browser environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { slidesData };
}
