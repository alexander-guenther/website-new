globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate } from './astro/server_QGPfR8QS.mjs';
/* empty css                               */

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title, title2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero stack gap-4", align], "class:list")} data-astro-cid-bbe6dxrz> <div class="stack gap-2" data-astro-cid-bbe6dxrz> <h1 class="title" data-astro-cid-bbe6dxrz>${title}</h1> ${title2 && renderTemplate`<h2 class="title" data-astro-cid-bbe6dxrz>${title2}</h2>`} ${tagline && renderTemplate`<p class="tagline" data-astro-cid-bbe6dxrz>${tagline}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/sebastianhofstetter/Desktop/Agentur/Projekte/03_AlexanderGuenther/website-new/src/components/Hero.astro", void 0);

export { $$Hero as $ };
