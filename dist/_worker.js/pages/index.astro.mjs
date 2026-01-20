globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_QGPfR8QS.mjs';
import { g as getCollection } from '../chunks/_astro_content_DahLdFET.mjs';
import { $ as $$BaseLayout, a as $$Icon } from '../chunks/BaseLayout_DArLX6Zk.mjs';
import { a as $$CallToAction, $ as $$ContactCTA } from '../chunks/ContactCTA_RGC92rDz.mjs';
import { $ as $$Grid } from '../chunks/Grid_DsYd58T6.mjs';
import { $ as $$Hero } from '../chunks/Hero_iMd9sdAU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  (await getCollection("repertoire")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  const anstehendeTermine = (await getCollection("termine")).filter((termin) => {
    const terminDatum = new Date(termin.data.datum);
    const heute = /* @__PURE__ */ new Date();
    terminDatum.setHours(0, 0, 0, 0);
    heute.setHours(0, 0, 0, 0);
    return terminDatum >= heute;
  }).sort((a, b) => a.data.datum.valueOf() - b.data.datum.valueOf()).slice(0, 5);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper stack gap-20" data-astro-cid-j7pv25f6> <div class="stack" style="height: 90vh;" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Alexander G\xFCnther", "title2": "Tenor", "tagline": "Oper - Operette - Musical - Konzert", "align": "start", "data-astro-cid-j7pv25f6": true })} <div class="image-container" data-astro-cid-j7pv25f6> <img alt="Alexander Günther lächelnd leicht gebäugt" width="350" src="assets/alexanderguenther_alleine_keinhintergrund_gebauegt.webp" data-astro-cid-j7pv25f6> <!-- Info-Icon in der rechten unteren Ecke --> <span class="info-icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Icon", $$Icon, { "icon": "info", "size": "1em", "data-astro-cid-j7pv25f6": true })} </span> <!-- Versteckte Box für Fotograf und Rolle --> <div class="info-box" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Foto von: Candy Welz</p> </div> </div> <!-- Begrüßungsnachricht --> <div class="welcome-message" id="welcome-message" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Herzlich Willkommen auf meiner Website!</p> </div> </header> </div> <main class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class=" section with-background with-cta" style="padding-top: 2rem;" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Mein aktuelles Repertoire</h3> <p data-astro-cid-j7pv25f6>Die Spielzeit 2025/26 ist zugleich meine 33. am Deutschen Nationaltheater Weimar als auch meine 45. auf der Bühne insgesamt. In dieser Spielzeit habe ich neu in mein Repertoire den Diomedes in Schoecks „Penthesilea“ und den Ruprecht in Ullmanns „Der zerbrochene Krug“ aufgenommen. Damit habe ich in dieser Spielzeit zwei Wiederbegegnungen mit Stücken, die ich bereits gespielt habe - jedoch in anderen Rollen. So singe ich im „Zerbrochenen Krug“ dieses Mal den Ruprecht und im „Barbiere di Seviglia“ den Fiorillo. Außerdem werde ich  in der Inszenierung von Hasko Weber die Knusperhexe in „Hänsel und Gretel“ wieder singen. Neu in meinem Repertoire wird ebenso „Die tote Stadt“ von Erich-Wolfgang Korngold sein. In dieser Oper werde ich den Grafen Albert verkörpern.</p> </header> <div class="cta" id="aktuell" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/repertoire/", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Vollständiges Repertoire
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <section class="section with-background with-cta bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Aktuelle Termine</h3> </header> <div class="gallery" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`${anstehendeTermine.map((termin) => {
    const datum = new Date(termin.data.datum).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
    return renderTemplate`<li class="mention-card" data-astro-cid-j7pv25f6> <p style="font-weight: bold;" data-astro-cid-j7pv25f6>${datum}</p> <p data-astro-cid-j7pv25f6>${termin.data.vorstellung}</p> <p data-astro-cid-j7pv25f6>${termin.data.rolle}</p> </li>`;
  })}` })} </div> <div class="cta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/termine/", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Alle Termine
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Deutsches Nationaltheater Weimar</h3> <p data-astro-cid-j7pv25f6>Hier bin ich seit 1992 engagiert.</p> </header> <div class="cta" id="aktuell" data-astro-cid-j7pv25f6> <div style="display: flex; justify-content: center; padding-bottom: 2rem;" data-astro-cid-j7pv25f6> <img alt="Logo Deutsches Nationaltheater Weimar" width="100" src="assets/dnt-logo.webp" data-astro-cid-j7pv25f6></div> ${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "https://www.nationaltheater-weimar.de/de/ueber-uns/ensemble-detail.php?PID=86", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate`
Mein Profil am DNT
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` })} </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> ` })} ${renderScript($$result, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/index.astro", void 0);

const $$file = "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
