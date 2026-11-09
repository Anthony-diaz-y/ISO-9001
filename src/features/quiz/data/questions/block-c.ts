import type { Question } from "../../types";

export const BLOCK_C_QUESTIONS: Question[] = [
  {
    "id": 53,
    "block": "C",
    "title": "PANADERÍA INDUSTRIAL EN SAN JUAN DE LURIGANCHO (HORNO A LA INTUICIÓN)",
    "situation": "No hay instrucciones de trabajo, ni temperaturas y tiempos definidos. Cada panadero hornea 'como siempre'. Algunos lotes salen crudos, otros quemados, y no existen registros.",
    "question": "¿Qué requisito de condiciones controladas falta?",
    "answer": "Información documentada que defina características y resultados, recursos de medición, seguimiento en etapas apropiadas, personas competentes y actividades de liberación y entrega.",
    "simple": "Es hornear una torta sin receta, sin termómetro y sin reloj.",
    "reference": "Cláusula 8.5.1 (incisos a al h).",
    "options": [
      {
        "id": "7.5.1",
        "tag": "7.5.1",
        "label": "Información documentada: generalidades"
      },
      {
        "id": "8.5.1",
        "tag": "8.5.1",
        "label": "Producción y prestación del servicio"
      },
      {
        "id": "8.5.2",
        "tag": "8.5.2",
        "label": "Identificación y trazabilidad"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      }
    ],
    "correctOptionId": "8.5.1"
  },
  {
    "id": 54,
    "block": "C",
    "title": "CLÍNICA EN SURCO (AUTOCLAVE QUE NO SE PUEDE REVISAR)",
    "situation": "La esterilización de instrumentos no puede comprobarse con inspección posterior: no se ve la esterilidad. La clínica solo registra que la autoclave estuvo encendida.",
    "question": "¿Qué requiere la norma para este tipo de proceso?",
    "answer": "La validación y revalidación periódica de la capacidad del proceso para lograr los resultados planificados, cuando las salidas no pueden verificarse posteriormente.",
    "simple": "Es confiar en una caja sellada sin haber probado nunca que el cierre funciona.",
    "reference": "Cláusula 8.5.1 f) (procesos especiales).",
    "options": [
      {
        "id": "8.5.1f",
        "tag": "8.5.1 f)",
        "label": "Validación de procesos especiales"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.6",
        "tag": "8.6",
        "label": "Liberación de productos y servicios"
      },
      {
        "id": "7.5.3",
        "tag": "7.5.3",
        "label": "Control de la información documentada"
      }
    ],
    "correctOptionId": "8.5.1f"
  },
  {
    "id": 55,
    "block": "C",
    "title": "PROCESADORA DE LÁCTEOS EN CAJAMARCA (¿QUÉ LOTES SALIERON?)",
    "situation": "Se detectó un lote de leche en polvo con contaminación. La empresa no logra saber a qué clientes llegaron los lotes producidos con esa materia prima porque no se identifican los lotes.",
    "question": "¿Qué cláusula se incumple?",
    "answer": "8.5.2 Identificación y trazabilidad: identificar las salidas y su estado, y controlar la identificación única cuando la trazabilidad es un requisito, conservando la información.",
    "simple": "Es no saber a qué casas se entregaron las cajas de un lote defectuoso.",
    "reference": "Cláusula 8.5.2.",
    "options": [
      {
        "id": "8.5.2",
        "tag": "8.5.2",
        "label": "Identificación y trazabilidad"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.5.5",
        "tag": "8.5.5",
        "label": "Actividades posteriores a la entrega"
      },
      {
        "id": "8.7",
        "tag": "8.7",
        "label": "Salidas no conformes"
      }
    ],
    "correctOptionId": "8.5.2"
  },
  {
    "id": 56,
    "block": "C",
    "title": "TALLER DE MATRICERÍA EN CALLAO (MOLDE DEL CLIENTE DAÑADO)",
    "situation": "Un cliente entregó un molde para producir piezas. El molde se oxidó en un almacén abierto y nadie avisó. Descubrieron el daño al fabricar el lote.",
    "question": "¿Qué debía hacer la organización con la propiedad del cliente?",
    "answer": "Cuidarla mientras esté bajo su control, identificarla, verificarla, protegerla y, si se daña o pierde, informar al cliente y conservar la información documentada.",
    "simple": "Es prestarte el carro de un amigo y devolverlo rayado sin avisarle.",
    "reference": "Cláusula 8.5.3.",
    "options": [
      {
        "id": "8.5.2",
        "tag": "8.5.2",
        "label": "Identificación y trazabilidad"
      },
      {
        "id": "8.5.3",
        "tag": "8.5.3",
        "label": "Propiedad del cliente"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.7",
        "tag": "8.7",
        "label": "Salidas no conformes"
      }
    ],
    "correctOptionId": "8.5.3"
  },
  {
    "id": 57,
    "block": "C",
    "title": "FRIGORÍFICO EN LURÍN (CADENA DE FRÍO ROTA)",
    "situation": "Los pallets de pescado congelado esperan 40 minutos en el andén antes de cargarse al camión. La temperatura del producto sube y el cliente rechaza el lote.",
    "question": "¿Qué requisito de preservación falla?",
    "answer": "Preservar las salidas durante la producción y la prestación del servicio: manipulación, almacenamiento, embalaje, transporte y protección para asegurar la conformidad.",
    "simple": "Es sacar el helado del congelador y dejarlo en la mesa mientras buscas el auto.",
    "reference": "Cláusula 8.5.4 y su Nota.",
    "options": [
      {
        "id": "8.5.1",
        "tag": "8.5.1",
        "label": "Producción y prestación del servicio"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.5.5",
        "tag": "8.5.5",
        "label": "Actividades posteriores a la entrega"
      },
      {
        "id": "8.6",
        "tag": "8.6",
        "label": "Liberación de productos y servicios"
      }
    ],
    "correctOptionId": "8.5.4"
  },
  {
    "id": 58,
    "block": "C",
    "title": "FABRICANTE DE BOMBAS EN AREQUIPA (VENDER Y DESAPARECER)",
    "situation": "La empresa vende bombas con garantía de un año, pero no tiene un servicio técnico definido ni capta la retroalimentación de averías. Los clientes se quejan de que 'nadie contesta'.",
    "question": "¿Qué exige la norma sobre las actividades posteriores a la entrega?",
    "answer": "Cumplir los requisitos posteriores a la entrega considerando requisitos legales, consecuencias no deseadas, vida útil prevista, requisitos y retroalimentación del cliente.",
    "simple": "Es vender el paraguas y negarse a ayudar cuando se rompe con el primer viento.",
    "reference": "Cláusula 8.5.5 (incisos a al e).",
    "options": [
      {
        "id": "8.5.3",
        "tag": "8.5.3",
        "label": "Propiedad del cliente"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.5.5",
        "tag": "8.5.5",
        "label": "Actividades posteriores a la entrega"
      },
      {
        "id": "8.5.6",
        "tag": "8.5.6",
        "label": "Control de cambios en la producción"
      }
    ],
    "correctOptionId": "8.5.5"
  },
  {
    "id": 59,
    "block": "C",
    "title": "PLANTA DE PRODUCTOS LÁCTEOS EN LIMA (CAMBIO DE EMPAQUE SIN PERMISO)",
    "situation": "Producción cambió el material del empaque de yogurt para ahorrar costos. No se revisaron las consecuencias ni quedó registro de quién autorizó. Aumentaron las devoluciones por fugas.",
    "question": "¿Qué se debía hacer con un cambio en la producción?",
    "answer": "Revisar y controlar los cambios en la producción o prestación del servicio y conservar información sobre los resultados de la revisión, quién autorizó y las acciones.",
    "simple": "Es cambiarle el motor a un auto sin avisarle al dueño.",
    "reference": "Cláusula 8.5.6.",
    "options": [
      {
        "id": "8.5.3",
        "tag": "8.5.3",
        "label": "Propiedad del cliente"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.5.6",
        "tag": "8.5.6",
        "label": "Control de cambios en la producción"
      },
      {
        "id": "8.6",
        "tag": "8.6",
        "label": "Liberación de productos y servicios"
      }
    ],
    "correctOptionId": "8.5.6"
  },
  {
    "id": 60,
    "block": "C",
    "title": "EMPRESA DE ASCENSORES EN SAN BORJA (LIBERACIÓN BAJO PRESIÓN)",
    "situation": "Para cumplir la fecha pactada, el jefe de despacho liberó un lote antes de completar la inspección final. Nadie con autoridad autorizó la excepción ni se informó al cliente.",
    "question": "¿Cuándo se puede liberar un producto sin completar las disposiciones planificadas?",
    "answer": "Solo si lo aprueba una autoridad pertinente y, cuando aplique, el cliente. De lo contrario, no se libera hasta completar satisfactoriamente lo planificado.",
    "simple": "Es entregar el examen sin haberlo corregido porque el alumno tiene apuro.",
    "reference": "Cláusula 8.6 (segundo párrafo).",
    "options": [
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.6",
        "tag": "8.6",
        "label": "Liberación de productos y servicios"
      },
      {
        "id": "8.7",
        "tag": "8.7",
        "label": "Salidas no conformes"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "8.6"
  },
  {
    "id": 61,
    "block": "C",
    "title": "LABORATORIO DE ALIMENTOS EN LA MOLINA (LIBERACIÓN SIN HUELLA)",
    "situation": "Los lotes se liberan, pero no queda evidencia de las pruebas de aceptación ni de quién los autorizó. Ante un reclamo no se puede demostrar que cumplían los criterios.",
    "question": "¿Qué información documentada exige la liberación?",
    "answer": "Evidencia de la conformidad con los criterios de aceptación y trazabilidad a las personas que autorizan la liberación.",
    "simple": "Es firmar cheques sin guardar copia ni la firma de quien los aprobó.",
    "reference": "Cláusula 8.6 (incisos a y b).",
    "options": [
      {
        "id": "8.5.6",
        "tag": "8.5.6",
        "label": "Control de cambios en la producción"
      },
      {
        "id": "8.6ab",
        "tag": "8.6 a) y b)",
        "label": "Evidencia de conformidad y trazabilidad de la liberación"
      },
      {
        "id": "8.7",
        "tag": "8.7",
        "label": "Salidas no conformes"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "8.6ab"
  },
  {
    "id": 62,
    "block": "C",
    "title": "CONFECCIONES EN GAMARRA (FALDAS CON FALLA AL ALMACÉN BUENO)",
    "situation": "Se detectaron 200 faldas con costura defectuosa. Se guardaron en el mismo estante que las buenas, sin etiqueta. Una parte fue despachada a un cliente por error.",
    "question": "¿Qué se incumple con las salidas no conformes?",
    "answer": "Identificar y controlar las salidas no conformes para prevenir su uso o entrega no intencionada, y tomar acciones según su naturaleza y efecto.",
    "simple": "Es mezclar las manzanas podridas con las buenas en la misma caja.",
    "reference": "Cláusula 8.7.1 (primer párrafo).",
    "options": [
      {
        "id": "8.5.2",
        "tag": "8.5.2",
        "label": "Identificación y trazabilidad"
      },
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.7.1",
        "tag": "8.7.1",
        "label": "Identificar y controlar salidas no conformes"
      },
      {
        "id": "8.6",
        "tag": "8.6",
        "label": "Liberación de productos y servicios"
      }
    ],
    "correctOptionId": "8.7.1"
  },
  {
    "id": 63,
    "block": "C",
    "title": "FÁBRICA DE ENVASES EN HUACHIPA (CÓMO TRATAR LO NO CONFORME)",
    "situation": "Para un lote con rebabas, el jefe de planta dice que solo hay dos opciones: reprocesar o desechar. Nunca consideran informar al cliente ni pedir una concesión formal.",
    "question": "¿De qué maneras puede tratarse una salida no conforme?",
    "answer": "Corrección; separación, contención, devolución o suspensión; información al cliente; y autorización para aceptarla bajo concesión. Tras corregir, se verifica la conformidad.",
    "simple": "Es creer que ante un error solo existe 'arreglar' o 'botar', sin hablar con el afectado.",
    "reference": "Cláusula 8.7.1 (incisos a al d).",
    "options": [
      {
        "id": "8.5.5",
        "tag": "8.5.5",
        "label": "Actividades posteriores a la entrega"
      },
      {
        "id": "8.6",
        "tag": "8.6",
        "label": "Liberación de productos y servicios"
      },
      {
        "id": "8.7.1a",
        "tag": "8.7.1 a) al d)",
        "label": "Formas de tratar una salida no conforme"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "8.7.1a"
  },
  {
    "id": 64,
    "block": "C",
    "title": "AGROINDUSTRIA EN VIRÚ (CONCESIÓN VERBAL)",
    "situation": "Un cliente aceptó por teléfono un lote con calibre ligeramente menor. Nadie lo registró. Meses después, el cliente reclama el pago y dice que nunca lo autorizó.",
    "question": "¿Qué debió conservarse según 8.7.2?",
    "answer": "Información documentada que describa la no conformidad, las acciones tomadas, las concesiones obtenidas y la autoridad que decide la acción.",
    "simple": "Es prestar plata de palabra: cuando hay problema, nadie recuerda lo mismo.",
    "reference": "Cláusula 8.7.2 (incisos a al d).",
    "options": [
      {
        "id": "7.5.3",
        "tag": "7.5.3",
        "label": "Control de la información documentada"
      },
      {
        "id": "8.6",
        "tag": "8.6",
        "label": "Liberación de productos y servicios"
      },
      {
        "id": "8.7.2",
        "tag": "8.7.2",
        "label": "Información documentada de NC y concesiones"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "8.7.2"
  },
  {
    "id": 65,
    "block": "C",
    "title": "EMPRESA DE SERVICIOS EN LIMA (MEDIR MUCHO, USAR POCO)",
    "situation": "La empresa recopila 40 indicadores en hojas de cálculo, pero nadie decide cuándo se analizan ni qué decisiones tomar. Los reportes se archivan sin que cambie nada.",
    "question": "¿Qué debe determinar la organización según 9.1.1?",
    "answer": "Qué necesita seguimiento y medición, los métodos para resultados válidos, cuándo medir y cuándo analizar y evaluar los resultados, y evaluar el desempeño y eficacia del SGC.",
    "simple": "Es pesarse todos los días y nunca ajustar la dieta.",
    "reference": "Cláusula 9.1.1 (incisos a al d).",
    "options": [
      {
        "id": "9.1.1",
        "tag": "9.1.1",
        "label": "Seguimiento, medición, análisis y evaluación"
      },
      {
        "id": "9.1.2",
        "tag": "9.1.2",
        "label": "Satisfacción del cliente"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "9.2",
        "tag": "9.2",
        "label": "Auditoría interna"
      }
    ],
    "correctOptionId": "9.1.1"
  },
  {
    "id": 66,
    "block": "C",
    "title": "RESTAURANTE EN MIRAFLORES (SOLO CUENTA QUEJAS)",
    "situation": "El restaurante mide la satisfacción solo contando las quejas formales. No conoce la percepción de los clientes que no se quejan pero no regresan.",
    "question": "¿Qué exige la norma sobre satisfacción del cliente?",
    "answer": "Realizar el seguimiento de las percepciones del cliente sobre el grado de cumplimiento de sus necesidades y expectativas, y determinar los métodos para obtener y revisar esa información.",
    "simple": "Es pensar que todo va bien porque nadie se queja, aunque la mitad no vuelve.",
    "reference": "Cláusula 9.1.2 y su Nota.",
    "options": [
      {
        "id": "9.1.1",
        "tag": "9.1.1",
        "label": "Seguimiento, medición, análisis y evaluación"
      },
      {
        "id": "9.1.2",
        "tag": "9.1.2",
        "label": "Satisfacción del cliente"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "9.3",
        "tag": "9.3",
        "label": "Revisión por la dirección"
      }
    ],
    "correctOptionId": "9.1.2"
  },
  {
    "id": 67,
    "block": "C",
    "title": "EMPRESA DE ALIMENTOS EN CALLAO (DATOS SIN CONCLUSIONES)",
    "situation": "La empresa recopila resultados de inspección, quejas y entregas de proveedores, pero no los analiza en conjunto. No sabe si las acciones sobre riesgos funcionaron ni qué proveedores rinden peor.",
    "question": "¿Para qué debe usarse el análisis de datos?",
    "answer": "Evaluar conformidad, satisfacción, desempeño y eficacia del SGC, planificación, eficacia de acciones sobre riesgos, desempeño de proveedores y necesidades de mejora.",
    "simple": "Es tener todos los ingredientes sobre la mesa y no cocinar nunca nada.",
    "reference": "Cláusula 9.1.3 (incisos a al g).",
    "options": [
      {
        "id": "9.1.1",
        "tag": "9.1.1",
        "label": "Seguimiento, medición, análisis y evaluación"
      },
      {
        "id": "9.1.2",
        "tag": "9.1.2",
        "label": "Satisfacción del cliente"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "9.1.3"
  },
  {
    "id": 68,
    "block": "C",
    "title": "EMPRESA DE TRANSPORTE EN AREQUIPA (AUDITOR QUE SE AUDITA)",
    "situation": "El jefe de operaciones audita su propio proceso de despacho porque 'es el que mejor lo conoce'. El informe resulta sin hallazgos. Un cliente luego encuentra fallas graves.",
    "question": "¿Qué principio de 9.2 se viola?",
    "answer": "La objetividad e imparcialidad: los auditores deben seleccionarse para asegurar el proceso de auditoría; nadie debe auditar su propio trabajo.",
    "simple": "Es corregir tu propio examen y ponerte 20.",
    "reference": "Cláusula 9.2.2 c) | ISO 19011 (principios de auditoría).",
    "options": [
      {
        "id": "9.2.1",
        "tag": "9.2.1",
        "label": "Programa de auditoría"
      },
      {
        "id": "9.2.2a",
        "tag": "9.2.2 a)",
        "label": "Importancia de los procesos"
      },
      {
        "id": "9.2.2c",
        "tag": "9.2.2 c)",
        "label": "Objetividad e imparcialidad del auditor"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "9.2.2c"
  },
  {
    "id": 69,
    "block": "C",
    "title": "FÁBRICA DE ELECTRODOMÉSTICOS EN LIMA (AUDITORÍA POR CUMPLIR)",
    "situation": "El programa de auditoría interna audita cada proceso una vez al año por igual. No prioriza procesos críticos ni considera cambios recientes ni resultados de auditorías previas con muchos hallazgos.",
    "question": "¿Qué debe considerar el programa de auditoría?",
    "answer": "La importancia de los procesos, los cambios que afectan a la organización y los resultados de auditorías previas; además de frecuencia, métodos, responsabilidades e informes.",
    "simple": "Es revisar cada cuarto de la casa por igual, aunque la cocina esté con una fuga de gas.",
    "reference": "Cláusula 9.2.2 a) y 9.2.1.",
    "options": [
      {
        "id": "9.2.1",
        "tag": "9.2.1",
        "label": "Programa de auditoría"
      },
      {
        "id": "9.2.2c",
        "tag": "9.2.2 c)",
        "label": "Objetividad e imparcialidad"
      },
      {
        "id": "9.3",
        "tag": "9.3",
        "label": "Revisión por la dirección"
      },
      {
        "id": "10.3",
        "tag": "10.3",
        "label": "Mejora continua"
      }
    ],
    "correctOptionId": "9.2.1"
  },
  {
    "id": 70,
    "block": "C",
    "title": "EMPRESA DE SERVICIOS EN SAN ISIDRO (REVISIÓN SIN DATOS)",
    "situation": "La revisión por la dirección dura 15 minutos al año. La gerencia solo pregunta 'todo bien' y firma el acta. No se presentan resultados de auditorías, de satisfacción ni de objetivos.",
    "question": "¿Qué entradas deben considerarse en la revisión por la dirección?",
    "answer": "Estado de acciones previas, cambios en el contexto, desempeño del SGC (satisfacción, objetivos, procesos, NC, auditorías, proveedores), recursos, riesgos y oportunidades de mejora.",
    "simple": "Es ir al doctor y decir 'estoy bien' sin mostrar ningún análisis.",
    "reference": "Cláusula 9.3.2 (incisos a al f).",
    "options": [
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "9.2",
        "tag": "9.2",
        "label": "Auditoría interna"
      },
      {
        "id": "9.3.2",
        "tag": "9.3.2",
        "label": "Entradas de la revisión por la dirección"
      },
      {
        "id": "10.1",
        "tag": "10.1",
        "label": "Mejora: generalidades"
      }
    ],
    "correctOptionId": "9.3.2"
  },
  {
    "id": 71,
    "block": "C",
    "title": "FÁBRICA DE LADRILLOS EN ICA (REUNIÓN SIN DECISIONES)",
    "situation": "En la revisión se presentaron los resultados, pero no se tomó ninguna decisión sobre mejoras, cambios al sistema ni recursos. El acta solo dice 'se tomó nota'.",
    "question": "¿Qué deben incluir las salidas de la revisión por la dirección?",
    "answer": "Decisiones y acciones sobre oportunidades de mejora, necesidad de cambios en el SGC y necesidades de recursos, y conservar la información como evidencia.",
    "simple": "Es una reunión de condominio donde todos hablan y nadie vota nada.",
    "reference": "Cláusula 9.3.3 (incisos a al c).",
    "options": [
      {
        "id": "9.3.3",
        "tag": "9.3.3",
        "label": "Salidas de la revisión por la dirección"
      },
      {
        "id": "9.1.2",
        "tag": "9.1.2",
        "label": "Satisfacción del cliente"
      },
      {
        "id": "10.1",
        "tag": "10.1",
        "label": "Mejora: generalidades"
      },
      {
        "id": "10.2",
        "tag": "10.2",
        "label": "No conformidad y acción correctiva"
      }
    ],
    "correctOptionId": "9.3.3"
  },
  {
    "id": 72,
    "block": "C",
    "title": "PLANTA DE CONSERVAS EN CHIMBOTE (SOLO APAGAR INCENDIOS)",
    "situation": "La empresa solo reacciona ante quejas y errores. Nunca analiza oportunidades de mejorar ni las necesidades futuras de sus clientes. Su competidor lanzó un envase más práctico.",
    "question": "¿Qué debe incluir la mejora de productos, servicios y del SGC?",
    "answer": "Mejorar productos y servicios para cumplir requisitos y considerar necesidades futuras, corregir y prevenir efectos no deseados, y mejorar el desempeño y la eficacia del SGC.",
    "simple": "Es arreglar siempre el techo con goteras, pero nunca pensar en ampliar la casa.",
    "reference": "Cláusula 10.1 (incisos a, b y c).",
    "options": [
      {
        "id": "6.1",
        "tag": "6.1",
        "label": "Acciones para abordar riesgos y oportunidades"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "10.1",
        "tag": "10.1",
        "label": "Mejora: generalidades"
      },
      {
        "id": "10.3",
        "tag": "10.3",
        "label": "Mejora continua"
      }
    ],
    "correctOptionId": "10.1"
  },
  {
    "id": 73,
    "block": "C",
    "title": "EMPRESA DE ENVASES EN HUACHIPA (CORREGIR NO ES CORREGIR LA CAUSA)",
    "situation": "Ante un reclamo por tapas defectuosas, la empresa repone el lote y cierra el caso. No investigó por qué ocurrió ni revisó si pasaba en otras líneas. El defecto reapareció.",
    "question": "¿Qué se hizo y qué faltó?",
    "answer": "Solo se hizo corrección. Faltó evaluar acciones correctivas: revisar y analizar la NC, determinar causas y ver si existen NC similares o potenciales.",
    "simple": "Es secar el piso mojado sin arreglar la tubería que gotea.",
    "reference": "Cláusula 10.2.1 a) y b) | ISO 9000:2015 (corrección y acción correctiva).",
    "options": [
      {
        "id": "8.7",
        "tag": "8.7",
        "label": "Salidas no conformes"
      },
      {
        "id": "10.1",
        "tag": "10.1",
        "label": "Mejora: generalidades"
      },
      {
        "id": "10.2.1",
        "tag": "10.2.1",
        "label": "Analizar la NC y determinar causas"
      },
      {
        "id": "10.3",
        "tag": "10.3",
        "label": "Mejora continua"
      }
    ],
    "correctOptionId": "10.2.1"
  },
  {
    "id": 74,
    "block": "C",
    "title": "EMPRESA DE LOGÍSTICA EN LURÍN (ACCIÓN SIN VERIFICAR)",
    "situation": "Tras un error de despacho se capacitó al personal y se cerró la acción. Tres meses después ocurrió el mismo error. Nadie comprobó si la capacitación realmente evitó la repetición.",
    "question": "¿Qué paso del tratamiento de la no conformidad se omitió?",
    "answer": "Revisar la eficacia de la acción correctiva tomada y, si es necesario, actualizar los riesgos y oportunidades o hacer cambios al SGC.",
    "simple": "Es tomar un antibiótico sin volver al control para saber si la infección cedió.",
    "reference": "Cláusula 10.2.1 d), e) y f).",
    "options": [
      {
        "id": "9.3",
        "tag": "9.3",
        "label": "Revisión por la dirección"
      },
      {
        "id": "10.2.1d",
        "tag": "10.2.1 d)",
        "label": "Revisar la eficacia de la acción correctiva"
      },
      {
        "id": "10.3",
        "tag": "10.3",
        "label": "Mejora continua"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      }
    ],
    "correctOptionId": "10.2.1d"
  },
  {
    "id": 75,
    "block": "C",
    "title": "LABORATORIO CLÍNICO EN LIMA (NC SIN HUELLA)",
    "situation": "El laboratorio corrige sus errores en el momento, pero no registra qué pasó ni qué se hizo. Para una auditoría de acreditación no pudo demostrar ninguna acción correctiva.",
    "question": "¿Qué información documentada debe conservar?",
    "answer": "La naturaleza de las no conformidades, las acciones tomadas posteriormente y los resultados de cualquier acción correctiva.",
    "simple": "Es hacer una reparación y no guardar la factura ni anotar qué se arregló.",
    "reference": "Cláusula 10.2.2 (incisos a y b).",
    "options": [
      {
        "id": "7.5.3",
        "tag": "7.5.3",
        "label": "Control de la información documentada"
      },
      {
        "id": "9.2",
        "tag": "9.2",
        "label": "Auditoría interna"
      },
      {
        "id": "10.2.2",
        "tag": "10.2.2",
        "label": "Información documentada de NC y acciones"
      },
      {
        "id": "10.3",
        "tag": "10.3",
        "label": "Mejora continua"
      }
    ],
    "correctOptionId": "10.2.2"
  },
  {
    "id": 76,
    "block": "C",
    "title": "EMPRESA DE SERVICIOS EN LIMA (MEJORA POR CUMPLIR)",
    "situation": "Cada año se presenta la misma lista de 'mejoras' sin vincularse con el análisis de datos ni con la revisión por la dirección. Los indicadores se mantienen estancados.",
    "question": "¿Qué exige la mejora continua?",
    "answer": "Mejorar continuamente la conveniencia, adecuación y eficacia del SGC, considerando los resultados del análisis y evaluación y las salidas de la revisión por la dirección.",
    "simple": "Es repetir la misma rutina de gimnasio durante años y esperar un cuerpo distinto.",
    "reference": "Cláusula 10.3.",
    "options": [
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "9.3",
        "tag": "9.3",
        "label": "Revisión por la dirección"
      },
      {
        "id": "10.1",
        "tag": "10.1",
        "label": "Mejora: generalidades"
      },
      {
        "id": "10.3",
        "tag": "10.3",
        "label": "Mejora continua"
      }
    ],
    "correctOptionId": "10.3"
  }
];
