import type { Question } from "../../types";

export const BLOCK_A_QUESTIONS: Question[] = [
  {
    "id": 1,
    "block": "A",
    "title": "UNIVERSIDAD PRIVADA EN LIMA (LA CALIDAD ES DE UNO SOLO)",
    "situation": "La rectoría repite que 'la calidad es tarea del área de Calidad'. Docentes y administrativos solo reciben instrucciones y nadie les pide ideas para mejorar los procesos.",
    "question": "¿Qué principio de la gestión de la calidad se está descuidando?",
    "answer": "El compromiso de las personas. Personas competentes, empoderadas y comprometidas en todos los niveles son esenciales para generar valor.",
    "simple": "Es un equipo de fútbol donde solo juega el arquero y los demás miran desde la tribuna.",
    "reference": "ISO 9001 cap. 0.2 | ISO 9000:2015 principio 2.3.3.",
    "options": [
      {
        "id": "p-procesos",
        "tag": "Principio",
        "label": "Enfoque a procesos"
      },
      {
        "id": "p-mejora",
        "tag": "Principio",
        "label": "Mejora"
      },
      {
        "id": "p-relaciones",
        "tag": "Principio",
        "label": "Gestión de las relaciones"
      },
      {
        "id": "p-compromiso",
        "tag": "Principio",
        "label": "Compromiso de las personas"
      }
    ],
    "correctOptionId": "p-compromiso"
  },
  {
    "id": 2,
    "block": "A",
    "title": "PLANTA DE LÁCTEOS EN AREQUIPA (DECIDIR A OJO)",
    "situation": "El gerente decide ampliar la línea de yogurt 'por intuición'. No revisó los datos de reclamos, de rechazo en línea ni de rotación de inventario de los últimos doce meses.",
    "question": "¿Qué principio de la gestión de la calidad se incumple?",
    "answer": "La toma de decisiones basada en la evidencia: las decisiones deben apoyarse en el análisis y la evaluación de datos e información.",
    "simple": "Es manejar de noche sin encender las luces porque 'conozco el camino'.",
    "reference": "ISO 9001 cap. 0.2 y 9.1.3 | ISO 9000:2015 principio 2.3.6.",
    "options": [
      {
        "id": "p-relaciones",
        "tag": "Principio",
        "label": "Gestión de las relaciones"
      },
      {
        "id": "p-liderazgo",
        "tag": "Principio",
        "label": "Liderazgo"
      },
      {
        "id": "p-evidencia",
        "tag": "Principio",
        "label": "Toma de decisiones basada en la evidencia"
      },
      {
        "id": "p-procesos",
        "tag": "Principio",
        "label": "Enfoque a procesos"
      }
    ],
    "correctOptionId": "p-evidencia"
  },
  {
    "id": 3,
    "block": "A",
    "title": "EMBOTELLADORA EN ATE (PROVEEDOR POR PRECIO)",
    "situation": "Cada mes la empresa cambia de proveedor de tapas por el que cobra menos. La dureza de las tapas varía tanto que la línea se detiene y sube el rechazo al sellar.",
    "question": "¿Qué principio ayuda a corregir esta práctica?",
    "answer": "La gestión de las relaciones: gestionar la relación con los proveedores y otras partes interesadas pertinentes para lograr el éxito sostenido.",
    "simple": "Es cambiar de mecánico cada semana y esperar que el carro ande cada vez mejor.",
    "reference": "ISO 9001 cap. 0.2 y 8.4 | ISO 9000:2015 principio 2.3.7.",
    "options": [
      {
        "id": "p-mejora",
        "tag": "Principio",
        "label": "Mejora"
      },
      {
        "id": "p-relaciones",
        "tag": "Principio",
        "label": "Gestión de las relaciones"
      },
      {
        "id": "p-cliente",
        "tag": "Principio",
        "label": "Enfoque al cliente"
      },
      {
        "id": "p-compromiso",
        "tag": "Principio",
        "label": "Compromiso de las personas"
      }
    ],
    "correctOptionId": "p-relaciones"
  },
  {
    "id": 4,
    "block": "A",
    "title": "TALLER DE CONFECCIONES EN GAMARRA (CICLO A MEDIAS)",
    "situation": "El taller define objetivos y procedimientos, y los aplica con disciplina. Pero nunca compara resultados con lo planificado ni corrige las desviaciones. El defecto sigue igual hace un año.",
    "question": "¿Qué etapas del ciclo PHVA no se están ejecutando?",
    "answer": "Verificar (seguimiento y medición de resultados) y Actuar (tomar acciones para mejorar el desempeño). Solo se hizo Planificar y Hacer.",
    "simple": "Es hacer dieta y ejercicio, pero no subirse nunca a la balanza.",
    "reference": "ISO 9001 cap. 0.3.2 (PHVA), cap. 9 y cap. 10.",
    "options": [
      {
        "id": "phva-ph",
        "tag": "0.3.2",
        "label": "Planificar y Hacer"
      },
      {
        "id": "phva-va",
        "tag": "0.3.2",
        "label": "Verificar y Actuar"
      },
      {
        "id": "phva-h",
        "tag": "0.3.2",
        "label": "Solo Hacer"
      },
      {
        "id": "phva-phv",
        "tag": "0.3.2",
        "label": "Planificar, Hacer y Verificar"
      }
    ],
    "correctOptionId": "phva-va"
  },
  {
    "id": 5,
    "block": "A",
    "title": "PANADERÍA INDUSTRIAL EN CALLAO (SIN ACCIÓN PREVENTIVA)",
    "situation": "El jefe de calidad afirma: 'Como la ISO 9001:2015 ya no tiene acción preventiva, nosotros dejamos de prevenir'. Eliminó el análisis de lo que podría fallar.",
    "question": "¿Qué concepto de la norma corrige esta interpretación?",
    "answer": "El pensamiento basado en riesgos: la prevención se integra en la planificación (6.1) y no desaparece. La acción preventiva ya no se exige como apartado separado, pero el concepto sigue presente.",
    "simple": "Es quitar el botón 'prevenir' y pensar que el incendio ya no puede ocurrir.",
    "reference": "ISO 9001 cap. 0.3.3, 6.1 y Anexo A.4.",
    "options": [
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "a1",
        "tag": "A.1",
        "label": "Terminología nueva"
      },
      {
        "id": "riesgo",
        "tag": "0.3.3",
        "label": "Pensamiento basado en riesgos"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "riesgo"
  },
  {
    "id": 6,
    "block": "A",
    "title": "EMPRESA CERTIFICADA DESDE 2008 EN TRUJILLO (RESABIOS DE LA VERSIÓN ANTIGUA)",
    "situation": "Tras migrar a la versión 2015, la empresa mantiene un 'representante de la dirección' y un manual de calidad porque cree que la norma los sigue exigiendo.",
    "question": "¿Qué aclaración de la versión 2015 aplica a este caso?",
    "answer": "Que la versión 2015 ya no exige un representante único ni un manual de la calidad. Sí exige asignar responsabilidades y autoridades (5.3) y decidir la información documentada necesaria.",
    "simple": "Es seguir pagando el teléfono fijo porque 'antes lo pedían' y ahora nadie lo usa.",
    "reference": "Anexo A.1 (Tabla A.1) | 5.3 | 7.5.1.",
    "options": [
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "a1",
        "tag": "A.1",
        "label": "Sin representante de la dirección ni manual obligatorio"
      },
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      }
    ],
    "correctOptionId": "a1"
  },
  {
    "id": 7,
    "block": "A",
    "title": "CADENA DE HOTELES EN CUSCO (TEMPORADA ALTA)",
    "situation": "En julio y agosto llegan turistas internacionales y se contrata personal eventual. El análisis del contexto solo menciona 'competencia hotelera' y no incluye la estacionalidad, los paros ni la rotación.",
    "question": "¿Qué requisito de la cláusula 4 se incumple?",
    "answer": "Falta determinar las cuestiones externas e internas pertinentes que afectan el propósito y la capacidad de lograr los resultados previstos del SGC.",
    "simple": "Es planear un viaje mirando solo el destino y olvidando el clima y el estado del carro.",
    "reference": "Cláusula 4.1 (Conocimiento de la organización y de su contexto) y Anexo A.3.",
    "options": [
      {
        "id": "4.4",
        "tag": "4.4",
        "label": "SGC y sus procesos"
      },
      {
        "id": "4.2",
        "tag": "4.2",
        "label": "Partes interesadas pertinentes"
      },
      {
        "id": "4.1",
        "tag": "4.1",
        "label": "Conocimiento de la organización y su contexto"
      },
      {
        "id": "4.3",
        "tag": "4.3",
        "label": "Alcance del SGC"
      }
    ],
    "correctOptionId": "4.1"
  },
  {
    "id": 8,
    "block": "A",
    "title": "CLÍNICA PRIVADA EN SAN ISIDRO (QUIÉN MÁS IMPORTA)",
    "situation": "La clínica lista a pacientes y accionistas como partes interesadas, pero omite a las aseguradoras, a la autoridad sanitaria y a las empresas de tercerización de limpieza. Nadie revisa la lista.",
    "question": "¿Qué debe hacer la organización con las partes interesadas?",
    "answer": "Determinar las partes interesadas pertinentes al SGC y sus requisitos pertinentes, y realizar el seguimiento y la revisión de esa información.",
    "simple": "Es hacer una fiesta e invitar solo a los amigos que no se quejan.",
    "reference": "Cláusula 4.2 (Comprensión de las necesidades y expectativas de las partes interesadas).",
    "options": [
      {
        "id": "4.1",
        "tag": "4.1",
        "label": "Conocimiento de la organización y su contexto"
      },
      {
        "id": "4.2",
        "tag": "4.2",
        "label": "Partes interesadas pertinentes"
      },
      {
        "id": "4.3",
        "tag": "4.3",
        "label": "Alcance del SGC"
      },
      {
        "id": "4.4",
        "tag": "4.4",
        "label": "SGC y sus procesos"
      }
    ],
    "correctOptionId": "4.2"
  },
  {
    "id": 9,
    "block": "A",
    "title": "LABORATORIO DE ENSAYOS EN LA MOLINA (EXCLUSIÓN INDEBIDA)",
    "situation": "El laboratorio declara 'no aplica 8.3 Diseño y desarrollo', pero cada año desarrolla métodos de ensayo nuevos para sus clientes. Lo omitió para 'ahorrar documentos'.",
    "question": "¿Qué requisito regula que 8.3 se declare no aplicable?",
    "answer": "El alcance del SGC (4.3). Solo se declara no aplicable un requisito si no afecta la conformidad de productos y servicios ni la satisfacción del cliente, y debe justificarse en el alcance.",
    "simple": "Es decir 'yo no manejo' porque no quiero sacar el brevete, pero igual manejar a diario.",
    "reference": "Cláusula 4.3 (Alcance del SGC) y Anexo A.5.",
    "options": [
      {
        "id": "4.1",
        "tag": "4.1",
        "label": "Conocimiento de la organización y su contexto"
      },
      {
        "id": "4.2",
        "tag": "4.2",
        "label": "Partes interesadas pertinentes"
      },
      {
        "id": "4.3",
        "tag": "4.3",
        "label": "Alcance del SGC"
      },
      {
        "id": "4.4",
        "tag": "4.4",
        "label": "SGC y sus procesos"
      }
    ],
    "correctOptionId": "4.3"
  },
  {
    "id": 10,
    "block": "A",
    "title": "ALMACÉN LOGÍSTICO EN LURÍN (PROCESOS QUE NO SE HABLAN)",
    "situation": "Hay un mapa de procesos bonito en la pared, pero Compras, Almacén y Despacho no conocen sus entradas y salidas, no tienen indicadores y nadie es dueño de cada proceso.",
    "question": "¿Qué requisito del SGC se incumple?",
    "answer": "No determinó entradas y salidas, secuencia, criterios e indicadores, recursos ni responsables de cada proceso, ni los evalúa para mejorarlos.",
    "simple": "Es tener un mapa de la ciudad sin saber quién maneja cada ruta.",
    "reference": "Cláusula 4.4.1 (incisos a al h) y 4.4.2.",
    "options": [
      {
        "id": "4.3",
        "tag": "4.3",
        "label": "Alcance del SGC"
      },
      {
        "id": "4.4",
        "tag": "4.4",
        "label": "SGC y sus procesos"
      },
      {
        "id": "5.1.1",
        "tag": "5.1.1",
        "label": "Liderazgo y compromiso"
      },
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      }
    ],
    "correctOptionId": "4.4"
  },
  {
    "id": 11,
    "block": "A",
    "title": "PLANTA DE EMBUTIDOS EN CHICLAYO (PAPELES QUE NO SIRVEN)",
    "situation": "La empresa redactó 60 procedimientos por si acaso. Los operarios no los usan, y para el proceso de congelado crítico no hay ninguna instrucción escrita ni registro.",
    "question": "¿Qué criterio de la norma se incumple al documentar de más y de menos?",
    "answer": "Mantener la información documentada necesaria para apoyar la operación y conservar la necesaria para confiar en que se realizan según lo planificado.",
    "simple": "Es empacar la maleta con todo el ropero y olvidar el pasaporte.",
    "reference": "Cláusula 4.4.2 y 7.5.1 | Anexo A.6.",
    "options": [
      {
        "id": "4.4",
        "tag": "4.4",
        "label": "SGC y sus procesos"
      },
      {
        "id": "7.5.1",
        "tag": "7.5.1",
        "label": "Información documentada: generalidades"
      },
      {
        "id": "7.5.3",
        "tag": "7.5.3",
        "label": "Control de la información documentada"
      },
      {
        "id": "8.5.1",
        "tag": "8.5.1",
        "label": "Producción y prestación del servicio"
      }
    ],
    "correctOptionId": "7.5.1"
  },
  {
    "id": 12,
    "block": "A",
    "title": "AGROEXPORTADORA DE ESPÁRRAGOS EN ICA (CONTEXTO QUE CAMBIA)",
    "situation": "El análisis del contexto se hizo en 2021 y no se actualizó, a pesar de nuevas exigencias sanitarias de la Unión Europea y de la escasez de agua. Hoy el SGC no las considera.",
    "question": "¿Qué falta, además de identificar el contexto?",
    "answer": "Realizar el seguimiento y la revisión de la información sobre las cuestiones externas e internas de forma periódica. El contexto cambia.",
    "simple": "Es usar un mapa de hace cinco años en una ciudad donde abrieron autopistas nuevas.",
    "reference": "Cláusula 4.1 (segundo párrafo) y 9.3.2 b).",
    "options": [
      {
        "id": "4.1",
        "tag": "4.1",
        "label": "Conocimiento de la organización y su contexto"
      },
      {
        "id": "4.2",
        "tag": "4.2",
        "label": "Partes interesadas pertinentes"
      },
      {
        "id": "4.3",
        "tag": "4.3",
        "label": "Alcance del SGC"
      },
      {
        "id": "9.3",
        "tag": "9.3",
        "label": "Revisión por la dirección"
      }
    ],
    "correctOptionId": "4.1"
  },
  {
    "id": 13,
    "block": "A",
    "title": "CONSTRUCTORA EN PIURA (GERENTE QUE DELEGA TODO)",
    "situation": "El gerente general firma la política sin leerla, no asiste a la revisión del sistema y responde: 'Eso lo ve la jefa de calidad'. No asigna presupuesto para las acciones de mejora.",
    "question": "¿Qué requisitos de liderazgo incumple la alta dirección?",
    "answer": "No asume la responsabilidad de la eficacia del SGC, no asegura recursos, no integra el SGC en el negocio ni promueve la mejora ni el enfoque a procesos.",
    "simple": "Es un capitán que dice 'no me hables de icebergs, para eso tengo a un vigía'.",
    "reference": "Cláusula 5.1.1 (incisos a, c, e, i).",
    "options": [
      {
        "id": "5.1.1",
        "tag": "5.1.1",
        "label": "Liderazgo y compromiso"
      },
      {
        "id": "5.1.2",
        "tag": "5.1.2",
        "label": "Enfoque al cliente"
      },
      {
        "id": "5.2.1",
        "tag": "5.2.1",
        "label": "Política de la calidad: contenido"
      },
      {
        "id": "5.3",
        "tag": "5.3",
        "label": "Roles, responsabilidades y autoridades"
      }
    ],
    "correctOptionId": "5.1.1"
  },
  {
    "id": 14,
    "block": "A",
    "title": "EMPRESA DE ALIMENTOS EN VILLA EL SALVADOR (CLIENTE SIN VOZ)",
    "situation": "La empresa cumple la receta de siempre y entrega a tiempo, pero ignora los requisitos legales de rotulado y no analiza qué riesgos podrían afectar la satisfacción del cliente.",
    "question": "¿Qué debe asegurar la alta dirección con relación al enfoque al cliente?",
    "answer": "Que se determinen y cumplan los requisitos del cliente y los legales, que se consideren los riesgos y oportunidades, y que se mantenga el foco en aumentar la satisfacción.",
    "simple": "Es servir el plato favorito, pero sin revisar si el cliente es alérgico.",
    "reference": "Cláusula 5.1.2 (incisos a, b y c).",
    "options": [
      {
        "id": "5.1.1",
        "tag": "5.1.1",
        "label": "Liderazgo y compromiso"
      },
      {
        "id": "5.1.2",
        "tag": "5.1.2",
        "label": "Enfoque al cliente"
      },
      {
        "id": "5.2.1",
        "tag": "5.2.1",
        "label": "Política de la calidad: contenido"
      },
      {
        "id": "5.3",
        "tag": "5.3",
        "label": "Roles, responsabilidades y autoridades"
      }
    ],
    "correctOptionId": "5.1.2"
  },
  {
    "id": 15,
    "block": "A",
    "title": "CENTRO DE CONTACTO EN SURCO (POLÍTICA COPIADA)",
    "situation": "La política de la calidad fue copiada de Internet. Habla de 'ser la empresa líder mundial' y no menciona el cumplimiento de requisitos ni la mejora continua del sistema.",
    "question": "¿Qué debe contener la política de la calidad?",
    "answer": "Ser apropiada al propósito y contexto, dar marco a los objetivos, y comprometerse a cumplir los requisitos aplicables y a mejorar continuamente el SGC.",
    "simple": "Es ponerse el uniforme de otro equipo y pretender jugar con su estrategia.",
    "reference": "Cláusula 5.2.1 (incisos a al d).",
    "options": [
      {
        "id": "5.1.1",
        "tag": "5.1.1",
        "label": "Liderazgo y compromiso"
      },
      {
        "id": "5.2.1",
        "tag": "5.2.1",
        "label": "Política de la calidad: contenido"
      },
      {
        "id": "5.2.2",
        "tag": "5.2.2",
        "label": "Política de la calidad: comunicación"
      },
      {
        "id": "5.3",
        "tag": "5.3",
        "label": "Roles, responsabilidades y autoridades"
      }
    ],
    "correctOptionId": "5.2.1"
  },
  {
    "id": 16,
    "block": "A",
    "title": "FÁBRICA DE CALZADO EN TRUJILLO (POLÍTICA EN EL ARCHIVADOR)",
    "situation": "La política está enmarcada en gerencia y firmada, pero los operarios de la línea no la conocen. En la auditoría ninguno supo explicar qué significa para su trabajo.",
    "question": "¿Qué exige la norma sobre la política una vez establecida?",
    "answer": "Mantenerla como información documentada, comunicarla, entenderla y aplicarla dentro de la organización, y ponerla a disposición de las partes interesadas pertinentes.",
    "simple": "Es tener un reglamento de tránsito pegado en la pared pero nadie sabe qué significa el semáforo.",
    "reference": "Cláusula 5.2.2 y 7.3 a).",
    "options": [
      {
        "id": "5.2.1",
        "tag": "5.2.1",
        "label": "Política de la calidad: contenido"
      },
      {
        "id": "5.2.2",
        "tag": "5.2.2",
        "label": "Política de la calidad: comunicación"
      },
      {
        "id": "7.3",
        "tag": "7.3",
        "label": "Toma de conciencia"
      },
      {
        "id": "7.5.1",
        "tag": "7.5.1",
        "label": "Información documentada: generalidades"
      }
    ],
    "correctOptionId": "5.2.2"
  },
  {
    "id": 17,
    "block": "A",
    "title": "EMPRESA DE SOFTWARE EN MIRAFLORES (NADIE ES DUEÑO)",
    "situation": "Hay un organigrama, pero nadie tiene asignada la responsabilidad de informar a la alta dirección sobre el desempeño del SGC. Los reportes llegan 'cuando alguien se acuerda'.",
    "question": "¿Qué debe asegurar la alta dirección sobre los roles y responsabilidades?",
    "answer": "Asignar, comunicar y asegurar que se entienden las responsabilidades y autoridades, incluyendo informar sobre el desempeño del SGC y las oportunidades de mejora.",
    "simple": "Es una obra donde nadie sabe quién avisa al dueño cuando hay una grieta.",
    "reference": "Cláusula 5.3 (incisos a al e).",
    "options": [
      {
        "id": "5.1.1",
        "tag": "5.1.1",
        "label": "Liderazgo y compromiso"
      },
      {
        "id": "5.2.2",
        "tag": "5.2.2",
        "label": "Política de la calidad: comunicación"
      },
      {
        "id": "5.3",
        "tag": "5.3",
        "label": "Roles, responsabilidades y autoridades"
      },
      {
        "id": "7.3",
        "tag": "7.3",
        "label": "Toma de conciencia"
      }
    ],
    "correctOptionId": "5.3"
  },
  {
    "id": 18,
    "block": "A",
    "title": "INGENIO AZUCARERO EN LAMBAYEQUE (SISTEMA ROTO TRAS EL CAMBIO)",
    "situation": "Al reorganizar áreas, la gerencia suprimió el puesto que revisaba los registros de producción. El nuevo organigrama no designa a nadie que asuma esas funciones del SGC.",
    "question": "¿Qué debió asegurar la alta dirección al cambiar la estructura?",
    "answer": "Que se mantenga la integridad del SGC cuando se planifican e implementan cambios, reasignando las responsabilidades y autoridades que se afectan.",
    "simple": "Es mover una columna de la casa sin ver qué techo se apoyaba en ella.",
    "reference": "Cláusula 5.3 e) y 6.3 d).",
    "options": [
      {
        "id": "5.3",
        "tag": "5.3",
        "label": "Roles, responsabilidades y autoridades"
      },
      {
        "id": "6.3",
        "tag": "6.3",
        "label": "Planificación de cambios"
      },
      {
        "id": "4.4",
        "tag": "4.4",
        "label": "SGC y sus procesos"
      },
      {
        "id": "7.5.1",
        "tag": "7.5.1",
        "label": "Información documentada: generalidades"
      }
    ],
    "correctOptionId": "5.3"
  },
  {
    "id": 19,
    "block": "A",
    "title": "PLANTA DE CONSERVAS EN PAITA (PROVEEDOR ÚNICO DE ENVASES)",
    "situation": "El 100% de las latas lo provee una sola empresa. La planta no analizó qué pasa si el proveedor se retrasa. Hace un mes la línea estuvo parada nueve días.",
    "question": "¿Qué requisito de planificación se omitió?",
    "answer": "Determinar los riesgos y oportunidades que se deben abordar para asegurar los resultados previstos y prevenir efectos no deseados, y planificar acciones.",
    "simple": "Es tener una sola llanta de repuesto... y no tener ni gata.",
    "reference": "Cláusula 6.1.1 y 6.1.2 | Anexo A.4.",
    "options": [
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      },
      {
        "id": "6.2",
        "tag": "6.2",
        "label": "Objetivos de la calidad y su planificación"
      },
      {
        "id": "6.3",
        "tag": "6.3",
        "label": "Planificación de cambios"
      },
      {
        "id": "8.4",
        "tag": "8.4",
        "label": "Control de procesos suministrados externamente"
      }
    ],
    "correctOptionId": "6.1"
  },
  {
    "id": 20,
    "block": "A",
    "title": "CLÍNICA DENTAL EN JESÚS MARÍA (RIESGO SIN PROPORCIÓN)",
    "situation": "Para revisar el riesgo de que falte papel para recetas, la clínica usa una matriz de 30 hojas con comité semanal. En cambio, el riesgo de esterilización fallida solo tiene una línea.",
    "question": "¿Qué requisito de 6.1.2 se está aplicando de forma desproporcionada?",
    "answer": "Las acciones para abordar riesgos deben ser proporcionales al impacto potencial en la conformidad de los productos y servicios.",
    "simple": "Es poner siete candados a la despensa y dejar la puerta de calle abierta.",
    "reference": "Cláusula 6.1.2 (último párrafo).",
    "options": [
      {
        "id": "4.1",
        "tag": "4.1",
        "label": "Conocimiento de la organización y su contexto"
      },
      {
        "id": "6.1.2",
        "tag": "6.1.2",
        "label": "Proporcionalidad de las acciones frente al riesgo"
      },
      {
        "id": "6.2",
        "tag": "6.2",
        "label": "Objetivos de la calidad y su planificación"
      },
      {
        "id": "8.1",
        "tag": "8.1",
        "label": "Planificación y control operacional"
      }
    ],
    "correctOptionId": "6.1.2"
  },
  {
    "id": 21,
    "block": "A",
    "title": "EMPRESA DE TRANSPORTE EN AREQUIPA (ACCIONES SIN EVALUAR)",
    "situation": "Para reducir retrasos se compraron dos tractos nuevos. Nadie midió después si los retrasos bajaron. La gerencia asume que 'ya se resolvió'.",
    "question": "¿Qué falta en la planificación de acciones sobre riesgos?",
    "answer": "Evaluar la eficacia de esas acciones y asegurar su integración en los procesos del sistema de gestión de la calidad.",
    "simple": "Es tomar un remedio y nunca volver al médico para saber si funcionó.",
    "reference": "Cláusula 6.1.2 b) incisos 1 y 2.",
    "options": [
      {
        "id": "6.1.2",
        "tag": "6.1.2",
        "label": "Evaluar la eficacia e integrar las acciones"
      },
      {
        "id": "6.2",
        "tag": "6.2",
        "label": "Objetivos de la calidad y su planificación"
      },
      {
        "id": "6.3",
        "tag": "6.3",
        "label": "Planificación de cambios"
      },
      {
        "id": "8.1",
        "tag": "8.1",
        "label": "Planificación y control operacional"
      }
    ],
    "correctOptionId": "6.1.2"
  },
  {
    "id": 22,
    "block": "A",
    "title": "IMPRENTA INDUSTRIAL EN BREÑA (OBJETIVOS DE ADORNO)",
    "situation": "Los objetivos de calidad dicen 'mejorar la calidad' y 'ser más eficientes'. No tienen meta, plazo ni indicador. Ninguna área los usa para tomar decisiones.",
    "question": "¿Qué características deben tener los objetivos?",
    "answer": "Ser coherentes con la política, medibles, pertinentes, objeto de seguimiento, comunicarse y actualizarse, y mantenerse como información documentada.",
    "simple": "Es decir 'este año quiero estar en forma' sin fijar cuántos kilos ni cuándo.",
    "reference": "Cláusula 6.2.1 (incisos a al g).",
    "options": [
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      },
      {
        "id": "6.2.1",
        "tag": "6.2.1",
        "label": "Objetivos medibles, coherentes y con seguimiento"
      },
      {
        "id": "6.2.2",
        "tag": "6.2.2",
        "label": "Planificación para lograr los objetivos"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      }
    ],
    "correctOptionId": "6.2.1"
  },
  {
    "id": 23,
    "block": "A",
    "title": "FÁBRICA DE LADRILLOS EN CAJAMARCA (OBJETIVO SIN PLAN)",
    "situation": "El objetivo es 'reducir el desperdicio de arcilla de 8% a 5% este año'. No se definió qué se hará, con qué recursos, quién responde ni cuándo se evaluará el resultado.",
    "question": "¿Qué debe determinar la organización al planificar cómo lograrlo?",
    "answer": "Qué se va a hacer, qué recursos se requieren, quién es responsable, cuándo se finalizará y cómo se evaluarán los resultados.",
    "simple": "Es tener la meta de bajar de peso sin comprar zapatillas, ni elegir días de ejercicio.",
    "reference": "Cláusula 6.2.2 (incisos a al e).",
    "options": [
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      },
      {
        "id": "6.2.1",
        "tag": "6.2.1",
        "label": "Objetivos de la calidad y su planificación"
      },
      {
        "id": "6.2.2",
        "tag": "6.2.2",
        "label": "Qué, recursos, responsable, plazo y evaluación"
      },
      {
        "id": "6.3",
        "tag": "6.3",
        "label": "Planificación de cambios"
      }
    ],
    "correctOptionId": "6.2.2"
  },
  {
    "id": 24,
    "block": "A",
    "title": "EMPRESA DE SERVICIOS EN SURCO (MIGRACIÓN A ERP SIN PLAN)",
    "situation": "El lunes la empresa cambió su sistema de pedidos a un ERP nuevo. No se revisaron las consecuencias ni se reasignaron responsables. Durante una semana se perdieron 40 pedidos.",
    "question": "¿Qué requisito de planificación del cambio se incumplió?",
    "answer": "Los cambios al SGC deben planificarse: considerar el propósito y consecuencias, la integridad del sistema, los recursos disponibles y la reasignación de responsabilidades.",
    "simple": "Es mudarse de casa sin hacer lista de lo que se llevará ni quién cargará qué.",
    "reference": "Cláusula 6.3 (incisos a al d).",
    "options": [
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      },
      {
        "id": "6.2",
        "tag": "6.2",
        "label": "Objetivos de la calidad y su planificación"
      },
      {
        "id": "6.3",
        "tag": "6.3",
        "label": "Planificación de cambios"
      },
      {
        "id": "8.1",
        "tag": "8.1",
        "label": "Planificación y control operacional"
      }
    ],
    "correctOptionId": "6.3"
  },
  {
    "id": 25,
    "block": "A",
    "title": "STARTUP DE ENTREGAS EN LIMA (OPORTUNIDAD IGNORADA)",
    "situation": "La startup solo analiza amenazas. Ignoró el crecimiento del comercio electrónico en provincias, que permitiría abrir nuevos mercados con su misma plataforma.",
    "question": "¿Qué omite la organización al analizar solo amenazas?",
    "answer": "Determinar y abordar también las oportunidades (nuevos mercados, clientes, tecnologías) para aumentar efectos deseables y lograr la mejora.",
    "simple": "Es mirar solo si llueve y nunca si salió el sol para tender la ropa.",
    "reference": "Cláusula 6.1.1 b) y d) | 6.1.2 Nota 2 | cap. 0.3.3.",
    "options": [
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      },
      {
        "id": "8.1",
        "tag": "8.1",
        "label": "Planificación y control operacional"
      },
      {
        "id": "4.1",
        "tag": "4.1",
        "label": "Conocimiento de la organización y su contexto"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      }
    ],
    "correctOptionId": "6.1"
  },
  {
    "id": 26,
    "block": "A",
    "title": "EMPRESA DE ASCENSORES EN SAN BORJA (ALCANCE QUE NADIE ESCRIBIÓ)",
    "situation": "Todos 'saben' que el SGC cubre fabricación e instalación, pero no hay un documento con el alcance. Mantenimiento posventa quedó fuera sin justificación y el auditor lo notó.",
    "question": "¿Qué debe cumplir el alcance del SGC?",
    "answer": "Estar disponible como información documentada, indicar los tipos de productos y servicios cubiertos y justificar cualquier requisito no aplicable.",
    "simple": "Es decir 'mi terreno llega hasta aquí' sin poner ni una sola estaca.",
    "reference": "Cláusula 4.3 (párrafos finales).",
    "options": [
      {
        "id": "4.1",
        "tag": "4.1",
        "label": "Conocimiento de la organización y su contexto"
      },
      {
        "id": "4.2",
        "tag": "4.2",
        "label": "Partes interesadas pertinentes"
      },
      {
        "id": "4.3",
        "tag": "4.3",
        "label": "Alcance del SGC"
      },
      {
        "id": "4.4",
        "tag": "4.4",
        "label": "SGC y sus procesos"
      }
    ],
    "correctOptionId": "4.3"
  }
];
