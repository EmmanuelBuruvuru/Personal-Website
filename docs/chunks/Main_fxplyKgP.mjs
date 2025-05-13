import { c as createComponent, b as createAstro, r as renderComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot, g as renderScript, f as renderTransition, a as renderTemplate } from './astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from './Breadcrumb_CbWZoJNj.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { props } = Astro2;
  const backUrl = Astro2.url.pathname ;
  return renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main${addAttribute(backUrl, "data-backUrl")} id="main-content" class="mx-auto w-full max-w-3xl px-4 pb-4"> ${"titleTransition" in props ? renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl"> ${props.pageTitle[0]} <span${addAttribute(renderTransition($$result, "hn2qarie", "", props.titleTransition), "data-astro-transition-scope")}> ${props.pageTitle[1]} </span> </h1>` : renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl">${props.pageTitle}</h1>`} <p class="mt-2 mb-6 italic">${props.pageDesc}</p> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/Main.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/Main.astro", "self");

export { $$Main as $ };
