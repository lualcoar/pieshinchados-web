# Sitio nuevo de Colectivo Pies Hinchados

Este proyecto reemplaza pieshinchadosteatro.com (Google Sites) por un sitio hecho a
la medida, gratis de alojar, con todo lo que Google Sites no te dejaba hacer:
título y descripción propios por página, datos estructurados de cada función
(para que Google pueda mostrar fecha y "comprar boletos" directo en el resultado
de búsqueda), formulario de cotización, espacio para blog, y sitio nuevo por
temporada sin límite.

**Nota honesta sobre el stack:** el prompt original pedía Astro. Lo construí en
su lugar con un generador propio, en JavaScript puro, sin ninguna dependencia
externa (`build.mjs`). La razón es práctica: en el entorno donde yo trabajo no
tengo acceso a instalar paquetes de npm, así que no podía instalar Astro ni
comprobar que compilara sin errores — y prefiero no entregarte código que no
pude probar. Este generador cumple exactamente lo mismo (páginas estáticas,
contenido separado del diseño, sin build complicado) y sí lo probé de principio
a fin: lo corrí, revisé que cada página tenga un solo título, que las etiquetas
de SEO salgan bien, que los datos estructurados sean JSON válido, y que ningún
enlace interno esté roto. Si más adelante contratas a un desarrollador y prefiere
migrar esto a Astro u otro framework, el contenido en `content/` se traslada
prácticamente tal cual.

## Qué hay en esta carpeta

```
content/          Los textos y datos del sitio — repertorio, funciones, blog.
                   Aquí es donde editas TÚ, sin tocar el diseño.
lib/templates.mjs  El diseño (cabecera, pie de página, SEO). Esto sí es más
                   código — para tocarlo, mejor con ayuda de un desarrollador.
public/            Estilos (styles.css), analytics.js, favicon, robots.txt —
                   se copian tal cual al sitio final.
build.mjs          El generador. Lee content/ y lib/, y escribe dist/.
dist/              El sitio ya generado, lista para subir — esto es lo que
                   despliegas.
```

## Cómo ver el sitio en tu computadora antes de publicarlo

Necesitas tener [Node.js](https://nodejs.org) instalado (versión 18 o más
nueva). Luego, en esta carpeta:

```
node build.mjs
```

Eso (re)genera la carpeta `dist/`. Para verla en el navegador:

```
npx serve dist
```

y abre la dirección que te muestre (normalmente http://localhost:3000).

## Cómo publicarlo gratis (sin usar la terminal)

**Opción más simple — Netlify Drop:**

1. Entra a [app.netlify.com/drop](https://app.netlify.com/drop) con una cuenta
   gratuita de Netlify.
2. Arrastra la carpeta `dist/` completa a esa página.
3. En segundos tendrás una URL de prueba (algo como `nombre-al-azar.netlify.app`).
4. En el panel del sitio, ve a **Domain settings → Add a custom domain** y
   escribe `pieshinchadosteatro.com`. Netlify te va a pedir que cambies uno o
   dos registros DNS en el lugar donde compraste tu dominio (donde sea que
   hayas configurado el dominio para Google Sites). Netlify te dice
   exactamente qué registro agregar — normalmente toma unas horas en
   activarse del todo.
5. Cada vez que cambies contenido, vuelve a correr `node build.mjs` y arrastra
   la carpeta `dist/` de nuevo (o pide a tu desarrollador que lo conecte a un
   repositorio de Git para que se actualice solo).

**Alternativa equivalente:** Cloudflare Pages funciona igual de bien y también
es gratis — solo que su versión de "arrastrar y soltar" se llama Direct Upload
y el formulario de contacto (ver abajo) necesitaría un servicio aparte como
Formspree en vez de Netlify Forms.

## El formulario de contacto

La página `/contacto/` ya tiene un formulario listo para **Netlify Forms** —
no necesitas programar nada. En cuanto lo despliegues en Netlify, entra a
**Site settings → Forms** para ver las respuestas o activar que te lleguen
por correo. Si en vez de Netlify usas Cloudflare Pages, este formulario no
va a funcionar solo — necesitarías conectar un servicio como Formspree
(tiene plan gratuito) o pedirle a un desarrollador que lo resuelva.

## Cómo agregar una función, obra o noticia nueva

1. Abre el archivo correspondiente en `content/` (`repertorio.mjs`,
   `funciones.mjs` o `blog.mjs`).
2. Copia uno de los bloques que ya existen y cambia los datos (el `slug` es
   la parte de la URL — usa minúsculas y guiones, sin espacios ni acentos).
3. Guarda el archivo y corre `node build.mjs` otra vez.
4. Vuelve a subir la carpeta `dist/` (o, si está conectado a Git, solo haz
   commit y push).

## Cómo activar Google Analytics y el píxel de Meta

Abre `public/analytics.js` y pon tus IDs en estas dos líneas:

```js
const GA_MEASUREMENT_ID = ''; // ej: 'G-XXXXXXXXXX'
const META_PIXEL_ID = '';     // ej: '1234567890123456'
```

Corre `node build.mjs` y vuelve a publicar. Mientras estén vacíos, esos
scripts simplemente no se cargan — no hay que "desactivarlos" a mano.

## Contenido real, ya completo

El 25 de agosto de 2026 recorrí pieshinchadosteatro.com (tu sitio actual en
Google Sites) y traje a este proyecto todo el contenido real que encontré.
Después, entre el 25 y el 26 de agosto, tú mismo completaste lo que faltaba
subiendo archivos y confirmando datos por chat. Así quedó:

- **Las 11 obras de tu repertorio real**, cada una con su sinopsis, público,
  duración y foto — incluyendo "Raro: Una mirada desde lo invisible", obra
  galardonada que no estaba contemplada en la primera versión.
- **Fotos propias para cada obra, el logo y la foto del equipo**: los
  subiste tú directamente y viven como archivos dentro de `public/`
  (`logo.png`, `equipo.jpg`, `obra-*.jpg`) — el sitio ya no depende de
  ningún enlace externo a Google. El favicon y el ícono para dispositivos
  Apple también salen de tu logo real.
- **Público y duración de cada obra**, confirmados por ti directamente.
  Los requisitos técnicos se dejaron fuera a propósito — los compartes tú
  al cotizar, caso por caso.
- **La sinopsis real y completa de "Roto"**, que aún no está publicada en
  tu sitio actual porque estrena en octubre de 2026.
- **Tu logo real, tus colores exactos y tu tipografía (Lato)**, tomados
  directo de tu sitio.
- **La foto real de Gabriela y Luis**, tu misión y visión reales, y el
  contenido real de "Trayectoria de excelencia" (Muestra Nacional de
  Teatro, INBAL, Secretaría de Cultura Jalisco, etc.) en la página "El
  colectivo".
- **Tu ubicación real**: Zapopan, Jalisco, con servicio a toda la
  República Mexicana, en todas las páginas relevantes.
- **Los 4 pasos del proceso de cotización** en "Escuelas y festivales",
  confirmados por ti como correctos.

**Dos cosas que noté en tu sitio actual de Google Sites y que quizás
quieras corregir ahí también** (en este sitio nuevo ya quedaron
resueltas): (1) el pie de página muestra tu correo personal
(lualcoar@gmail.com) mientras que la página de Contacto usa el del
colectivo (colectivo.pieshinchados@gmail.com); (2) el resto del sitio solo
menciona "Guadalajara", sin Zapopan ni el servicio a toda la República,
que solo aparece en tu página de Contacto actual.

## Ya no queda ningún placeholder de contenido

Las funciones de "Tina y Tomás" ya tienen su sede real (Teatro Alarife
Martín Casillas, Guadalajara) y su horario real (domingos, 1:00 p.m., todo
noviembre de 2026), confirmados por ti. La función de "Roto" se quitó de
"Próximas funciones" a propósito: sus fechas son un acuerdo privado con el
DIF, así que en el sitio solo aparece como "Próximo estreno", sin fecha ni
sede — nada de esa información se publica.

Si en algún momento quieres subir dosieres en PDF descargables, súbelos a
la carpeta `public/` y pon la ruta en el campo `dosierUrl` de cada obra en
`content/repertorio.mjs`.

## Qué SEO ya trae resuelto

- Título y meta description únicos por página, con las palabras clave para
  escuelas, festivales culturales y municipios.
- Un solo `<h1>` por página, con `<h2>`/`<h3>` organizando el resto.
- Datos estructurados JSON-LD: la organización completa en todas las páginas,
  y cada función marcada como `TheaterEvent` con fecha, lugar y boletos.
- `sitemap.xml` y `robots.txt` generados automáticamente.
- Etiquetas Open Graph y Twitter Card en cada página.
- Enlaces internos entre repertorio, funciones y la página para instituciones.
- Sitio 100% estático — sin JavaScript de por medio para lo esencial, así que
  carga muy rápido (buen Core Web Vitals).
