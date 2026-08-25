// ============================================================
// FUNCIONES — cada función/temporada programada. Esto alimenta
// la página de "Próximas funciones" y los datos estructurados
// tipo Evento que ayudan a que Google muestre fecha y boletos.
// Para agregar una función nueva: copia un bloque, cambia el
// "slug" y "obraSlug" (debe coincidir con un slug de repertorio.mjs).
// Luego corre "node build.mjs" otra vez.
// ============================================================
export const funciones = [
  {
    slug: 'armadillos-conjunto-santander-octubre-2026',
    obraSlug: 'armadillos',
    fechaInicio: '2026-10-03',
    fechaFin: '2026-10-04',
    horario: '',
    lugar: 'Conjunto Santander de Artes Escénicas',
    ciudad: 'Zapopan',
    estado: 'Jalisco',
    boletosUrl: 'https://armadillos-pieshinchados.netlify.app/',
    gratuita: false,
    resumenHtml: `<p>Funciones de <em>Armadillos, un viaje hacia el otro lado</em> el 3 y 4 de octubre
      de 2026, en el Conjunto Santander de Artes Escénicas.</p>
      <p>Toda la información y boletos de este evento están en su
      <a href="https://armadillos-pieshinchados.netlify.app/" target="_blank" rel="noopener">página
      especial</a>.</p>`,
  },
  {
    slug: 'tina-y-tomas-noviembre-2026',
    obraSlug: 'tina-y-tomas',
    fechaInicio: '2026-11-01',
    fechaFin: '2026-11-29',
    horario: 'Domingos, 1:00 p.m.',
    lugar: 'Teatro Alarife Martín Casillas',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    boletosUrl: '',
    gratuita: false,
    resumenHtml: `<p>Funciones de <em>Tina y Tomás</em> todos los domingos de noviembre de 2026, a la
      1:00 p.m., en el Teatro Alarife Martín Casillas, gracias a la convocatoria Habita la Escena.</p>`,
  },
  {
    slug: 'yetivi-tej-agosto-2026',
    obraSlug: 'yetivi',
    fechaInicio: '2026-08-21',
    fechaFin: '2026-08-23',
    horario: '',
    lugar: 'Teatro Experimental de Jalisco',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    boletosUrl: '',
    gratuita: false,
    resumenHtml: `<p>Temporada de <em>Yetiví</em> en el Teatro Experimental de Jalisco. Última función:
      23 de agosto de 2026.</p><p>Temporada ya concluida — queda como ejemplo de cómo se ve una
      función pasada dentro del repertorio.</p>`,
  },
];
