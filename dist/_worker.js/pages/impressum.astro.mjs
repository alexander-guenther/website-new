globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_QGPfR8QS.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DArLX6Zk.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_RGC92rDz.mjs';
import { $ as $$Hero } from '../chunks/Hero_iMd9sdAU.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Impressum = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Impressum | Alexander G\xFCnther", "description": "Das Impressum von Alexander G\xFCnther", "data-astro-cid-7dpr4qcz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack wrapper gap-20 impressum" data-astro-cid-7dpr4qcz> <header class="hero" style="margin-bottom: -3em;" data-astro-cid-7dpr4qcz> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Impressum", "align": "start", "data-astro-cid-7dpr4qcz": true })} </header> <main class="stack gap-20" data-astro-cid-7dpr4qcz> <div class="content" data-astro-cid-7dpr4qcz> <p data-astro-cid-7dpr4qcz>Alexander G&uuml;nther<br data-astro-cid-7dpr4qcz>
Rainer-Maria-Rilke-Stra&szlig;e 12<br data-astro-cid-7dpr4qcz>
99425 Weimar</p> <br data-astro-cid-7dpr4qcz> <h3 data-astro-cid-7dpr4qcz>Kontakt</h3> <p data-astro-cid-7dpr4qcz>Telefon: +49 (0) 36 43 / 85 25 63<br data-astro-cid-7dpr4qcz>
E-Mail: a.guenther(at)alexanderguenther.com</p> <br data-astro-cid-7dpr4qcz> <h3 data-astro-cid-7dpr4qcz>Redaktionell verantwortlich</h3> <p data-astro-cid-7dpr4qcz>Alexander G&uuml;nther<br data-astro-cid-7dpr4qcz>
Rainer-Maria-Rilke-Stra&szlig;e 12<br data-astro-cid-7dpr4qcz>
99425 Weimar</p> <br data-astro-cid-7dpr4qcz> <p data-astro-cid-7dpr4qcz>Diese Webseite dient der Darstellung meines beruflichen Wirkens. Alle Abbildungen, Texte und Fotos sind geschützt. Eine Verwendung über den privaten Bereich hinaus ist nur mit einer ausdrücklichen Genehmigung möglich.</p> <br data-astro-cid-7dpr4qcz> <p data-astro-cid-7dpr4qcz>Quelle: <a href="https://www.e-recht24.de" data-astro-cid-7dpr4qcz>eRecht24</a></p> </div> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-7dpr4qcz": true })} </div> ` })} `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/impressum.astro", void 0);

const $$file = "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/impressum.astro";
const $$url = "/impressum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Impressum,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
