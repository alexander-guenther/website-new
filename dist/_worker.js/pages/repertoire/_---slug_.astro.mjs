globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_QGPfR8QS.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DahLdFET.mjs';
import { $ as $$BaseLayout, a as $$Icon } from '../../chunks/BaseLayout_DArLX6Zk.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_RGC92rDz.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const work = await getCollection("repertoire");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-jn33wlnj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack wrapper gap-20" data-astro-cid-jn33wlnj> <div class="stack lg:gap-15" data-astro-cid-jn33wlnj> <header data-astro-cid-jn33wlnj> <div class="stack gap-2" data-astro-cid-jn33wlnj> <a class="back-link" href="/repertoire/" data-astro-cid-jn33wlnj>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-jn33wlnj": true })} Repertoire</a> </div> </header> <main data-astro-cid-jn33wlnj> <div class="stack gap-4 lg:gap-10 content" data-astro-cid-jn33wlnj> <h1 data-astro-cid-jn33wlnj>Mein Repertoire in dem Genre: ${entry.data.title} </h1> <p class="scroll-anweisung" data-astro-cid-jn33wlnj>Tabelle nach rechts Scrollen ${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.5em", "data-astro-cid-jn33wlnj": true })}</p> <div class="content" data-astro-cid-jn33wlnj> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-jn33wlnj": true })} </div> </div> </main> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-jn33wlnj": true })} </div> ` })} `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/repertoire/[...slug].astro", void 0);

const $$file = "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/repertoire/[...slug].astro";
const $$url = "/repertoire/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
