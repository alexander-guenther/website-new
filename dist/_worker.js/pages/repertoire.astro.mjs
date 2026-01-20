globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_QGPfR8QS.mjs';
import { g as getCollection } from '../chunks/_astro_content_DETfxGP3.mjs';
import { $ as $$BaseLayout, a as $$Icon } from '../chunks/BaseLayout_DArLX6Zk.mjs';
import { a as $$CallToAction, $ as $$ContactCTA } from '../chunks/ContactCTA_RGC92rDz.mjs';
/* empty css                                      */
import { $ as $$Hero } from '../chunks/Hero_iMd9sdAU.mjs';
import { $ as $$Grid } from '../chunks/Grid_DsYd58T6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/repertoire/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/components/PortfolioPreview.astro", void 0);

const $$Repertoire = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("repertoire")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mein Repertoire | Alexander G\xFCnther", "description": "Eine \xDCbersicht der Rollen und St\xFCcke von Alexander G\xFCnther | Repertoire.", "data-astro-cid-qydye7dt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack wrapper gap-20" data-astro-cid-qydye7dt> <header class="hero" data-astro-cid-qydye7dt> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mein Repertoire", "align": "start", "data-astro-cid-qydye7dt": true })} <div class="roles" data-astro-cid-qydye7dt> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/index.html#aktuell", "data-astro-cid-qydye7dt": true }, { "default": async ($$result3) => renderTemplate`
Aktuelles Repertoire
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-qydye7dt": true })} ` })} </div> </header> <main class="stack wrapper gap-8" data-astro-cid-qydye7dt> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-qydye7dt": true }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-qydye7dt> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-qydye7dt": true })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qydye7dt": true })} </div> ` })} `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/repertoire.astro", void 0);

const $$file = "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/repertoire.astro";
const $$url = "/repertoire";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Repertoire,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
