// ==================================================================
// Google Analytics / Google Tag Manager y píxel de Meta.
// Este archivo se copia tal cual a dist/assets/analytics.js — puedes
// editarlo directamente ahí después de desplegar, sin volver a correr
// "node build.mjs" (aunque también puedes editarlo aquí, en
// public/analytics.js, para que quede guardado en el proyecto).
//
// Para activarlos, reemplaza "" por tu ID real en las dos líneas
// marcadas abajo. Mientras estén vacíos, no se carga ningún script.
// ==================================================================

const GA_MEASUREMENT_ID = ''; // ej: 'G-XXXXXXXXXX'
const META_PIXEL_ID = '';     // ej: '1234567890123456'

if (GA_MEASUREMENT_ID) {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

if (META_PIXEL_ID) {
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    t = b.createElement(e); t.async = true; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
}
