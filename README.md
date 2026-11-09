# ISO 9001:2015 · Banco de práctica

Aplicación de práctica para el examen de Gestión de la Calidad, construida a partir del banco de **100 casos y preguntas de ISO 9001:2015**.

Cada caso muestra una situación real, una pregunta y cuatro puntos de la norma. Al marcar una opción y comprobar, la app indica si acertaste, cuál era la respuesta correcta, la justificación y la cláusula de referencia. Al final se muestra el puntaje, el desempeño por bloque y una revisión de las preguntas falladas.

## Funciones

- Examen completo de 100 preguntas en orden aleatorio.
- Ronda rápida de 20 preguntas.
- Práctica por bloque temático (A, B, C y D).
- Feedback inmediato por pregunta.
- Puntaje final, anillo de progreso y desglose por bloque.
- Repaso de preguntas falladas y opción de repetir la sesión.
- Mejor puntaje guardado en el navegador.
- Diseño responsive para celular y escritorio.

## Estructura (Scream Modular)

La organización es por funcionalidad, no por tipo de archivo:

```text
app/
  layout.tsx                  Configuración global y metadatos
  page.tsx                    Punto de entrada de la ruta /
  globals.css                 Tokens de diseño y estilos base
src/
  features/
    quiz/                     Todo lo relacionado con la práctica
      index.ts                API pública del módulo
      components/
        QuizApp.tsx           Orquesta inicio, sesión y resultados
        start/                Pantalla de inicio y selección de sesión
        session/              Pregunta, opciones, progreso y feedback
        results/              Puntaje, bloques y revisión
      data/
        blocks.ts             Metadatos de los 4 bloques
        questions/            Banco de 100 preguntas dividido por bloque
      hooks/
        useQuiz.ts            Estado y lógica de la sesión
      lib/                    Scoring, mezcla y estilos por bloque
      types.ts                Tipos del dominio
  shared/
    components/               Marca e iconos reutilizables
    hooks/                    Hook del mejor puntaje
    lib/                      Utilidades compartidas
```

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm build
```

## Fuente

Banco de 100 casos y preguntas de ISO 9001:2015, cláusulas 4 a 10, principios, términos de ISO 9000 y auditoría con ISO 19011.
