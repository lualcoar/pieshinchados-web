#!/usr/bin/env node
// ==================================================================
// Generador estático del sitio de Colectivo Pies Hinchados.
// Sin dependencias externas: solo usa el propio Node.js.
// Uso:  node build.mjs
// Salida: carpeta dist/ — eso es lo que subes a Netlify/Cloudflare Pages.
// ==================================================================
import { mkdirSync, writeFileSync, copyFileSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { repertorio } from './content/repertorio.mjs';
import { funciones } from './content/funciones.mjs';
import { blog } from './content/blog.mjs';
import { layout, SITE_URL, fechaLarga, iconMascara, iconBoleto, iconDestello, heroFootlights, heroCurtain, heroMaskWatermark } from './lib/templates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, 'dist');

// ---------- utilidades ----------
function write(relPath, html) {
  const full = join(DIST, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html, 'utf8');
}

function obraPorSlug(slug) {
  const obra = repertorio.find((o) => o.slug === slug);
  if (!obra) throw new Error(`funciones.mjs referencia una obra que no existe en repertorio.mjs: "${slug}"`);
  return obra;
}

const hoy = new Date().toISOString().slice(0, 10);
const funcionesOrdenadas = [...funciones].sort((a, b) => a.fechaInicio.localeCompare(b.fechaInicio));
const proximas = funcionesOrdenadas.filter((f) => f.fechaInicio >= hoy);
const pasadas = [...funcionesOrdenadas].filter((f) => f.fechaInicio < hoy).reverse();

function eventJsonLd(f) {
  const obra = obraPorSlug(f.obraSlug);
  const json = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: obra.titulo,
    startDate: f.fechaInicio,
    location: {
      '@type': 'Place',
      name: f.lugar,
      address: { '@type': 'PostalAddress', addressLocality: f.ciudad, addressRegion: f.estado, addressCountry: 'MX' },
    },
    performer: { '@type': 'PerformingGroup', name: 'Colectivo Pies Hinchados' },
  };
  if (f.fechaFin) json.endDate = f.fechaFin;
  if (f.boletosUrl) json.offers = { '@type': 'Offer', url: f.boletosUrl, availability: 'https://schema.org/InStock' };
  else if (f.gratuita) json.isAccessibleForFree = true;
  return json;
}

function mediaObra(obra) {
  if (obra.imagenUrl) {
    return `<div class="card-media has-photo" style="background-image:url('${obra.imagenUrl}')" role="img" aria-label="${obra.imagenAlt}"><span>${obra.titulo}</span></div>`;
  }
  return `<div class="card-media ${obra.gradiente}">${obra.titulo}</div>`;
}

function tarjetaObra(obra) {
  return `
  <a class="card" href="/repertorio/${obra.slug}/">
    ${mediaObra(obra)}
    <div class="card-body">
      <h3>${obra.titulo}</h3>
      <p>${obra.publico}</p>
      <div class="tag-row">
        <span class="tag tag-coral">${obra.formato}</span>
      </div>
    </div>
  </a>`;
}

function tarjetaFuncion(f) {
  const obra = obraPorSlug(f.obraSlug);
  return `
  <a class="card" href="/temporadas/${f.slug}/">
    <div class="card-body">
      <h3>${obra.titulo}</h3>
      <p>${fechaLarga(f.fechaInicio)} · ${f.lugar}</p>
      <div class="tag-row">
        <span class="tag tag-coral">${f.ciudad}, ${f.estado}</span>
        ${f.gratuita ? '<span class="tag tag-teal">Entrada libre</span>' : ''}
      </div>
    </div>
  </a>`;
}

// ================= INICIO =================
function paginaInicio() {
  const destacadas = [...repertorio].sort((a, b) => a.orden - b.orden).slice(0, 3);
  const body = `
  <section class="hero">
    <div class="wrap">
      <p class="eyebrow">Colectivo de teatro · Zapopan, Jalisco · Servicio a toda la República Mexicana</p>
      <h1>Teatro de Impacto Social para Niñas, Niños y Jóvenes</h1>
      <p class="lede">¿Buscas una experiencia cultural inolvidable para tu institución? En Colectivo Pies Hinchados somos especialistas en crear universos escénicos que combinan el juego, la inclusión y la reflexión. Con más de 9 años de trayectoria, llevamos la magia del teatro profesional directamente a tu escuela, centro cultural o festival.</p>
      <p class="lede" style="margin-top:1rem;">Nuestras obras están diseñadas específicamente para audiencias jóvenes, abordando temas fundamentales como la empatía, la neurodivergencia y el manejo de emociones a través de técnicas como el clown, los títeres, la máscara y la Lengua de Señas Mexicana (LSM).</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/repertorio/">Ver repertorio de obras</a>
        <a class="btn btn-outline" href="/escuelas-festivales-municipios/">Quiero contratar una función</a>
      </div>
    </div>
    ${heroMaskWatermark()}
    ${heroCurtain()}
  </section>

  <section class="tinted">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">${iconMascara()}<span>Repertorio activo</span></p>
        <h2>Obras listas para presentarse</h2>
        <p>Contamos con un repertorio versátil que se adapta a diversos espacios, desde grandes teatros hasta patios escolares. Variedad de temáticas: inclusión, migración, diversidad, valores. Formatos flexibles para preescolar, primaria, secundaria y público familiar.</p>
      </div>
      <div class="grid grid-3">${destacadas.map(tarjetaObra).join('')}</div>
      <p style="margin-top:2rem;"><a href="/repertorio/" class="btn btn-outline">Ver las ${repertorio.length} obras del repertorio →</a></p>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Para quién trabajamos</p>
        <h2>Llevamos teatro a donde las infancias están</h2>
      </div>
      <div class="grid grid-3">
        <div><span class="icon" style="display:inline-flex;width:2.2rem;height:2.2rem;border-radius:50%;background:var(--coral-soft);color:var(--coral-ink);align-items:center;justify-content:center;font-weight:700;font-family:'Lato';margin-bottom:0.6rem;">1</span><h3 style="font-size:1.1rem;margin-bottom:0.3rem;">Escuelas</h3><p style="color:var(--ink-soft);font-size:0.92rem;">Funciones dentro de la jornada escolar, adaptadas al espacio y la edad de tu alumnado.</p></div>
        <div><span class="icon" style="display:inline-flex;width:2.2rem;height:2.2rem;border-radius:50%;background:var(--coral-soft);color:var(--coral-ink);align-items:center;justify-content:center;font-weight:700;font-family:'Lato';margin-bottom:0.6rem;">2</span><h3 style="font-size:1.1rem;margin-bottom:0.3rem;">Festivales culturales</h3><p style="color:var(--ink-soft);font-size:0.92rem;">Programación para festivales infantiles y familiares, con formatos de calle o de sala.</p></div>
        <div><span class="icon" style="display:inline-flex;width:2.2rem;height:2.2rem;border-radius:50%;background:var(--coral-soft);color:var(--coral-ink);align-items:center;justify-content:center;font-weight:700;font-family:'Lato';margin-bottom:0.6rem;">3</span><h3 style="font-size:1.1rem;margin-bottom:0.3rem;">Municipios</h3><p style="color:var(--ink-soft);font-size:0.92rem;">Temporadas y giras para casas de cultura, DIF municipales y programas culturales.</p></div>
      </div>
      <p style="margin-top:2rem;"><a href="/escuelas-festivales-municipios/" class="btn btn-outline">Ver cómo contratarnos →</a></p>
    </div>
  </section>

  <section class="tinted">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Respaldo</p>
        <h2>Convocatorias e instituciones con las que hemos trabajado</h2>
        <p>Dos selecciones a la Muestra Nacional de Teatro, el encuentro más importante del país.</p>
      </div>
      <div class="tag-row" style="gap:0.6rem;">
        <span class="tag tag-teal">INBAL</span>
        <span class="tag tag-teal">Secretaría de Cultura Jalisco</span>
        <span class="tag tag-teal">Habita la Escena</span>
        <span class="tag tag-teal">Cultura Guadalajara</span>
        <span class="tag tag-teal">DIF Guadalajara</span>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap" style="text-align:center;">
      <h2 style="font-size:clamp(1.6rem,3.6vw,2.3rem); max-width:30ch; margin:0 auto;">¿Listos para llevar una obra a tu espacio?</h2>
      <p style="color:var(--ink-soft); max-width:34rem; margin:0.8rem auto 1.6rem;">Cuéntanos qué buscas y te respondemos con opciones de repertorio y disponibilidad.</p>
      <a class="btn btn-primary" href="/contacto/">Pedir cotización</a>
    </div>
  </section>`;

  write('index.html', layout({
    path: '/',
    title: 'Teatro para escuelas, festivales culturales y municipios en Guadalajara y todo México',
    description: 'Colectivo Pies Hinchados: teatro de impacto social para niñas, niños y jóvenes, con base en Zapopan, Jalisco y servicio a toda la República Mexicana. Contrata funciones para tu escuela, festival cultural o municipio.',
    bodyHtml: body,
  }));
}

// ================= EL COLECTIVO =================
function paginaColectivo() {
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap">
      <p class="eyebrow">Desde 2017 · Zapopan, Jalisco</p>
      <h1>Colectivo Pies Hinchados: Creación, Inclusión y Movimiento</h1>
      <p class="lede">Fundado en 2017 por Gabriela Pescador y Luis Córdova, el Colectivo Pies Hinchados nace como un laboratorio de creación multidisciplinar en Jalisco. Lo que comenzó como un sueño de llevar el teatro a lugares donde el silencio y la exclusión predominaban, se ha consolidado hoy como una de las compañías más sólidas en el panorama nacional de las artes escénicas para niñas, niños y jóvenes audiencias.</p>
    </div>
    ${heroFootlights()}
  </section>

  <section style="padding-top:0;">
    <div class="wrap grid grid-2" style="align-items:center;">
      <img src="/assets/equipo.jpg" alt="Gabriela Pescador y Luis Córdova, fundadores del Colectivo Pies Hinchados" style="width:100%; border-radius:var(--radius-md); box-shadow:var(--shadow-md);" loading="lazy" />
      <div class="prose">
        <h2 style="font-size:1.25rem; margin-bottom:0.8rem;">Nuestra Historia y Liderazgo</h2>
        <p>El corazón del colectivo late gracias a la mancuerna creativa de sus fundadores:</p>
        <p><strong>Gabriela Pescador:</strong> Directora escénica y creativa, cuya visión estética ha dotado al colectivo de un lenguaje visual y gestual único.</p>
        <p><strong>Luis Córdova:</strong> Creador integral que se desempeña como actor, director y productor ejecutivo, garantizando que cada pieza tenga tanto rigor artístico como una gestión profesional que nos permite llegar a cualquier rincón del país.</p>
      </div>
    </div>
  </section>

  <section class="tinted">
    <div class="wrap">
      <div class="section-head"><p class="eyebrow">Trayectoria de excelencia</p><h2>No solo hacemos teatro; construimos puentes</h2></div>
      <p class="prose" style="color:var(--ink-soft); margin-bottom:1.5rem;">Nuestra calidad artística nos ha llevado a ser seleccionados en dos ocasiones para la Muestra Nacional de Teatro (MNT), el evento más importante del país, destacando por propuestas que rompen la barrera de lo convencional e integran lenguajes como la Lengua de Señas Mexicana (LSM), el clown, la pantomima y el teatro de objetos.</p>
      <h3 style="font-size:1.05rem; margin-bottom:0.8rem;">¿Qué nos define?</h3>
      <p class="prose" style="color:var(--ink-soft); margin-bottom:1.2rem;">Entendemos el teatro como una herramienta de transformación social. Por ello, nuestras creaciones no son solo espectáculos; son experiencias diseñadas para:</p>
      <div class="feature-row"><span class="icon">✓</span><div><h3>La Inclusión Real</h3><p>Integramos la accesibilidad desde el proceso creativo, no como un añadido.</p></div></div>
      <div class="feature-row"><span class="icon">✓</span><div><h3>La Formación de Públicos</h3><p>Especialistas en capturar la atención de las nuevas generaciones con temas urgentes: neurodivergencias, migración, identidad y resiliencia.</p></div></div>
      <div class="feature-row"><span class="icon">✓</span><div><h3>Versatilidad Profesional</h3><p>Gracias a la dirección y producción de Luis y Gaby, nuestras obras cuentan con una logística impecable, listas para presentarse en festivales internacionales, teatros de gran formato o espacios escolares.</p></div></div>
    </div>
  </section>

  <section>
    <div class="wrap grid grid-2">
      <div class="card" style="padding:1.8rem;">
        <h2 style="font-size:1.3rem; margin-bottom:0.6rem;">Misión</h2>
        <p style="color:var(--ink-soft); font-size:0.95rem;">Desarrollar proyectos culturales y artísticos multidisciplinarios de alta calidad que utilicen la risa, el gesto y la inclusión como herramientas poderosas para transformar la realidad social. A través de lenguajes universales como el clown, la pantomima, las máscaras, el teatro de objetos y los títeres, buscamos crear espectáculos incluyentes que garanticen el acceso a la cultura para todas y todos, otorgando visibilidad a las personas con discapacidad y fomentando la empatía en las jóvenes audiencias.</p>
      </div>
      <div class="card" style="padding:1.8rem;">
        <h2 style="font-size:1.3rem; margin-bottom:0.6rem;">Visión</h2>
        <p style="color:var(--ink-soft); font-size:0.95rem;">Consolidarnos como el referente nacional e internacional del teatro incluyente y multidisciplinario en el occidente de México, destacando por una excelencia artística respaldada por hitos como nuestra participación en la Muestra Nacional de Teatro (2023 y 2025). Aspiramos a profesionalizar continuamente la representación de la diversidad en el escenario, expandiendo nuestro repertorio a festivales, escuelas y centros culturales de todo el país, y demostrando que el arte es un espacio sin etiquetas donde cualquier discapacidad deja de ser una limitante para cumplir los sueños.</p>
      </div>
    </div>
  </section>

  <section class="tinted">
    <div class="wrap">
      <div class="section-head"><p class="eyebrow">Respaldo</p><h2>Convocatorias e instituciones con las que hemos trabajado</h2></div>
      <div class="feature-row"><span class="icon">✓</span><div><h3>Apoyo de convocatorias públicas</h3><p>Hemos trabajado con INBAL, la Secretaría de Cultura Jalisco, Habita la Escena y Cultura Guadalajara.</p></div></div>
    </div>
  </section>

  <section style="text-align:center;">
    <div class="wrap">
      <h2 style="font-size:1.7rem;">Conoce el repertorio que puedes contratar</h2>
      <p style="margin-top:1rem;"><a class="btn btn-primary" href="/repertorio/">Ver obras</a></p>
    </div>
  </section>`;

  write('el-colectivo/index.html', layout({
    path: '/el-colectivo/',
    title: 'El colectivo: quiénes somos',
    description: 'Colectivo Pies Hinchados (Pies Hinchados Teatro SC): fundado en 2017 por Gabriela Pescador y Luis Córdova en Zapopan, Jalisco. Dos selecciones a la Muestra Nacional de Teatro.',
    bodyHtml: body,
  }));
}

// ================= REPERTORIO =================
function paginaRepertorioIndex() {
  const obras = [...repertorio].sort((a, b) => a.orden - b.orden);
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap">
      <p class="eyebrow">${iconMascara()}<span>Repertorio</span></p>
      <h1>Obras listas para presentarse</h1>
      <p class="lede">Nuestras producciones no se retiran después del estreno: siguen en repertorio y disponibles para contratar.</p>
    </div>
    ${heroFootlights()}
  </section>
  <section style="padding-top:0;">
    <div class="wrap"><div class="grid grid-3">${obras.map(tarjetaObra).join('')}</div></div>
  </section>`;

  write('repertorio/index.html', layout({
    path: '/repertorio/',
    title: 'Repertorio de obras de teatro para contratar',
    description: 'Repertorio activo de Colectivo Pies Hinchados: obras de teatro para niñas, niños y jóvenes, listas para contratar en escuelas, festivales culturales y municipios de México.',
    bodyHtml: body,
  }));
}

function paginaObra(obra) {
  const funcionesDeObra = proximas.filter((f) => f.obraSlug === obra.slug);
  const jsonLd = funcionesDeObra.map(eventJsonLd);
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap">
      <p class="eyebrow">${iconMascara()}<span>Repertorio</span></p>
      <h1>${obra.titulo}</h1>
      ${obra.subtitulo ? `<p class="lede">${obra.subtitulo}</p>` : ''}
      <div class="tag-row" style="margin-top:1.2rem;">
        <span class="tag tag-coral">${obra.publico}</span>
        <span class="tag tag-amber">${obra.duracion}</span>
        <span class="tag tag-teal">${obra.formato}</span>
      </div>
      <div class="cta-row">
        <a class="btn btn-primary" href="/contacto/">Cotizar esta obra</a>
        ${obra.dosierUrl ? `<a class="btn btn-outline" href="${obra.dosierUrl}">Descargar dosier</a>` : ''}
      </div>
    </div>
    ${heroFootlights()}
  </section>

  ${obra.imagenUrl ? `
  <section style="padding-top:0;">
    <div class="wrap">
      <img src="${obra.imagenUrl}" alt="${obra.imagenAlt}" style="display:block; width:100%; max-width:30rem; aspect-ratio:1/1; object-fit:contain; margin:0 auto; border-radius:var(--radius-md); box-shadow:var(--shadow-md); background:var(--coral-soft);" loading="lazy" />
    </div>
  </section>` : ''}

  <section class="tinted">
    <div class="wrap prose">
      <h2 style="font-size:1.3rem; margin-bottom:0.8rem;">Sinopsis</h2>
      ${obra.sinopsisHtml}
      ${obra.accesibilidad ? `<p style="margin-top:1.2rem;"><strong>Accesibilidad:</strong> ${obra.accesibilidad}</p>` : ''}
      ${obra.reconocimientos ? `<p style="margin-top:0.6rem;"><strong>Reconocimientos:</strong> ${obra.reconocimientos}</p>` : ''}
    </div>
  </section>

  ${funcionesDeObra.length > 0 ? `
  <section>
    <div class="wrap">
      <div class="section-head"><p class="eyebrow">${iconBoleto()}<span>Agenda</span></p><h2>Próximas funciones de esta obra</h2></div>
      <div class="grid grid-2">${funcionesDeObra.map(tarjetaFuncion).join('')}</div>
    </div>
  </section>` : ''}`;

  write(`repertorio/${obra.slug}/index.html`, layout({
    path: `/repertorio/${obra.slug}/`,
    title: obra.titulo,
    description: obra.metaDescripcion,
    bodyHtml: body,
    jsonLd,
  }));
}

// ================= ESCUELAS / FESTIVALES / MUNICIPIOS =================
function paginaInstituciones() {
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap">
      <p class="eyebrow">Para instituciones</p>
      <h1>Todo lo que necesitas saber para contratarnos</h1>
      <p class="lede">Con base en Zapopan, Jalisco, contamos con servicio a toda la República Mexicana: escuelas, festivales culturales y municipios de Guadalajara, otros estados y todo el país. Esto es lo que suele preguntarnos quien organiza la contratación.</p>
    </div>
    ${heroFootlights()}
  </section>

  <section class="tinted">
    <div class="wrap grid grid-3">
      <div class="card" style="padding:1.6rem;"><h3 style="font-size:1.05rem;margin-bottom:0.5rem;">Escuelas</h3><p style="color:var(--ink-soft);font-size:0.92rem;">Funciones dentro del horario escolar, adaptadas a preescolar, primaria o secundaria. Podemos presentarnos en patio, auditorio o salón, según el espacio disponible.</p></div>
      <div class="card" style="padding:1.6rem;"><h3 style="font-size:1.05rem;margin-bottom:0.5rem;">Festivales culturales</h3><p style="color:var(--ink-soft);font-size:0.92rem;">Programación para festivales infantiles y familiares, en formato de calle o de sala, con ficha técnica y rider disponibles para tu equipo de producción.</p></div>
      <div class="card" style="padding:1.6rem;"><h3 style="font-size:1.05rem;margin-bottom:0.5rem;">Municipios</h3><p style="color:var(--ink-soft);font-size:0.92rem;">Temporadas, giras y funciones para casas de cultura, DIF municipales y programas de desarrollo social o cultural.</p></div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head"><p class="eyebrow">Proceso</p><h2>Cómo cotizar una función</h2></div>
      <div class="feature-row"><span class="icon">1</span><div><h3>Cuéntanos qué necesitas</h3><p>Fecha tentativa, público (edad y número aproximado de asistentes) y tipo de espacio disponible.</p></div></div>
      <div class="feature-row"><span class="icon">2</span><div><h3>Te proponemos una obra del repertorio</h3><p>Según duración, formato y requisitos técnicos que mejor se ajusten a tu evento.</p></div></div>
      <div class="feature-row"><span class="icon">3</span><div><h3>Te enviamos cotización y dosier</h3><p>Con ficha técnica completa, para que tu equipo de producción o dirección lo revise.</p></div></div>
      <div class="feature-row"><span class="icon">4</span><div><h3>Confirmamos fecha y logística</h3><p>Coordinamos montaje, horarios y cualquier requerimiento especial del espacio.</p></div></div>
    </div>
  </section>

  <section class="tinted" style="text-align:center;">
    <div class="wrap">
      <h2 style="font-size:1.7rem; max-width:28ch; margin:0 auto;">¿Organizas una escuela, un festival o un programa municipal?</h2>
      <p style="color:var(--ink-soft); margin:0.9rem auto 1.6rem; max-width:32rem;">Escríbenos con tu fecha y público objetivo, y te respondemos con opciones de repertorio.</p>
      <div class="cta-row" style="justify-content:center;">
        <a class="btn btn-primary" href="/contacto/">Pedir cotización</a>
        <a class="btn btn-whatsapp" href="https://wa.me/523311774497" target="_blank" rel="noopener">Escribir por WhatsApp</a>
      </div>
    </div>
  </section>`;

  write('escuelas-festivales-municipios/index.html', layout({
    path: '/escuelas-festivales-municipios/',
    title: 'Teatro para escuelas, festivales culturales y municipios',
    description: 'Contrata teatro para tu escuela, festival cultural o municipio: repertorio inclusivo para niñas, niños y jóvenes, con ficha técnica, requisitos de espacio y proceso de cotización claro.',
    bodyHtml: body,
  }));
}

// ================= TEMPORADAS =================
function paginaTemporadasIndex() {
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap">
      <p class="eyebrow">${iconBoleto()}<span>Agenda</span></p>
      <h1>Próximas funciones</h1>
      <p class="lede">Cada función tiene su propia página, con fecha, sede y enlace para boletos cuando aplica.</p>
    </div>
    ${heroFootlights()}
  </section>
  <section style="padding-top:0;">
    <div class="wrap">
      ${proximas.length === 0 ? `<p class="notice">Por ahora no hay funciones próximas publicadas. Agrega un bloque nuevo en <code>content/funciones.mjs</code> en cuanto confirmes una fecha.</p>` : ''}
      <div class="grid grid-2">${proximas.map(tarjetaFuncion).join('')}</div>
    </div>
  </section>
  ${pasadas.length > 0 ? `
  <section class="tinted">
    <div class="wrap">
      <div class="section-head"><p class="eyebrow">Historial</p><h2>Temporadas anteriores</h2></div>
      <div class="grid grid-2">${pasadas.map(tarjetaFuncion).join('')}</div>
    </div>
  </section>` : ''}`;

  write('temporadas/index.html', layout({
    path: '/temporadas/',
    title: 'Próximas funciones y temporadas',
    description: 'Calendario de próximas funciones de Colectivo Pies Hinchados: fechas, sedes y ciudades donde puedes ver o programar nuestras obras de teatro.',
    bodyHtml: body,
  }));
}

function paginaFuncion(f) {
  const obra = obraPorSlug(f.obraSlug);
  const esProxima = f.fechaInicio >= hoy;
  const fecha = fechaLarga(f.fechaInicio);
  const description = `${obra.titulo} — función el ${fecha} en ${f.lugar}, ${f.ciudad}.`;
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap">
      <p class="eyebrow">${esProxima ? 'Próxima función' : 'Función pasada'}</p>
      <h1>${obra.titulo}</h1>
      <p class="lede">${fecha} · ${f.lugar}, ${f.ciudad}, ${f.estado}</p>
      <div class="tag-row" style="margin-top:1rem;">
        ${f.horario ? `<span class="tag tag-amber">${f.horario}</span>` : ''}
        ${f.gratuita ? '<span class="tag tag-teal">Entrada libre</span>' : ''}
      </div>
      ${esProxima ? `
      <div class="cta-row">
        ${f.boletosUrl ? `<a class="btn btn-primary" href="${f.boletosUrl}" target="_blank" rel="noopener">Comprar boletos</a>` : `<a class="btn btn-primary" href="/contacto/">Más información</a>`}
        <a class="btn btn-outline" href="/repertorio/${obra.slug}/">Ver ficha de la obra</a>
      </div>` : ''}
    </div>
    ${heroFootlights()}
  </section>
  <section class="tinted"><div class="wrap prose">${f.resumenHtml}</div></section>`;

  write(`temporadas/${f.slug}/index.html`, layout({
    path: `/temporadas/${f.slug}/`,
    title: `${obra.titulo} · ${fecha}`,
    description,
    bodyHtml: body,
    jsonLd: eventJsonLd(f),
    ogType: 'event',
  }));
}

// ================= BLOG =================
function paginaBlogIndex() {
  const posts = [...blog].sort((a, b) => b.fecha.localeCompare(a.fecha));
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap"><p class="eyebrow">${iconDestello()}<span>Noticias</span></p><h1>Lo último del colectivo</h1><p class="lede">Convocatorias ganadas, temporadas nuevas y prensa.</p></div>
    ${heroFootlights()}
  </section>
  <section style="padding-top:0;">
    <div class="wrap"><div class="grid grid-2">
      ${posts.map((p) => `
      <a class="card" href="/blog/${p.slug}/">
        <div class="card-body">
          <p class="eyebrow" style="margin-bottom:0.3rem;">${fechaLarga(p.fecha)}</p>
          <h3>${p.titulo}</h3>
          <p>${p.resumen}</p>
        </div>
      </a>`).join('')}
    </div></div>
  </section>`;

  write('blog/index.html', layout({
    path: '/blog/',
    title: 'Noticias',
    description: 'Noticias de Colectivo Pies Hinchados: convocatorias ganadas, temporadas nuevas y prensa sobre nuestras obras de teatro en Guadalajara y Jalisco.',
    bodyHtml: body,
  }));
}

function paginaPost(post) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.titulo,
    datePublished: post.fecha,
    author: { '@type': 'Organization', name: 'Colectivo Pies Hinchados' },
  };
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap prose"><p class="eyebrow">${fechaLarga(post.fecha)}</p><h1>${post.titulo}</h1></div>
    ${heroFootlights()}
  </section>
  <section class="tinted"><div class="wrap prose">${post.contenidoHtml}</div></section>`;

  write(`blog/${post.slug}/index.html`, layout({
    path: `/blog/${post.slug}/`,
    title: post.titulo,
    description: post.metaDescripcion,
    bodyHtml: body,
    jsonLd,
    ogType: 'article',
  }));
}

// ================= CONTACTO =================
function paginaContacto() {
  const body = `
  <section class="hero" style="padding-bottom:2rem;">
    <div class="wrap"><p class="eyebrow">Contacto</p><h1>Cuéntanos qué necesitas</h1><p class="lede">Responde este formulario o escríbenos directo por WhatsApp — lo que te sea más rápido.</p></div>
    ${heroFootlights()}
  </section>
  <section style="padding-top:0;">
    <div class="wrap grid grid-2" style="align-items:start;">
      <!--
        Formulario listo para Netlify Forms: al desplegar en Netlify,
        lo detecta automáticamente por los atributos data-netlify="true"
        y name="cotizacion". Las respuestas llegan a tu correo desde el
        panel de Netlify (Site settings → Forms). Si despliegas en
        Cloudflare Pages en vez de Netlify, este formulario necesita un
        servicio externo (ej. Formspree) — ver README.md.
      -->
      <form class="form-card" name="cotizacion" method="POST" data-netlify="true" netlify-honeypot="empresa-web">
        <input type="hidden" name="form-name" value="cotizacion" />
        <p style="display:none;"><label>No llenes esto: <input name="empresa-web" /></label></p>
        <div class="field"><label for="nombre">Nombre</label><input id="nombre" name="nombre" type="text" required /></div>
        <div class="field"><label for="institucion">Escuela, festival o municipio</label><input id="institucion" name="institucion" type="text" required /></div>
        <div class="field"><label for="email">Correo</label><input id="email" name="email" type="email" required /></div>
        <div class="field"><label for="telefono">Teléfono / WhatsApp</label><input id="telefono" name="telefono" type="tel" /></div>
        <div class="field"><label for="fecha">Fecha tentativa</label><input id="fecha" name="fecha" type="text" placeholder="Ej. octubre 2026" /></div>
        <div class="field"><label for="mensaje">Cuéntanos más (público, espacio, obra de interés)</label><textarea id="mensaje" name="mensaje"></textarea></div>
        <button class="btn btn-primary" type="submit" style="width:100%; justify-content:center;">Enviar solicitud</button>
      </form>
      <div>
        <div class="card" style="padding:1.8rem; margin-bottom:1.2rem;">
          <h3 style="font-size:1.05rem; margin-bottom:0.8rem;">Escríbenos directo</h3>
          <p style="color:var(--ink-soft); font-size:0.92rem; margin-bottom:1rem;">Si prefieres, contáctanos por estos medios y te respondemos lo antes posible.</p>
          <div class="cta-row" style="margin-top:0;">
            <a class="btn btn-whatsapp" href="https://wa.me/523311774497" target="_blank" rel="noopener">WhatsApp 33 1177 4497</a>
            <a class="btn btn-outline" href="mailto:colectivo.pieshinchados@gmail.com">colectivo.pieshinchados@gmail.com</a>
          </div>
        </div>
        <div class="card" style="padding:1.8rem;">
          <h3 style="font-size:1.05rem; margin-bottom:0.6rem;">Dónde estamos</h3>
          <p style="color:var(--ink-soft); font-size:0.92rem;">Con base en Zapopan, Jalisco. Contamos con servicio a toda la República Mexicana: viajamos a escuelas, festivales y municipios de cualquier estado.</p>
        </div>
      </div>
    </div>
  </section>`;

  write('contacto/index.html', layout({
    path: '/contacto/',
    title: 'Contáctanos y pide tu cotización',
    description: 'Escríbenos para cotizar una función de teatro para tu escuela, festival cultural o municipio. Respondemos por correo o WhatsApp.',
    bodyHtml: body,
  }));
}

// ================= 404 =================
function pagina404() {
  const body = `
  <section class="hero" style="text-align:center;">
    <div class="wrap">
      <p class="eyebrow">Error 404</p>
      <h1>No encontramos esta página</h1>
      <p class="lede" style="margin-left:auto;margin-right:auto;">Puede que el enlace esté roto o la página se haya movido.</p>
      <div class="cta-row" style="justify-content:center;"><a class="btn btn-primary" href="/">Volver al inicio</a></div>
    </div>
  </section>`;
  write('404.html', layout({ path: '/404.html', title: 'Página no encontrada', description: 'La página que buscas no existe.', bodyHtml: body }));
}

// ================= SITEMAP + ASSETS =================
function escribirSitemap(paths) {
  const urls = paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  write('sitemap.xml', xml);
}

function copiarAssets() {
  const publicDir = join(__dirname, 'public');
  const outDir = join(DIST, 'assets');
  mkdirSync(outDir, { recursive: true });
  const rootFiles = new Set(['robots.txt', 'favicon.png', 'apple-touch-icon.png']);
  for (const file of readdirSync(publicDir)) {
    if (rootFiles.has(file)) {
      copyFileSync(join(publicDir, file), join(DIST, file));
    } else {
      copyFileSync(join(publicDir, file), join(outDir, file));
    }
  }
}

// ================= EJECUCIÓN =================
if (existsSync(DIST)) rmSync(DIST, { recursive: true, force: true });

paginaInicio();
paginaColectivo();
paginaRepertorioIndex();
repertorio.forEach(paginaObra);
paginaInstituciones();
paginaTemporadasIndex();
funciones.forEach(paginaFuncion);
paginaBlogIndex();
blog.forEach(paginaPost);
paginaContacto();
pagina404();
copiarAssets();

const rutas = [
  '/', '/el-colectivo/', '/repertorio/', '/escuelas-festivales-municipios/', '/temporadas/', '/blog/', '/contacto/',
  ...repertorio.map((o) => `/repertorio/${o.slug}/`),
  ...funciones.map((f) => `/temporadas/${f.slug}/`),
  ...blog.map((p) => `/blog/${p.slug}/`),
];
escribirSitemap(rutas);

console.log(`✔ Sitio generado en dist/ — ${rutas.length} páginas + 404.html`);
