// ============================================================
// REPERTORIO — una obra por objeto.
//
// Las sinopsis completas, técnicas/género, accesibilidad y
// reconocimientos vienen de la página individual de cada obra en tu
// sitio actual (pieshinchadosteatro.com), extraídas el 25-26 de
// agosto de 2026. Las fotos son las que tú subiste directamente y
// viven en public/obra-*.jpg — ya no dependen de ningún servidor
// externo. El público y la duración de cada obra los confirmaste tú
// por mensaje de voz — cuando tu sitio actual decía algo distinto
// (p. ej. duraciones "50 a 60 min" en vez de un número fijo), se
// dejó lo que tú confirmaste por voz, no el rango del sitio viejo.
//
// Los requisitos técnicos de espacio (rider, montaje, etc.) se
// dejaron fuera a propósito (los compartes tú directo al cotizar,
// caso por caso). "accesibilidad" y "reconocimientos" son opcionales
// — déjalos como '' si una obra no los tiene.
//
// Para agregar una obra nueva: copia un bloque, cambia el "slug" y
// llena los campos. Luego corre "node build.mjs" otra vez.
// ============================================================
export const repertorio = [
  {
    slug: 'yetivi',
    titulo: 'Yetiví, la historia jamás contada del Yeti',
    subtitulo: 'Teatro para toda la familia',
    publico: 'Niñas y niños, de 3 a 10 años',
    duracion: '50 minutos',
    formato: 'Títeres, máscaras, clown y Lengua de Señas Mexicana (LSM)',
    sinopsisHtml: `<p>En las alturas heladas e inhóspitas del Himalaya habita una criatura tan
      imponente como incomprendida: el Yeti. Durante generaciones, los rumores lo han tildado de
      "monstruo", lo que ha provocado que viva en un aislamiento profundo, rugiendo de miedo al no
      saber cómo expresar lo que realmente siente.</p>
      <p>Su solitaria rutina se transforma por completo cuando aparece una niña curiosa y
      valiente. Sin prejuicios ni temores absurdos, ella decide acercarse a él con naturalidad. A
      través de juegos, torpezas compartidas y una escucha genuina, ambos descubrirán que a veces
      lo que parece feroz solo está esperando una mano amiga.</p>
      <p>Yetiví es una reflexión conmovedora sobre el respeto y la empatía hacia las personas
      mayores, el valor de identificar nuestras emociones y la importancia de cuestionar los
      prejuicios que generan exclusión y soledad.</p>`,
    accesibilidad: 'Obra incluyente que integra de manera orgánica la Lengua de Señas Mexicana (LSM) dentro de la historia, siendo totalmente accesible para niñas y niños con y sin discapacidad auditiva.',
    reconocimientos: '',
    imagenUrl: '/assets/obra-yetivi.jpg',
    imagenAlt: 'Elenco caracterizado de Yeti y criaturas de montaña en la obra Yetiví, la historia jamás contada del Yeti — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: true,
    orden: 1,
    gradiente: 'grad-1',
    metaDescripcion: 'Yetiví, la historia jamás contada del Yeti: obra de teatro inclusiva con títeres y Lengua de Señas Mexicana, de Colectivo Pies Hinchados, para escuelas y festivales en Guadalajara y Jalisco.',
  },
  {
    slug: 'roto',
    titulo: 'Roto, un juego sobre el cuerpo que resiste',
    subtitulo: 'Teatro inclusivo para niñas y niños — Próximo estreno',
    publico: 'Niñas y niños, de 3 a 10 años',
    duracion: '50 minutos',
    formato: 'Teatro físico e inclusivo, con elenco de actores con y sin discapacidad',
    sinopsisHtml: `
      <p>ROTO, un juego sobre el cuerpo que resiste, es una producción de teatro
      interdisciplinario dirigida a las infancias que utiliza el lenguaje del clown, el teatro
      físico y la música en vivo para explorar la resiliencia y la identidad desde la
      diversidad funcional.</p>
      <p>La puesta en escena se sitúa en una antigua juguetería tradicional mexicana donde los
      personajes —representados como juguetes con distintas "fallas" técnicas o físicas— deben
      encontrar nuevas formas de juego y convivencia. A través de una narrativa que integra de
      manera orgánica la Lengua de Señas Mexicana (LSM) y dispositivos escénicos accesibles, la
      obra propone una metáfora sobre cómo la fragilidad y la ruptura no son el final, sino una
      potencia creativa para la transformación social.</p>
      <p>Dirigida por Gabriela Pescador. Con el apoyo de Proyecta Producción, de la Secretaría
      de Cultura Jalisco. Próximo estreno.</p>
    `,
    accesibilidad: 'Integra de manera orgánica la Lengua de Señas Mexicana (LSM) y dispositivos escénicos accesibles, con elenco de actores con y sin discapacidad.',
    reconocimientos: '',
    imagenUrl: '/assets/obra-roto.jpg',
    imagenAlt: 'Cartel oficial de Roto, un juego sobre el cuerpo que resiste — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: true,
    orden: 2,
    gradiente: 'grad-2',
    metaDescripcion: 'Roto, un juego sobre el cuerpo que resiste: obra de teatro inclusivo de Colectivo Pies Hinchados, compañía con base en Guadalajara, para escuelas y festivales. Con apoyo de la Secretaría de Cultura Jalisco. Próximo estreno.',
  },
  {
    slug: 'tina-y-tomas',
    titulo: 'Tina y Tomás',
    subtitulo: 'Teatro para niñas y niños',
    publico: 'Niñas y niños, de 4 a 12 años',
    duracion: '50 minutos',
    formato: 'Clown, títeres y pantomima',
    sinopsisHtml: `<p>Tina y Tomás no pueden estar juntos sin pelear: nada de compartir, nada de
      ceder... ¡siempre es una competencia! ¿Quién gana: los niños o las niñas?, ¿la fuerza o la
      astucia?, ¿el caos o el ingenio?</p>
      <p>Pero cuando aparece Max con su pizarra y un gis mágico, la rivalidad se transforma en un
      desafío inesperado. A través del juego y la imaginación, estos hermanos descubrirán que hay
      algo más importante que ganar: el poder del trabajo en equipo, la amistad y el amor
      fraternal. Un espectáculo que invita a transformar cualquier espacio urbano en un patio de
      juegos, donde el público también es parte del reto.</p>
      <p>Aborda de forma lúdica y positiva la resolución de conflictos entre hermanos, la
      colaboración y el poder de la imaginación para transformar cualquier espacio en un mundo de
      juego.</p>`,
    accesibilidad: '',
    reconocimientos: '',
    imagenUrl: '/assets/obra-tina-y-tomas.jpg',
    imagenAlt: 'Elenco caracterizado de clown junto a la marioneta principal en la obra Tina y Tomás — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: true,
    orden: 3,
    gradiente: 'grad-3',
    metaDescripcion: 'Tina y Tomás: obra de teatro infantil de clown, títeres y pantomima de Colectivo Pies Hinchados, con funciones en Guadalajara en noviembre de 2026 gracias a Habita la Escena.',
  },
  {
    slug: 'que-dificil-ser-un-monstruo',
    titulo: '¡Qué difícil ser un monstruo! Manual para pequeños miedosos',
    subtitulo: '',
    publico: 'Niñas y niños, de 3 a 10 años',
    duracion: '50 minutos',
    formato: 'Clown, títeres y máscara',
    sinopsisHtml: `<p>¿Cuando apagas la luz de tu habitación, se oyen ruidos extraños debajo de tu
      cama? Esto ocurre en la recámara de Timmy cuando todo está oscuro. Las cosas se mueven como
      si cobraran vida y criaturas extrañas bailan al ritmo de la lluvia iluminadas por relámpagos
      en medio de la noche.</p>
      <p>Valentina, la hermana mayor de Timmy, quiere encontrar la solución a sus temores para que
      pueda dormir tranquilo. Es por ello que realizan un viaje a la Feria de los Monstruos, un
      lugar lleno de magia, fantasía y personajes que les darán la respuesta acerca del origen de
      los miedos y cómo combatirlos. A través del juego lúdico, descubriremos que todos tenemos
      miedos, pero solo nosotros podemos vencerlos.</p>`,
    accesibilidad: '',
    reconocimientos: '',
    imagenUrl: '/assets/obra-que-dificil-ser-un-monstruo.jpg',
    imagenAlt: 'Actriz de clown con un títere de manopla en la obra ¡Qué difícil ser un monstruo! Manual para pequeños miedosos — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 4,
    gradiente: 'grad-1',
    metaDescripcion: '¡Qué difícil ser un monstruo! Manual para pequeños miedosos: obra de teatro sobre los miedos infantiles de Colectivo Pies Hinchados, para escuelas y festivales en Guadalajara.',
  },
  {
    slug: 'armadillos',
    titulo: 'Armadillos, un viaje hacia el otro lado',
    subtitulo: '',
    publico: 'Adolescentes y adultos',
    duracion: '55 minutos',
    formato: 'Teatro de máscaras, títeres, objetos y clown',
    sinopsisHtml: `<p>Esta puesta en escena retrata con sensibilidad la compleja realidad
      migratoria en México, inspirándose en la labor de "Los Armadillos", un grupo dedicado a la
      búsqueda de personas desaparecidas en el desierto de Arizona. La obra rinde un homenaje a su
      valentía y compromiso con la dignidad humana en medio de la adversidad.</p>
      <p>La historia sigue a una familia de armadillos que emprende un viaje profundo en busca del
      dueño de un zapato perdido. En su travesía por el desierto, deben enfrentar la sed, el
      cansancio y la cruda realidad de la migración, encontrándose con personajes simbólicos como
      un coyote que acecha, un buitre que los guía y una víbora hambrienta. A través de un enfoque
      de humor negro, la obra invita al público a reflexionar sobre una de las mayores crisis
      humanitarias de nuestro tiempo.</p>`,
    accesibilidad: 'Obra incluyente que combina el humor negro con la incorporación de la Lengua de Señas Mexicana (LSM).',
    reconocimientos: '',
    imagenUrl: '/assets/obra-armadillos.jpg',
    imagenAlt: 'Elenco con máscaras de encaje y vestuario textil en la obra Armadillos, un viaje hacia el otro lado — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 5,
    gradiente: 'grad-2',
    metaDescripcion: 'Armadillos, un viaje hacia el otro lado: obra de teatro sobre migración y resistencia de Colectivo Pies Hinchados (Guadalajara), con clown y teatro de objetos, para escuelas y festivales de todo México.',
  },
  {
    slug: 'legatus-y-dimittas',
    titulo: 'Legatus y Dimittas',
    subtitulo: '',
    publico: 'Niñas y niños, de 4 a 12 años',
    duracion: '50 minutos',
    formato: 'Clown, teatro físico y animación de objetos',
    sinopsisHtml: `<p>¿Qué sucede cuando el telón cae por última vez sobre una tradición familiar?
      Legatus y Dimittas nos sumerge en el universo de la última generación de una dinastía de
      payasos. Entre baúles polvorientos, maletas cargadas de recuerdos y narices rojas que
      parecen haber perdido su brillo, dos personajes enfrentan el inevitable ocaso de su era.</p>
      <p>A través de un lenguaje físico cargado de ternura y humor melancólico, la obra explora el
      peso de la herencia y la expectativa social desde una mirada que cautiva tanto a los más
      pequeños como a los adultos. Es un viaje emocional que cuestiona si debemos seguir cargando
      con el legado de quienes estuvieron antes o si es momento de "dimitir" para encontrar
      nuestra propia voz. Un homenaje al arte del payaso que nos enseña que soltar no es olvidar,
      sino una forma valiente de honrar la propia identidad.</p>`,
    accesibilidad: 'Narrativa visual de alto impacto que trasciende la barrera del lenguaje, apoyada en la gestualidad y la música.',
    reconocimientos: '',
    imagenUrl: '/assets/obra-legatus-y-dimittas.jpg',
    imagenAlt: 'Personaje de payaso de circo montado en caballito de juguete en la obra Legatus y Dimittas — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 6,
    gradiente: 'grad-3',
    metaDescripcion: 'Legatus y Dimittas: obra de teatro poético con máscaras de Colectivo Pies Hinchados (Guadalajara) sobre la herencia y el arte de dejar ir, para festivales culturales.',
  },
  {
    slug: 'raro',
    titulo: 'Raro: Una mirada desde lo invisible',
    subtitulo: 'Obra galardonada',
    publico: 'Adolescentes y adultos',
    duracion: '50 minutos',
    formato: 'Teatro multidisciplinario con Lengua de Señas Mexicana (LSM)',
    sinopsisHtml: `<p>"Ser diferente, Extraño, Anormal". ¿Quién soy?, ¿Cómo me veo?, ¿Cómo me ven?,
      ¿Así nací?, ¿identidad?, ¿discapacidad?, mi cuerpo desnudo, mi cuerpo en piezas, pedazos que
      quito y transformo para ser eso que todos quieren que sea, la diferencia de mi cuerpo. ¿Por
      qué no me veo como los otros?, estereotipos inalcanzables, lucho por encajar, busco
      repararme, dejar de ser lo que mis padres quieren que sea y la sociedad me dicta.</p>
      <p>Es un espectáculo multidisciplinario donde cinco criaturas muestran sus etiquetas, miedos
      y pasiones; un grito de protesta sobre el cuerpo, sobre lo que se es y sobre la búsqueda de
      liberar los cuerpos.</p>`,
    accesibilidad: 'Lengua de Señas Mexicana (LSM).',
    reconocimientos: 'Seleccionada para la Muestra Estatal y Nacional de Teatro 2023.',
    imagenUrl: '/assets/obra-raro.jpg',
    imagenAlt: 'Elenco caracterizado con máscaras texturizadas en la obra Raro: Una mirada desde lo invisible, obra galardonada de Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 7,
    gradiente: 'grad-1',
    metaDescripcion: 'Raro: Una mirada desde lo invisible — obra de teatro galardonada de Colectivo Pies Hinchados en Guadalajara, con Lengua de Señas Mexicana, sobre diversidad e inclusión.',
  },
  {
    slug: 'no-oigo-nada',
    titulo: 'No oigo nada soy de palo tengo orejas de pescado',
    subtitulo: '',
    publico: 'Niñas, niños y adolescentes, de 3 a 12 años',
    duracion: '55 minutos',
    formato: 'Clown, animación de objetos, danza y Lengua de Señas Mexicana (LSM)',
    sinopsisHtml: `<p>En un fondo marino casi apocalíptico, afectado por la acumulación de basura,
      plástico y contaminación, vive un grupo de criaturas submarinas solitarias que no logran
      encajar en ningún lugar. Estos extraños seres, que comparten morfología con animales
      acuáticos como caballitos de mar, cangrejos y tortugas, están recreados con materiales de
      desecho como bolsas, popotes y bidones.</p>
      <p>Entre ellos se encuentra un ser único que no escucha nada y cuyas orejas son de pescado,
      lo que genera una barrera de comunicación con los demás. La historia sigue la travesía de
      estas cinco hambrientas criaturas que, a través del juego y la aventura, buscan la manera de
      comunicarse y formar una familia que se entienda a pesar de los obstáculos, revelando que la
      empatía es la herramienta más poderosa para la inclusión.</p>`,
    accesibilidad: 'Obra incluyente diseñada para personas con y sin discapacidad auditiva, utilizando la LSM como hilo conductor de la historia.',
    reconocimientos: '',
    imagenUrl: '/assets/obra-no-oigo-nada.jpg',
    imagenAlt: 'Dos personajes caracterizados frente a frente en un momento de comunicación gestual en la obra No oigo nada soy de palo tengo orejas de pescado — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 8,
    gradiente: 'grad-2',
    metaDescripcion: 'No oigo nada soy de palo tengo orejas de pescado: obra de teatro infantil inclusivo sobre comunicación no verbal de Colectivo Pies Hinchados en Guadalajara, para escuelas.',
  },
  {
    slug: 'rompamos-la-burbuja',
    titulo: 'Rompamos la burbuja, una obra de teatro sin etiquetas',
    subtitulo: '',
    publico: 'Niños, de 4 a 10 años',
    duracion: '50 minutos',
    formato: 'Títeres, objetos, máscaras y Lengua de Señas Mexicana (LSM)',
    sinopsisHtml: `<p>Matías es un niño que vive dentro de su propia burbuja: un "cuarto de
      tiliches" lleno de objetos olvidados. Para él, este lugar es un refugio seguro donde el
      ruido y el caos del exterior no pueden lastimarlo. Sin embargo, Matías no está solo; lo
      acompaña su fiel amiga Pijama, quien lo motiva a salir y compartir sus mundos internos.</p>
      <p>A través de un carrito transformable que guarda historias sorprendentes, Matías nos
      presenta a cinco personajes extraordinarios: una superheroína en silla de ruedas, una
      familia de talla pequeña, un niño sordo y un anciano con síndrome de Down. A través de la
      aventura y el juego, Matías descubrirá que no necesita protegerse del mundo, sino
      simplemente encontrar a alguien que quiera romper la burbuja con él para celebrar la
      diversidad.</p>`,
    accesibilidad: 'Espectáculo incluyente diseñado para ser disfrutado por personas con y sin discapacidad.',
    reconocimientos: '',
    imagenUrl: '/assets/obra-rompamos-la-burbuja.jpg',
    imagenAlt: 'Manos manipulando un títere de objetos recuperados en la obra Rompamos la burbuja, una obra de teatro sin etiquetas — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 9,
    gradiente: 'grad-3',
    metaDescripcion: 'Rompamos la burbuja: obra de teatro sin etiquetas de Colectivo Pies Hinchados en Guadalajara, con objetos y títeres, sobre diversidad e inclusión, para escuelas y festivales.',
  },
  {
    slug: 'la-luz-que-causa-una-bala',
    titulo: 'La luz que causa una bala',
    subtitulo: '',
    publico: 'Adolescentes y adultos',
    duracion: '55 minutos',
    formato: 'Teatro físico con texto de Saúl Enríquez',
    sinopsisHtml: `<p>En una región azotada por la violencia, la trama narra la vida de un par de
      hermanos que se mudan a una ciudad donde las balaceras son parte del paisaje diario. En este
      contexto hostil, cuatro adolescentes que se quieren, odian, enamoran y burlan de sí mismos,
      intentan sobrevivir y establecer vínculos, demostrando que un amigo siempre será necesario
      para enfrentar la realidad.</p>
      <p>A través de un lenguaje que combina la potencia del texto de Saúl Enríquez con un fuerte
      entrenamiento corporal, la obra muestra cómo la amistad se convierte en un acto de
      resistencia: no importa qué tan buenos sean, toda bala busca quebrar un cuerpo, pero el
      afecto compartido permite afrontar los temas más crudos de nuestro país.</p>`,
    accesibilidad: 'Obra incluyente que cuenta con la participación de actores sordos e integra la Lengua de Señas Mexicana (LSM) en escena.',
    reconocimientos: 'Ganadora de la convocatoria Jalisco a Escena 2017 y seleccionada como mejor obra de la Muestra Estatal de Teatro Jalisco 2018, representando al estado en la Muestra Regional de Teatro.',
    imagenUrl: '/assets/obra-la-luz-que-causa-una-bala.jpg',
    imagenAlt: 'Elenco en un ejercicio de teatro físico sobre estructuras metálicas en la obra La luz que causa una bala — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 10,
    gradiente: 'grad-1',
    metaDescripcion: 'La luz que causa una bala: pieza de teatro físico de Colectivo Pies Hinchados en Guadalajara sobre memoria y resiliencia frente a la violencia, para festivales culturales.',
  },
  {
    slug: 'evasaurio',
    titulo: 'Evasaurio, todos tenemos cola que nos pisen',
    subtitulo: '',
    publico: 'Niñas y niños, de 4 a 10 años',
    duracion: '50 minutos',
    formato: 'Animación de objetos, teatro físico y Lengua de Señas Mexicana (LSM)',
    sinopsisHtml: `<p>Eva es una niña con una imaginación desbordante y una característica muy
      especial: ¡una cola de dinosaurio! En un mundo que a veces no entiende las diferencias, Eva
      prefiere explorar la realidad con la curiosidad de un gigante de la prehistoria.</p>
      <p>Esta pieza es una adaptación teatral del aclamado libro de Memo Plastilina, llevada a
      escena por el Colectivo Pies Hinchados a través de la animación de objetos y el teatro
      físico. La obra se presenta como una experiencia bilingüe, integrada totalmente en Lengua de
      Señas Mexicana (LSM), permitiendo que tanto el público sordo como el oyente se sumerjan en
      un viaje de autoexploración. Eva nos enseña que aquello que nos hace "extraños" es, en
      realidad, el motor de nuestra propia identidad y valentía. Una obra que celebra el derecho
      de las infancias a ser auténticas y a portar su propia "cola" con orgullo.</p>`,
    accesibilidad: 'Obra incluyente diseñada para personas con y sin discapacidad auditiva, integrando la Lengua de Señas Mexicana (LSM) de forma orgánica en la puesta en escena.',
    reconocimientos: '',
    imagenUrl: '/assets/obra-evasaurio.jpg',
    imagenAlt: 'Elenco caracterizado en pleno salto sobre fondo verde en la obra Evasaurio, todos tenemos cola que nos pisen — Colectivo Pies Hinchados',
    dosierUrl: '',
    destacada: false,
    orden: 11,
    gradiente: 'grad-2',
    metaDescripcion: 'Evasaurio, todos tenemos cola que nos pisen: obra de teatro infantil en Lengua de Señas Mexicana de Colectivo Pies Hinchados en Guadalajara sobre identidad y diversidad, para preescolar.',
  },
];
