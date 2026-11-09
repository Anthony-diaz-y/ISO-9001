import type { Question } from "../../types";

export const BLOCK_D_QUESTIONS: Question[] = [
  {
    "id": 77,
    "block": "D",
    "title": "AUDITOR EXTERNO EN LIMA (REGALO Y CHISMES)",
    "situation": "Un auditor acepta una cena de la gerencia que audita y luego comenta en otra empresa, con nombres, las fallas de procesos que vio en la primera. Sus hallazgos suavizan lo grave.",
    "question": "¿Qué principios de auditoría ha violado?",
    "answer": "Integridad (base de la profesionalidad) y confidencialidad (seguridad de la información), y también compromete su independencia e imparcialidad.",
    "simple": "Es un árbitro que acepta invitaciones de un equipo y cuenta los secretos de sus rivales.",
    "reference": "ISO 19011:2018 cap. 4 (principios de auditoría).",
    "options": [
      {
        "id": "9.2",
        "tag": "9.2",
        "label": "Auditoría interna"
      },
      {
        "id": "aud-tipos",
        "tag": "ISO 19011",
        "label": "Tipos de auditoría (1.ª, 2.ª y 3.ª parte)"
      },
      {
        "id": "aud-integridad",
        "tag": "ISO 19011",
        "label": "Integridad y confidencialidad"
      },
      {
        "id": "aud-imparcial",
        "tag": "ISO 19011",
        "label": "Presentación imparcial"
      }
    ],
    "correctOptionId": "aud-integridad"
  },
  {
    "id": 78,
    "block": "D",
    "title": "AUDITORÍA INTERNA EN CHICLAYO (HALLAZGO POR RUMOR)",
    "situation": "Un auditor interno escribe una no conformidad porque 'le comentaron' que un área no calibra sus equipos. No revisó registros ni observó el proceso. El área se defiende y gana la discusión.",
    "question": "¿Qué principio faltó y qué se necesita para un hallazgo?",
    "answer": "El enfoque basado en la evidencia: el hallazgo se apoya en evidencia de auditoría verificable (registros, hechos observados) evaluada frente a los criterios.",
    "simple": "Es acusar a alguien en un juicio solo porque un vecino lo comentó.",
    "reference": "ISO 19011:2018 cap. 4 f) y cap. 3 (evidencia y hallazgos).",
    "options": [
      {
        "id": "aud-programa",
        "tag": "ISO 19011",
        "label": "Programa de auditoría y riesgos"
      },
      {
        "id": "aud-integridad",
        "tag": "ISO 19011",
        "label": "Integridad y confidencialidad"
      },
      {
        "id": "9.2",
        "tag": "9.2",
        "label": "Auditoría interna"
      },
      {
        "id": "aud-evidencia",
        "tag": "ISO 19011",
        "label": "Enfoque basado en la evidencia"
      }
    ],
    "correctOptionId": "aud-evidencia"
  },
  {
    "id": 79,
    "block": "D",
    "title": "INFORME DE AUDITORÍA EN AREQUIPA (HALLAZGO ENDULZADO)",
    "situation": "El auditor líder omite una no conformidad grave del informe porque 'va a asustar a la gerencia'. También resalta los puntos buenos para equilibrar. La NC reaparece en el cliente.",
    "question": "¿Qué principio incumple?",
    "answer": "La presentación imparcial: la obligación de informar con veracidad y exactitud, incluyendo los obstáculos y las opiniones divergentes importantes.",
    "simple": "Es un médico que oculta el diagnóstico para que el paciente no se asuste.",
    "reference": "ISO 19011:2018 cap. 4 b).",
    "options": [
      {
        "id": "aud-evidencia",
        "tag": "ISO 19011",
        "label": "Enfoque basado en la evidencia"
      },
      {
        "id": "aud-imparcial",
        "tag": "ISO 19011",
        "label": "Presentación imparcial"
      },
      {
        "id": "aud-competencia",
        "tag": "ISO 19011",
        "label": "Competencia del auditor"
      },
      {
        "id": "aud-integridad",
        "tag": "ISO 19011",
        "label": "Integridad y confidencialidad"
      }
    ],
    "correctOptionId": "aud-imparcial"
  },
  {
    "id": 80,
    "block": "D",
    "title": "EMPRESA DE ALIMENTOS EN LIMA (¿QUIÉN AUDITA A QUIÉN?)",
    "situation": "La empresa audita a su propia planta (A), un supermercado audita a la empresa como proveedor (B) y una certificadora independiente audita para otorgar el certificado (C).",
    "question": "¿Qué tipo de auditoría es cada una?",
    "answer": "A es de primera parte (interna). B es de segunda parte (un cliente a su proveedor). C es de tercera parte (organización independiente, certificación).",
    "simple": "Es corregir tu examen (1ª), que tu profesor lo corrija (2ª) o que un tribunal externo lo evalúe (3ª).",
    "reference": "ISO 9000:2015 y ISO 19011:2018 cap. 3 y 5.",
    "options": [
      {
        "id": "aud-integridad",
        "tag": "ISO 19011",
        "label": "Integridad y confidencialidad"
      },
      {
        "id": "aud-tipos",
        "tag": "ISO 19011",
        "label": "Tipos de auditoría (1.ª, 2.ª y 3.ª parte)"
      },
      {
        "id": "aud-programa",
        "tag": "ISO 19011",
        "label": "Programa de auditoría y riesgos"
      },
      {
        "id": "aud-competencia",
        "tag": "ISO 19011",
        "label": "Competencia del auditor"
      }
    ],
    "correctOptionId": "aud-tipos"
  },
  {
    "id": 81,
    "block": "D",
    "title": "AUDITORÍA INTERNA EN TRUJILLO (VOCABULARIO REVUELTO)",
    "situation": "El equipo llama 'criterio' a lo que vio en la planta y 'hallazgo' a la norma ISO 9001. Un auditor nuevo dice: 'la evidencia es la conclusión final del informe'.",
    "question": "¿Cuál es el significado correcto de cada término?",
    "answer": "Criterio: requisitos contra los que se compara (norma, procedimiento). Evidencia: información verificable. Hallazgo: resultado de evaluar la evidencia frente al criterio. Conclusión: resultado final.",
    "simple": "Es usar la regla (criterio) para medir una mesa (evidencia) y anotar si encaja (hallazgo).",
    "reference": "ISO 19011:2018 cap. 3 (términos y definiciones).",
    "options": [
      {
        "id": "aud-integridad",
        "tag": "ISO 19011",
        "label": "Integridad y confidencialidad"
      },
      {
        "id": "aud-evidencia",
        "tag": "ISO 19011",
        "label": "Enfoque basado en la evidencia"
      },
      {
        "id": "aud-competencia",
        "tag": "ISO 19011",
        "label": "Competencia del auditor"
      },
      {
        "id": "aud-hallazgos",
        "tag": "ISO 19011",
        "label": "Criterios, evidencia y hallazgos"
      }
    ],
    "correctOptionId": "aud-hallazgos"
  },
  {
    "id": 82,
    "block": "D",
    "title": "AUDITORÍA INTERNA EN PIURA (SIN ABRIR NI CERRAR)",
    "situation": "El equipo auditor llegó a planta sin plan de auditoría ni lista de procesos. Auditó dos días y se fue sin reunirse con la gerencia para presentar los hallazgos. El informe llegó un mes después.",
    "question": "¿Qué actividades del proceso de auditoría se omitieron?",
    "answer": "La preparación (plan de auditoría), la reunión de apertura, la reunión de cierre para presentar hallazgos y conclusiones, y el informe oportuno con seguimiento de acciones.",
    "simple": "Es entrar a una casa sin avisar, revisar todo y salir sin decir qué encontraste.",
    "reference": "ISO 19011:2018 cap. 6 (realización de una auditoría).",
    "options": [
      {
        "id": "aud-hallazgos",
        "tag": "ISO 19011",
        "label": "Criterios, evidencia y hallazgos"
      },
      {
        "id": "aud-etapas",
        "tag": "ISO 19011",
        "label": "Etapas y reuniones de auditoría"
      },
      {
        "id": "aud-evidencia",
        "tag": "ISO 19011",
        "label": "Enfoque basado en la evidencia"
      },
      {
        "id": "9.2",
        "tag": "9.2",
        "label": "Auditoría interna"
      }
    ],
    "correctOptionId": "aud-etapas"
  },
  {
    "id": 83,
    "block": "D",
    "title": "EMPRESA METALMECÁNICA EN CALLAO (AUDITOR SIN FORMACIÓN)",
    "situation": "Para ahorrar, la empresa asigna como auditor interno a un practicante sin formación en la norma ni en técnicas de auditoría. Su informe confunde corrección con acción correctiva.",
    "question": "¿Qué debe asegurar la organización sobre los auditores?",
    "answer": "Que el equipo auditor tenga la competencia necesaria (conocimientos y habilidades) y se evalúe, y que se asegure la objetividad e imparcialidad.",
    "simple": "Es poner a alguien sin brevete a enseñar a manejar.",
    "reference": "ISO 19011:2018 cap. 7 y 9.2.2 c).",
    "options": [
      {
        "id": "aud-etapas",
        "tag": "ISO 19011",
        "label": "Etapas y reuniones de auditoría"
      },
      {
        "id": "aud-competencia",
        "tag": "ISO 19011",
        "label": "Competencia del auditor"
      },
      {
        "id": "aud-tipos",
        "tag": "ISO 19011",
        "label": "Tipos de auditoría (1.ª, 2.ª y 3.ª parte)"
      },
      {
        "id": "aud-imparcial",
        "tag": "ISO 19011",
        "label": "Presentación imparcial"
      }
    ],
    "correctOptionId": "aud-competencia"
  },
  {
    "id": 84,
    "block": "D",
    "title": "HOSPITAL EN LIMA (AUDITAR CON ENFOQUE EN RIESGO)",
    "situation": "El hospital audita por igual las áreas administrativas y la central de esterilización. Esta última tuvo tres NC el año pasado y cambió de proveedor de insumos.",
    "question": "¿Qué enfoque debería aplicar el programa de auditoría?",
    "answer": "Enfoque basado en el riesgo: priorizar procesos de mayor riesgo, con cambios recientes o con resultados de auditorías previas, ajustando frecuencia y profundidad.",
    "simple": "Es revisar más seguido el cuarto con cables pelados que la sala con sillas nuevas.",
    "reference": "ISO 19011:2018 cap. 4 g) y 5 | ISO 9001 cl. 9.2.2 a).",
    "options": [
      {
        "id": "aud-hallazgos",
        "tag": "ISO 19011",
        "label": "Criterios, evidencia y hallazgos"
      },
      {
        "id": "aud-etapas",
        "tag": "ISO 19011",
        "label": "Etapas y reuniones de auditoría"
      },
      {
        "id": "aud-programa",
        "tag": "ISO 19011",
        "label": "Programa de auditoría y riesgos"
      },
      {
        "id": "aud-imparcial",
        "tag": "ISO 19011",
        "label": "Presentación imparcial"
      }
    ],
    "correctOptionId": "aud-programa"
  },
  {
    "id": 85,
    "block": "D",
    "title": "EMPRESA DE CALZADO EN TRUJILLO (CALIDAD ES LUJO)",
    "situation": "El gerente dice: 'La calidad es lo caro, lo mejor del mercado'. Su zapato de bajo precio fue diseñado para uso diario y cumple lo que promete. Aun así, él afirma que 'no tiene calidad'.",
    "question": "¿Cómo define la calidad la ISO 9000?",
    "answer": "Grado en el que un conjunto de características inherentes de un objeto cumple con los requisitos. No depende del precio ni del lujo.",
    "simple": "Un zapato barato que cumple lo prometido tiene calidad; uno caro que se rompe, no.",
    "reference": "ISO 9000:2015 cap. 3 (términos y definiciones).",
    "options": [
      {
        "id": "9000-eficacia",
        "tag": "ISO 9000",
        "label": "Eficacia y eficiencia"
      },
      {
        "id": "9000-proceso",
        "tag": "ISO 9000",
        "label": "Proceso (entradas y salidas)"
      },
      {
        "id": "9000-calidad",
        "tag": "ISO 9000",
        "label": "Calidad"
      },
      {
        "id": "9000-nc",
        "tag": "ISO 9000",
        "label": "No conformidad y defecto"
      }
    ],
    "correctOptionId": "9000-calidad"
  },
  {
    "id": 86,
    "block": "D",
    "title": "PLANTA DE ENVASES EN CHICLAYO (SE LOGRÓ PERO CARÍSIMO)",
    "situation": "La planta cumplió su meta de producción de 100 000 unidades, pero usó el doble de materia prima y horas extras. El gerente dice 'fuimos eficientes porque llegamos a la meta'.",
    "question": "¿Qué confunde el gerente?",
    "answer": "Eficacia es lograr los resultados planificados. Eficiencia es la relación entre el resultado logrado y los recursos utilizados. Fue eficaz, pero poco eficiente.",
    "simple": "Llegar a Cusco en taxi con el tanque vacío de plata: llegaste (eficaz), pero gastaste demasiado (no eficiente).",
    "reference": "ISO 9000:2015 cap. 3 (términos y definiciones).",
    "options": [
      {
        "id": "9000-nc",
        "tag": "ISO 9000",
        "label": "No conformidad y defecto"
      },
      {
        "id": "9000-proceso",
        "tag": "ISO 9000",
        "label": "Proceso (entradas y salidas)"
      },
      {
        "id": "9000-eficacia",
        "tag": "ISO 9000",
        "label": "Eficacia y eficiencia"
      },
      {
        "id": "9000-calidad",
        "tag": "ISO 9000",
        "label": "Calidad"
      }
    ],
    "correctOptionId": "9000-eficacia"
  },
  {
    "id": 87,
    "block": "D",
    "title": "RESTAURANTE EN MIRAFLORES (LO QUE NO SE DICE)",
    "situation": "Un cliente pide un menú ejecutivo y recibe un plato en mal estado. El dueño dice: 'No lo pidió por escrito, no estaba en el contrato'. El cliente reclama de todos modos.",
    "question": "¿Qué tipo de requisito se ignoró?",
    "answer": "Un requisito implícito: necesidad o expectativa habitual, que no se declara por ser obvia (alimento sano). La organización debe considerar también los requisitos no declarados.",
    "simple": "Nadie pide que el agua sea potable; se da por hecho.",
    "reference": "ISO 9000:2015 cap. 3 (términos y definiciones) | ISO 9001 cl. 8.2.3.1 b).",
    "options": [
      {
        "id": "9000-nc",
        "tag": "ISO 9000",
        "label": "No conformidad y defecto"
      },
      {
        "id": "9000-riesgo",
        "tag": "ISO 9000",
        "label": "Riesgo (efecto de la incertidumbre)"
      },
      {
        "id": "9000-calidad",
        "tag": "ISO 9000",
        "label": "Calidad"
      },
      {
        "id": "9000-requisito",
        "tag": "ISO 9000",
        "label": "Requisito implícito"
      }
    ],
    "correctOptionId": "9000-requisito"
  },
  {
    "id": 88,
    "block": "D",
    "title": "EMPRESA CONSTRUCTORA EN CAJAMARCA (RIESGO SOLO MALO)",
    "situation": "El comité dice que 'riesgo es algo malo que puede pasar' y que la ISO 9001 solo trata de evitar pérdidas. Nunca consideran que un cambio de mercado podría abrir una oportunidad.",
    "question": "¿Cómo se define el riesgo y qué consecuencia tiene?",
    "answer": "Riesgo es el efecto de la incertidumbre, que puede ser positivo o negativo. Una desviación positiva puede dar una oportunidad; el SGC aborda ambos.",
    "simple": "Lanzar un dado: puede salir mal o puede salir muy bien.",
    "reference": "ISO 9001 cap. 0.3.3 | ISO 9000:2015 cap. 3 (términos y definiciones).",
    "options": [
      {
        "id": "9000-calidad",
        "tag": "ISO 9000",
        "label": "Calidad"
      },
      {
        "id": "9000-nc",
        "tag": "ISO 9000",
        "label": "No conformidad y defecto"
      },
      {
        "id": "9000-proceso",
        "tag": "ISO 9000",
        "label": "Proceso (entradas y salidas)"
      },
      {
        "id": "9000-riesgo",
        "tag": "ISO 9000",
        "label": "Riesgo (efecto de la incertidumbre)"
      }
    ],
    "correctOptionId": "9000-riesgo"
  },
  {
    "id": 89,
    "block": "D",
    "title": "FÁBRICA DE LAVADORAS EN LIMA (¿TODO ES DEFECTO?)",
    "situation": "Una lavadora sale con una etiqueta mal pegada. El supervisor dice 'es un defecto'. Otro dice 'es solo una no conformidad'. Quieren saber cuál es el término correcto y qué los diferencia.",
    "question": "¿Qué diferencia hay entre no conformidad y defecto?",
    "answer": "No conformidad es el incumplimiento de un requisito. Defecto es una no conformidad relacionada con un uso previsto o especificado. Todo defecto es NC, no al revés.",
    "simple": "Toda mala nota es un error, pero solo el error que cambia el resultado del curso es grave.",
    "reference": "ISO 9000:2015 cap. 3 (términos y definiciones).",
    "options": [
      {
        "id": "9000-proceso",
        "tag": "ISO 9000",
        "label": "Proceso (entradas y salidas)"
      },
      {
        "id": "9000-calidad",
        "tag": "ISO 9000",
        "label": "Calidad"
      },
      {
        "id": "9000-requisito",
        "tag": "ISO 9000",
        "label": "Requisito implícito"
      },
      {
        "id": "9000-nc",
        "tag": "ISO 9000",
        "label": "No conformidad y defecto"
      }
    ],
    "correctOptionId": "9000-nc"
  },
  {
    "id": 90,
    "block": "D",
    "title": "EMPRESA DE SERVICIOS EN SURCO (¿QUÉ ES UN PROCESO?)",
    "situation": "Un directivo dice que 'proceso es un área de la empresa' y que 'logística' es el proceso. Para el auditor, un proceso tiene entradas, actividades, salidas y recursos.",
    "question": "¿Cómo se define proceso?",
    "answer": "Conjunto de actividades interrelacionadas que utilizan las entradas para proporcionar un resultado previsto. No es un área ni un departamento.",
    "simple": "Una receta: ingredientes (entradas), pasos (actividades) y plato final (salida).",
    "reference": "ISO 9000:2015 cap. 3 (términos y definiciones) | ISO 9001 cap. 0.3.1 y cl. 4.4.",
    "options": [
      {
        "id": "9000-eficacia",
        "tag": "ISO 9000",
        "label": "Eficacia y eficiencia"
      },
      {
        "id": "9000-proceso",
        "tag": "ISO 9000",
        "label": "Proceso (entradas y salidas)"
      },
      {
        "id": "9000-calidad",
        "tag": "ISO 9000",
        "label": "Calidad"
      },
      {
        "id": "9000-nc",
        "tag": "ISO 9000",
        "label": "No conformidad y defecto"
      }
    ],
    "correctOptionId": "9000-proceso"
  },
  {
    "id": 91,
    "block": "D",
    "title": "EMPRESA TEXTIL EN GAMARRA (EL CERTIFICADO NO ES UN SELLO DE PRODUCTO)",
    "situation": "La empresa promociona 'nuestros polos son de la mejor calidad porque estamos certificados ISO 9001'. Un cliente reclama que las prendas se encogen.",
    "question": "¿Qué certifica realmente ISO 9001?",
    "answer": "Que el sistema de gestión de la calidad cumple los requisitos de la norma. No garantiza por sí solo que el producto sea de superior calidad ni que cumpla todas las especificaciones.",
    "simple": "Que un restaurante tenga buena cocina organizada no asegura que te guste el plato.",
    "reference": "ISO 9001 cap. 1 y 0.1 (complementarios a los requisitos del producto).",
    "options": [
      {
        "id": "cert-sistema",
        "tag": "ISO 9001",
        "label": "Certifica el SGC, no el producto"
      },
      {
        "id": "cert-imparcial",
        "tag": "ISO/IEC 17021-1",
        "label": "Imparcialidad"
      },
      {
        "id": "cert-acreditacion",
        "tag": "INACAL",
        "label": "Acreditación de organismos"
      },
      {
        "id": "cert-ciclo",
        "tag": "ISO/IEC 17021-1",
        "label": "Ciclo de certificación"
      }
    ],
    "correctOptionId": "cert-sistema"
  },
  {
    "id": 92,
    "block": "D",
    "title": "EMPRESA DE PLÁSTICOS EN ATE (EL CERTIFICADO NO ES PARA SIEMPRE)",
    "situation": "La empresa obtuvo su certificado hace dos años y dejó de auditarse. Dice 'ya estamos certificados' y ya no actualiza su sistema. Un cliente exige ver evidencia vigente.",
    "question": "¿Cómo funciona normalmente el ciclo de certificación?",
    "answer": "El certificado tiene validez por tres años, con auditorías de seguimiento (generalmente anuales) y recertificación al final del ciclo. La certificación se mantiene demostrando conformidad.",
    "simple": "Es como un carnet de conducir que debe renovarse y no te libra de infracciones.",
    "reference": "ISO/IEC 17021-1 y práctica de los organismos de certificación.",
    "options": [
      {
        "id": "cert-sistema",
        "tag": "ISO 9001",
        "label": "Certifica el SGC, no el producto"
      },
      {
        "id": "cert-acreditacion",
        "tag": "INACAL",
        "label": "Acreditación de organismos"
      },
      {
        "id": "cert-imparcial",
        "tag": "ISO/IEC 17021-1",
        "label": "Imparcialidad"
      },
      {
        "id": "cert-ciclo",
        "tag": "ISO/IEC 17021-1",
        "label": "Ciclo de certificación"
      }
    ],
    "correctOptionId": "cert-ciclo"
  },
  {
    "id": 93,
    "block": "D",
    "title": "CERTIFICADORA Y CONSULTORA EN LIMA (EL MISMO EQUIPO)",
    "situation": "Una empresa certificadora ofrece a un cliente el servicio de implementar el SGC con su propio personal y, después, auditarlo para otorgarle el certificado. Dicen que así 'ahorra tiempo'.",
    "question": "¿Qué problema de imparcialidad se presenta?",
    "answer": "Un organismo de certificación no puede ofrecer consultoría al mismo cliente que audita porque comprometería su independencia e imparcialidad.",
    "simple": "Es que el profesor te escriba la tesis y luego sea el jurado que la califica.",
    "reference": "ISO/IEC 17021-1 (imparcialidad) | ISO 19011 cap. 4 e).",
    "options": [
      {
        "id": "cert-imparcial",
        "tag": "ISO/IEC 17021-1",
        "label": "Imparcialidad"
      },
      {
        "id": "cert-ciclo",
        "tag": "ISO/IEC 17021-1",
        "label": "Ciclo de certificación"
      },
      {
        "id": "cert-acreditacion",
        "tag": "INACAL",
        "label": "Acreditación de organismos"
      },
      {
        "id": "cert-sistema",
        "tag": "ISO 9001",
        "label": "Certifica el SGC, no el producto"
      }
    ],
    "correctOptionId": "cert-imparcial"
  },
  {
    "id": 94,
    "block": "D",
    "title": "EMPRESA DE ALIMENTOS EN LIMA (¿QUIÉN CERTIFICA A QUIÉN?)",
    "situation": "Una pyme contrata a una 'empresa certificadora' sin verificar si está acreditada. Su cliente grande rechaza el certificado. En el Perú, la norma técnica se adopta como NTP-ISO 9001.",
    "question": "¿Qué debió verificar y quién acredita?",
    "answer": "Que el organismo de certificación esté acreditado. En el Perú, INACAL acredita a los organismos de evaluación de la conformidad; la norma se adopta como NTP-ISO 9001:2015.",
    "simple": "Es inscribirse en una universidad sin ver si tiene licencia.",
    "reference": "INACAL (Dirección de Acreditación) | NTP-ISO 9001:2015.",
    "options": [
      {
        "id": "cert-imparcial",
        "tag": "ISO/IEC 17021-1",
        "label": "Imparcialidad"
      },
      {
        "id": "cert-sistema",
        "tag": "ISO 9001",
        "label": "Certifica el SGC, no el producto"
      },
      {
        "id": "cert-acreditacion",
        "tag": "INACAL",
        "label": "Acreditación de organismos"
      },
      {
        "id": "cert-ciclo",
        "tag": "ISO/IEC 17021-1",
        "label": "Ciclo de certificación"
      }
    ],
    "correctOptionId": "cert-acreditacion"
  },
  {
    "id": 95,
    "block": "D",
    "title": "EMPRESA DE SERVICIOS EN LIMA (¿MANTENER O CONSERVAR?)",
    "situation": "El equipo debate: 'mantener' y 'conservar' información documentada es lo mismo. Archivan la política y los resultados de auditorías en la misma carpeta sin distinguir su uso.",
    "question": "¿Cuál es la diferencia en el lenguaje de la norma?",
    "answer": "Mantener se aplica a documentos que describen qué hacer (política, objetivos, alcance, procesos). Conservar se aplica a evidencias de lo hecho (registros) y su tiempo lo define la organización.",
    "simple": "Mantener es la receta actualizada; conservar es la foto del plato que cocinaste.",
    "reference": "Anexo A.6 | cl. 4.3, 5.2.2, 6.2.1 (mantener) y 7.2, 8.7.2, 9.2.2 (conservar).",
    "options": [
      {
        "id": "doc-mantener",
        "tag": "A.6",
        "label": "Mantener vs. conservar información documentada"
      },
      {
        "id": "doc-verbos",
        "tag": "0.1",
        "label": "Formas verbales: debe, debería, puede"
      },
      {
        "id": "7.5.3",
        "tag": "7.5.3",
        "label": "Control de la información documentada"
      },
      {
        "id": "phva",
        "tag": "0.3.2",
        "label": "Ciclo PHVA"
      }
    ],
    "correctOptionId": "doc-mantener"
  },
  {
    "id": 96,
    "block": "D",
    "title": "CONSULTORA EN SAN ISIDRO (LAS PALABRAS TAMBIÉN AUDITAN)",
    "situation": "Un auditor emite una NC porque la empresa no hizo algo que la norma 'debería' hacer. Otro responde que lo que 'puede' hacerse no es obligatorio. Se pelean por el significado.",
    "question": "¿Qué significa cada forma verbal en ISO 9001?",
    "answer": "'Debe' indica un requisito (obligatorio). 'Debería' es una recomendación. 'Puede' indica permiso, posibilidad o capacidad. Solo el incumplimiento de un 'debe' genera NC.",
    "simple": "Es la diferencia entre 'es obligatorio llevar casco', 'es recomendable' y 'puedes llevarlo'.",
    "reference": "ISO 9001 cap. 0.1 (formas verbales).",
    "options": [
      {
        "id": "doc-verbos",
        "tag": "0.1",
        "label": "Formas verbales: debe, debería, puede"
      },
      {
        "id": "phva",
        "tag": "0.3.2",
        "label": "Ciclo PHVA"
      },
      {
        "id": "doc-mantener",
        "tag": "A.6",
        "label": "Mantener vs. conservar información documentada"
      },
      {
        "id": "7.5.1",
        "tag": "7.5.1",
        "label": "Información documentada: generalidades"
      }
    ],
    "correctOptionId": "doc-verbos"
  },
  {
    "id": 97,
    "block": "D",
    "title": "UNIVERSIDAD EN AREQUIPA (ORDEN DEL SISTEMA)",
    "situation": "El comité de calidad ubica 'Evaluación del desempeño' en Planificar y 'Operación' en Verificar. Al ver el esquema de la norma, nadie se pone de acuerdo.",
    "question": "¿Cómo se relacionan los capítulos 4 a 10 con el ciclo PHVA?",
    "answer": "Planificar: 6 y 7 (con el contexto 4 y el liderazgo 5 como base). Hacer: 8 Operación. Verificar: 9 Evaluación del desempeño. Actuar: 10 Mejora.",
    "simple": "Primero se prepara la receta (6 y 7), luego se cocina (8), se prueba (9) y se ajusta (10).",
    "reference": "ISO 9001 cap. 0.3.2 (Figura 2).",
    "options": [
      {
        "id": "doc-mantener",
        "tag": "A.6",
        "label": "Mantener vs. conservar información documentada"
      },
      {
        "id": "7.5.1",
        "tag": "7.5.1",
        "label": "Información documentada: generalidades"
      },
      {
        "id": "9.1.3",
        "tag": "9.1.3",
        "label": "Análisis y evaluación"
      },
      {
        "id": "doc-phva",
        "tag": "0.3.2",
        "label": "PHVA y estructura de los capítulos 4 a 10"
      }
    ],
    "correctOptionId": "doc-phva"
  },
  {
    "id": 98,
    "block": "D",
    "title": "ENSAMBLADORA EN LIMA (CAPACITAR NO ES SUFICIENTE)",
    "situation": "Un operario invirtió dos cables, lo que ocurrió cuatro veces en el mes. Cada vez se capacitó al operario, pero el error persiste. Los conectores son idénticos y no hay forma de distinguirlos.",
    "question": "¿Qué requisito de 8.5.1 se descuida?",
    "answer": "Implementar acciones para prevenir los errores humanos (8.5.1 g): por ejemplo, conectores a prueba de errores (poka-yoke), no solo capacitación.",
    "simple": "Es diseñar un enchufe que solo entre en la posición correcta en vez de ordenar que 'se ponga atención'.",
    "reference": "Cláusula 8.5.1 g).",
    "options": [
      {
        "id": "8.5.4",
        "tag": "8.5.4",
        "label": "Preservación"
      },
      {
        "id": "8.5.3",
        "tag": "8.5.3",
        "label": "Propiedad del cliente"
      },
      {
        "id": "8.5.6",
        "tag": "8.5.6",
        "label": "Control de cambios en la producción"
      },
      {
        "id": "8.5.1g",
        "tag": "8.5.1 g)",
        "label": "Prevención de errores humanos"
      }
    ],
    "correctOptionId": "8.5.1g"
  },
  {
    "id": 99,
    "block": "D",
    "title": "EMPRESA DE SERVICIOS EN SURCO (¿CUÁNTOS PROCEDIMIENTOS EXIGE LA NORMA?)",
    "situation": "La consultora dice: 'La ISO 9001:2015 exige seis procedimientos documentados, como la 2008'. La empresa los redacta aunque nunca los usa y descuida lo que la norma sí pide mantener.",
    "question": "¿Qué exige realmente la versión 2015?",
    "answer": "Ya no exige procedimientos documentados específicos: exige la información documentada que la norma requiere (alcance, política, objetivos, registros) y la que la organización determine necesaria.",
    "simple": "Es seguir llevando todos los papeles del trámite antiguo cuando solo piden dos.",
    "reference": "Cláusula 7.5.1 | Anexo A.6.",
    "options": [
      {
        "id": "7.5.1",
        "tag": "7.5.1",
        "label": "Información documentada: generalidades"
      },
      {
        "id": "7.3",
        "tag": "7.3",
        "label": "Toma de conciencia"
      },
      {
        "id": "7.5.3",
        "tag": "7.5.3",
        "label": "Control de la información documentada"
      },
      {
        "id": "7.2",
        "tag": "7.2",
        "label": "Competencia"
      }
    ],
    "correctOptionId": "7.5.1"
  },
  {
    "id": 100,
    "block": "D",
    "title": "EMPRESA DE ELECTRODOMÉSTICOS EN LIMA (UN RECLAMO, VARIAS CLÁUSULAS)",
    "situation": "Un cliente reclama por una licuadora que se recalienta. La empresa recibe la queja, retira el lote, repara las unidades, investiga la causa, cambia un proveedor y presenta los datos en la revisión por la dirección.",
    "question": "¿Qué cláusulas se activan en este caso?",
    "answer": "8.2.1 c) recibir la queja, 8.7 salida no conforme, 10.2 acción correctiva, 8.4 proveedor, 9.1.2 y 9.1.3 satisfacción y análisis, y 9.3 revisión por la dirección.",
    "simple": "Es una alarma de incendio que activa bomberos, evacuación y revisión del edificio.",
    "reference": "Cláusulas 8.2.1, 8.7, 10.2, 8.4, 9.1 y 9.3.",
    "options": [
      {
        "id": "100-a",
        "tag": "Integración",
        "label": "8.2.1, 8.7, 10.2, 8.4, 9.1 y 9.3"
      },
      {
        "id": "100-b",
        "tag": "Integración",
        "label": "Solo 8.2.1 y 8.7"
      },
      {
        "id": "100-c",
        "tag": "Integración",
        "label": "Solo 10.2 y 9.3"
      },
      {
        "id": "100-d",
        "tag": "Integración",
        "label": "4.1, 6.1 y 7.5"
      }
    ],
    "correctOptionId": "100-a"
  }
];
