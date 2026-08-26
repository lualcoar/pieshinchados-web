// ============================================================
// Plantillas compartidas (cabecera, pie, layout con SEO).
// Nada de esto depende de paquetes externos — es JavaScript
// puro para poder generarse con "node build.mjs" en cualquier
// máquina que tenga Node instalado, sin "npm install".
// ============================================================

export const SITE_URL = 'https://www.pieshinchadosteatro.com';
export const SITE_NAME = 'Colectivo Pies Hinchados';

// Tu logo real (archivo original que nos compartiste, alta resolución, con
// fondo transparente). Vive en public/logo.png y se copia tal cual al sitio
// final — ya no depende de ningún servidor externo.
export const LOGO_URL = '/assets/logo.png';

export function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function fechaLarga(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/el-colectivo/', label: 'El colectivo' },
  { href: '/repertorio/', label: 'Repertorio' },
  { href: '/escuelas-festivales-municipios/', label: 'Escuelas y festivales' },
  { href: '/temporadas/', label: 'Próximas funciones' },
  { href: '/blog/', label: 'Noticias' },
];

function header(currentPath) {
  const links = NAV_LINKS.map((link) => {
    const active = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
    return `<a href="${link.href}"${active ? ' aria-current="page"' : ''}>${link.label}</a>`;
  }).join('\n');
  return `
  <header class="site-header">
    <div class="wrap bar">
      <a href="/" class="brand"><img src="${LOGO_URL}" alt="Colectivo Pies Hinchados" class="brand-logo" /></a>
      <nav class="main-nav" aria-label="Principal">
        ${links}
        <a href="/contacto/" class="nav-cta">Contrátanos</a>
      </nav>
      <details class="nav-mobile">
        <summary aria-label="Abrir menú">☰ Menú</summary>
        <div class="nav-mobile-links">
          ${links}
          <a href="/contacto/" class="nav-cta" style="text-align:center;">Contrátanos</a>
        </div>
      </details>
    </div>
  </header>`;
}

function footer() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="cols">
        <div>
          <h4>Colectivo Pies Hinchados</h4>
          <p style="color:#c9c4e6; font-size:0.92rem; max-width:26rem;">
            Teatro de impacto social para niñas, niños y jóvenes, con base en Zapopan, Jalisco
            y servicio a toda la República Mexicana.
          </p>
        </div>
        <div>
          <h4>Explora</h4>
          <ul>
            <li><a href="/repertorio/">Repertorio</a></li>
            <li><a href="/escuelas-festivales-municipios/">Escuelas y festivales</a></li>
            <li><a href="/temporadas/">Próximas funciones</a></li>
            <li><a href="/blog/">Noticias</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:colectivo.pieshinchados@gmail.com">colectivo.pieshinchados@gmail.com</a></li>
            <li><a href="https://wa.me/523311774497" target="_blank" rel="noopener">WhatsApp 33 1177 4497</a></li>
            <li><a href="/contacto/">Pedir cotización</a></li>
          </ul>
        </div>
      </div>
      <p class="bottom">© ${year} Pies Hinchados Teatro SC · Zapopan, Jalisco · Servicio a toda la República Mexicana</p>
    </div>
  </footer>`;
}

const WHATSAPP_BUTTON = `
  <a class="wa-float" href="https://wa.me/523311774497?text=Hola%2C%20quisiera%20información%20para%20contratar%20una%20función%20de%20teatro" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp al 33 1177 4497" title="Escríbenos por WhatsApp">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.35 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.2c-1.62 0-3.13-.47-4.4-1.28l-.32-.2-3 .79.8-2.93-.21-.3a8.17 8.17 0 0 1-1.27-4.28c0-4.52 3.68-8.2 8.4-8.2 4.72 0 8.4 3.68 8.4 8.2 0 4.52-3.68 8.2-8.4 8.2Zm4.6-6.14c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z"/></svg>
  </a>`;

// Analytics: deja los IDs reales en dist/assets/site-config.js (ver ese
// archivo) para no tener que volver a generar el sitio cada vez que
// cambien. Aquí solo se referencia ese archivo.
const ANALYTICS_LOADER = `<script src="/assets/analytics.js" defer></script>`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PerformingGroup',
    name: 'Colectivo Pies Hinchados',
    alternateName: 'Pies Hinchados Teatro SC',
    url: SITE_URL,
    email: 'colectivo.pieshinchados@gmail.com',
    telephone: '+52 33 1177 4497',
    foundingDate: '2017',
    foundingLocation: 'Jalisco, México',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zapopan',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    },
    areaServed: 'MX',
    description: 'Colectivo de teatro de impacto social para niñas, niños y jóvenes, con base en Zapopan, Jalisco y servicio a toda la República Mexicana. Desarrollamos proyectos culturales y artísticos multidisciplinarios que utilizan la risa, el gesto y la inclusión como herramientas para transformar la realidad social.',
  };
}

/**
 * layout: arma el documento HTML completo de una página.
 * @param {object} opts
 * @param {string} opts.path - ruta (para nav activo y canonical), ej "/repertorio/roto/"
 * @param {string} opts.title - título único de la página (sin el nombre del sitio)
 * @param {string} opts.description - meta description única
 * @param {string} opts.bodyHtml - HTML del <main>
 * @param {object|object[]} [opts.jsonLd] - datos estructurados extra de la página
 * @param {string} [opts.ogType]
 * @param {string} [opts.ogImage] - ruta absoluta o relativa de la imagen para compartir (og:image)
 */
export function layout({ path, title, description, bodyHtml, jsonLd, ogType = 'website', ogImage = LOGO_URL }) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = SITE_URL + path;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : SITE_URL + ogImage;
  const blocks = [organizationJsonLd(), ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [])];
  const jsonLdScripts = blocks
    .map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`)
    .join('\n  ');

  return `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="canonical" href="${canonical}" />
<title>${escapeHtml(fullTitle)}</title>
<meta name="description" content="${escapeHtml(description)}" />
<meta name="robots" content="index, follow" />
<meta property="og:site_name" content="${SITE_NAME}" />
<meta property="og:type" content="${ogType}" />
<meta property="og:title" content="${escapeHtml(fullTitle)}" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:locale" content="es_MX" />
<meta property="og:image" content="${ogImageUrl}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${ogImageUrl}" />
<link rel="stylesheet" href="/assets/styles.css" />
${jsonLdScripts}
${ANALYTICS_LOADER}
</head>
<body>
<a href="#main" style="position:absolute; left:-999px; top:0; background:#fff; padding:0.6rem 1rem; z-index:100;" onfocus="this.style.left='0.5rem'; this.style.top='0.5rem';" onblur="this.style.left='-999px';">Saltar al contenido</a>
${header(path)}
<main id="main">
${bodyHtml}
</main>
${footer()}
${WHATSAPP_BUTTON}
</body>
</html>
`;
}
