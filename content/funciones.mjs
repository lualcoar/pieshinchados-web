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
    slug: 'legatus-y-dimittas-muestra-estatal-teatro-jalisco-agosto-2026',
    obraSlug: 'legatus-y-dimittas',
    fechaInicio: '2026-08-29',
    fechaFin: '',
    horario: '6:00 pm',
    lugar: 'Foro de Arte y Cultura',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    boletosUrl: 'https://voyalteatro.com/cartelera/9100',
    gratuita: false,
    resumenHtml: `<p>Función de <em>Legatus y Dimittas</em> el sábado 29 de agosto de 2026, a las 6:00 pm, en
      el Foro de Arte y Cultura (Fray Antonio Alcalde 1451, Col. Miraflores, Guadalajara), como parte de la
      <a href="/blog/legatus-y-dimittas-muestra-estatal-teatro-jalisco-2026/">29ª Muestra Estatal de Teatro de
      Jalisco 2026</a>. <a href="https://voyalteatro.com/cartelera/9100" target="_blank" rel="noopener">Boletos
      en línea aquí</a>.</p>`,
  },
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
    slug: 'armadillos-colima-octubre-2026',
    obraSlug: 'armadillos',
    fechaInicio: '2026-10-10',
    fechaFin: '2026-10-11',
    horario: 'Sábado 7:00 pm · domingo 6:00 pm',
    lugar: 'Casa Caracol',
    ciudad: 'Colima',
    estado: 'Colima',
    boletosUrl: '',
    gratuita: false,
    resumenHtml: `<p>Funciones de <em>Armadillos, un viaje hacia el otro lado</em> el sábado 10 de
      octubre (7:00 pm) y el domingo 11 de octubre (6:00 pm) de 2026, en Casa Caracol.</p>
      <p>Esta gira forma parte del <a href="/blog/circuito-nacional-artes-escenicas-espacios-independientes-2026/">Circuito
      Nacional de Artes Escénicas en Espacios Independientes 2026</a>.</p>`,
  },
  {
    slug: 'armadillos-morelia-octubre-2026',
    obraSlug: 'armadillos',
    fechaInicio: '2026-10-18',
    fechaFin: '',
    horario: '1:00 pm y 6:00 pm',
    lugar: 'La Ceiba',
    ciudad: 'Morelia',
    estado: 'Michoacán',
    boletosUrl: '',
    gratuita: false,
    resumenHtml: `<p>Funciones de <em>Armadillos, un viaje hacia el otro lado</em> el domingo 18 de
      octubre de 2026, a la 1:00 pm y a las 6:00 pm, en La Ceiba.</p>
      <p>Esta gira forma parte del <a href="/blog/circuito-nacional-artes-escenicas-espacios-independientes-2026/">Circuito
      Nacional de Artes Escénicas en Espacios Independientes 2026</a>.</p>`,
  },
  {
    slug: 'armadillos-leon-diciembre-2026',
    obraSlug: 'armadillos',
    fechaInicio: '2026-12-07',
    fechaFin: '2026-12-08',
    horario: '7:00 pm',
    lugar: 'Espacio Colaborativo',
    ciudad: 'León',
    estado: 'Guanajuato',
    boletosUrl: '',
    gratuita: false,
    resumenHtml: `<p>Funciones de <em>Armadillos, un viaje hacia el otro lado</em> el lunes 7 y
      martes 8 de diciembre de 2026, a las 7:00 pm, en Espacio Colaborativo.</p>
      <p>Esta gira forma parte del <a href="/blog/circuito-nacional-artes-escenicas-espacios-independientes-2026/">Circuito
      Nacional de Artes Escénicas en Espacios Independientes 2026</a>.</p>`,
  },
  {
    slug: 'armadillos-puerto-vallarta-diciembre-2026',
    obraSlug: 'armadillos',
    fechaInicio: '2026-12-11',
    fechaFin: '2026-12-12',
    horario: '6:00 pm',
    lugar: 'Plataforma 322',
    ciudad: 'Puerto Vallarta',
    estado: 'Jalisco',
    boletosUrl: '',
    gratuita: false,
    resumenHtml: `<p>Funciones de <em>Armadillos, un viaje hacia el otro lado</em> el viernes 11 y
      sábado 12 de diciembre de 2026, a las 6:00 pm, en Plataforma 322.</p>
      <p>Esta gira forma parte del <a href="/blog/circuito-nacional-artes-escenicas-espacios-independientes-2026/">Circuito
      Nacional de Artes Escénicas en Espacios Independientes 2026</a>.</p>`,
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
