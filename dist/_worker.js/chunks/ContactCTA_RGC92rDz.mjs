globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate, r as renderComponent, n as renderTransition } from './astro/server_QGPfR8QS.mjs';
/* empty css                               */
import { a as $$Icon } from './BaseLayout_DArLX6Zk.mjs';
/* empty css                               */

const $$Astro = createAstro();
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="contact" data-astro-cid-rcdzuq3a${addAttribute(renderTransition($$result, "cuyr5wh6", "", "contact"), "data-astro-transition-scope")}></div> <aside data-astro-cid-rcdzuq3a> <div class="content-left" data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Mein Kontakt</h2> <div style="margin-top: 2rem;" data-astro-cid-rcdzuq3a> <div data-astro-cid-rcdzuq3a>${renderComponent($$result, "Icon", $$Icon, { "icon": "phone", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} Telefon: +49 (0) 36 43 / 85 25 63</div> <div data-astro-cid-rcdzuq3a>${renderComponent($$result, "Icon", $$Icon, { "icon": "device-mobile", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} Mobil: +49 (0) 171 / 24 28 052</div> <div data-astro-cid-rcdzuq3a>${renderComponent($$result, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} Email: <a href="mailto:a.guenther@alexanderguenther.com?subject=Anfrage%20Website&body=Hallo%20Alexander,%20" data-astro-cid-rcdzuq3a>a.guenther(at)alexanderguenther.com</a></div> </div> </div> <div class="content-right" data-astro-cid-rcdzuq3a> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:a.guenther@alexanderguenther.com?subject=Anfrage%20Website&body=Hallo%20Alexander,%20", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Schreiben Sie mir
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </div> </aside> `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/components/ContactCTA.astro", "self");

export { $$ContactCTA as $, $$CallToAction as a };
