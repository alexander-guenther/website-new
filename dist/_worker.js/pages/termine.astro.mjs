globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, e as renderScript, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_QGPfR8QS.mjs';
import { g as getCollection } from '../chunks/_astro_content_DahLdFET.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DArLX6Zk.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_RGC92rDz.mjs';
import { $ as $$Hero } from '../chunks/Hero_iMd9sdAU.mjs';
import { $ as $$Grid } from '../chunks/Grid_DsYd58T6.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Termine = createComponent(async ($$result, $$props, $$slots) => {
  const alleTermine = await getCollection("termine");
  return renderTemplate`${renderScript($$result, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/termine.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Alle Termine | Alexander G\xFCnther", "description": "Eine \xDCbersicht der Termine und Veranstaltungen von und mit Alexander G\xFCnther | Termine.", "data-astro-cid-lce52xne": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack wrapper gap-20" data-astro-cid-lce52xne> <header class="hero" style="margin-bottom: -3em;" data-astro-cid-lce52xne> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Termin\xFCbersicht", "tagline": "Hier finden Sie eine \xDCbersicht \xFCber die n\xE4chsten Vorstellungen. Die \xDCbersicht wird regelm\xE4\xDFig aktualisiert.", "align": "start", "data-astro-cid-lce52xne": true })} </header> <main class="stack gap-8" data-astro-cid-lce52xne> <p class="doppel" data-astro-cid-lce52xne>Doppelbesetzungen gibt es bei „My fair Lady“ und „Hänsel und Gretel“. Ich bitte, sich auf der <a href="https://www.nationaltheater-weimar.de/" data-astro-cid-lce52xne>DNT – Seite</a> über die jeweilige Abendbesetzung zu informieren.</p> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-lce52xne": true }, { "default": async ($$result3) => renderTemplate`${alleTermine.filter((termin) => {
    const terminDatum = new Date(termin.data.datum);
    const heute = /* @__PURE__ */ new Date();
    terminDatum.setHours(0, 0, 0, 0);
    heute.setHours(0, 0, 0, 0);
    return terminDatum >= heute;
  }).sort((a, b) => a.data.datum.valueOf() - b.data.datum.valueOf()).map((termin) => {
    const datum = new Date(termin.data.datum).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    return renderTemplate`<li class="mention-card" data-astro-cid-lce52xne> <p style="font-weight: bold;" data-astro-cid-lce52xne>${datum}</p> <p data-astro-cid-lce52xne>${termin.data.vorstellung}</p> <p data-astro-cid-lce52xne>${termin.data.rolle}</p> </li>`;
  })}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-lce52xne": true })} </div> ` })} `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/termine.astro", void 0);

const $$file = "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/termine.astro";
const $$url = "/termine";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Termine,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
