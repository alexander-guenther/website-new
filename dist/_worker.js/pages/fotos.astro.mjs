globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_QGPfR8QS.mjs';
import { g as getCollection } from '../chunks/_astro_content_DahLdFET.mjs';
import { $ as $$BaseLayout, a as $$Icon } from '../chunks/BaseLayout_DArLX6Zk.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_RGC92rDz.mjs';
import { $ as $$Hero } from '../chunks/Hero_iMd9sdAU.mjs';
import { $ as $$Grid } from '../chunks/Grid_DsYd58T6.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Fotos = createComponent(async ($$result, $$props, $$slots) => {
  const alleFotos = await getCollection("fotos");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Ausgew\xE4hlte Fotos | Alexander G\xFCnther", "description": "Eine \xDCbersicht an Fotos und Bilder von Alexander G\xFCnther | Fotos.", "data-astro-cid-qbavdzpr": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack wrapper gap-20" data-astro-cid-qbavdzpr> <header class="hero" style="margin-bottom: -3em;" data-astro-cid-qbavdzpr> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Fotos und Bilder", "align": "start", "data-astro-cid-qbavdzpr": true })} </header> <main class="stack wrapper gap-8" data-astro-cid-qbavdzpr> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-qbavdzpr": true }, { "default": async ($$result3) => renderTemplate`${alleFotos.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).filter(
    (foto, index, self) => self.findIndex((f) => f.data.img === foto.data.img) === index
  ).map((foto) => renderTemplate`<li data-astro-cid-qbavdzpr> <div class="card" data-astro-cid-qbavdzpr> <span class="title" data-astro-cid-qbavdzpr>${renderComponent($$result3, "Icon", $$Icon, { "icon": "info", "size": "1em", "data-astro-cid-qbavdzpr": true })}</span> <img${addAttribute(foto.data.img, "src")}${addAttribute(foto.data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-qbavdzpr> <!-- Versteckte Box für Fotograf und Rolle --> <div class="info-box" data-astro-cid-qbavdzpr> <p data-astro-cid-qbavdzpr>Stück: ${foto.data.vorstellung || "Unbekannt"}</p> <p data-astro-cid-qbavdzpr>Rolle: ${foto.data.rolle || "Unbekannt"}</p> <p data-astro-cid-qbavdzpr>Foto von: ${foto.data.fotograf || "Unbekannt"}</p> <br data-astro-cid-qbavdzpr> <p data-astro-cid-qbavdzpr><a${addAttribute(foto.data.img, "href")} data-astro-cid-qbavdzpr>${renderComponent($$result3, "Icon", $$Icon, { "icon": "fullscreen", "size": "1.3em", "data-astro-cid-qbavdzpr": true })}Bild vergrößern</a></p> </div> </div> </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qbavdzpr": true })} </div> ` })} `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/fotos.astro", void 0);

const $$file = "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/fotos.astro";
const $$url = "/fotos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Fotos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
