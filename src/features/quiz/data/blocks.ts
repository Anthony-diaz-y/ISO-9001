import type { BlockId, BlockInfo } from "../types";

export const BLOCK_ORDER: BlockId[] = ["A", "B", "C", "D"];

export const BLOCKS: Record<BlockId, BlockInfo> = {
  A: {
    id: "A",
    name: "Bloque A",
    title: "Fundamentos y cláusulas 4–6",
    description: "Contexto, partes interesadas, liderazgo, riesgos y planificación.",
    cases: "Casos 1–26",
    count: 26,
  },
  B: {
    id: "B",
    name: "Bloque B",
    title: "Apoyo y operación (7–8.4)",
    description: "Recursos, competencia, comunicación, diseño y proveedores.",
    cases: "Casos 27–52",
    count: 26,
  },
  C: {
    id: "C",
    name: "Bloque C",
    title: "Operación, evaluación y mejora (8.5–10)",
    description: "Producción, salidas no conformes, auditoría, dirección y mejora.",
    cases: "Casos 53–76",
    count: 24,
  },
  D: {
    id: "D",
    name: "Bloque D",
    title: "Auditoría, términos y certificación",
    description: "ISO 19011, vocabulario ISO 9000, certificación y casos integradores.",
    cases: "Casos 77–100",
    count: 24,
  },
};
