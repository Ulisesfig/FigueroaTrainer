export type PlanSlug = 'inicial' | 'progreso' | 'elite';

export type Plan = {
  slug: PlanSlug;
  title: string;
  price: string;
  shortDesc: string;
  longDesc: string;
  includes: string[];
  recommended?: boolean;
};

export const plans: Plan[] = [
  {
    slug: 'inicial',
    title: 'Plan Inicial',
    price: 'ARS 19.900 / mes',
    shortDesc: 'Ideal para comenzar: técnica, hábitos y progresión segura.',
    longDesc:
      'El Plan Inicial está enfocado en construir bases sólidas: técnica correcta, hábitos saludables y una progresión segura para evitar lesiones y mejorar tu confianza en el entrenamiento.',
    includes: [
      'Evaluación inicial y objetivos',
      'Rutina 3x por semana',
      'Corrección de técnica (video)',
      'Guía de hábitos y movilidad',
      'Soporte por email',
    ],
  },
  {
    slug: 'progreso',
    title: 'Plan Progreso',
    price: 'ARS 29.900 / mes',
    shortDesc: 'Optimiza fuerza y composición corporal con seguimiento dedicado.',
    longDesc:
      'El Plan Progreso apunta a mejorar fuerza, rendimiento y composición corporal con un seguimiento más cercano y ajustes semanales basados en métricas y sensaciones.',
    includes: [
      'Plan 4x por semana',
      'Ajustes semanales',
      'Indicadores de progreso',
      'Video feedback',
      'Feedback por WhatsApp',
    ],
    recommended: true,
  },
  {
    slug: 'elite',
    title: 'Plan Élite',
    price: 'ARS 44.900 / mes',
    shortDesc: 'Enfoque avanzado, métricas detalladas y ajuste fino.',
    longDesc:
      'El Plan Élite es para quienes buscan un rendimiento superior. Incluye mayor frecuencia, análisis avanzado de métricas y prioridad de respuesta para optimizar cada detalle.',
    includes: [
      '5-6x por semana',
      'Análisis de métricas avanzadas',
      'Video feedback prioritario',
      'Ajuste fino de cargas y volúmenes',
      'Prioridad de respuesta',
    ],
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: '¿Necesito equipamiento especial?',
    a: 'No es obligatorio. Adaptamos el plan a lo que tengas disponible, desde peso corporal hasta gimnasio completo.',
  },
  {
    q: '¿Cómo es el seguimiento?',
    a: 'Dependiendo del plan, realizamos ajustes semanales y feedback por email o WhatsApp. También reviso técnica por video.',
  },
  {
    q: '¿Puedo cambiar de plan?',
    a: 'Sí, podés cambiar de plan al finalizar el período abonado o cuando tenga sentido por tu progresión.',
  },
  {
    q: '¿Hay reembolso?',
    a: 'No hay reembolsos parciales, pero podés cancelar la renovación antes del próximo ciclo.',
  },
];

export function getPlanBySlug(slug?: string) {
  return plans.find((p) => p.slug === slug);
}
