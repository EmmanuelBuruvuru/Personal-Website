import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, b as $$LinkButton, c as $$Footer } from '../chunks/Footer_CKpDfH08.mjs';
import { S as SITE } from '../chunks/config_C5p9a8gf.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `404 \u2013 Page Not Found | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" class="flex grow flex-col items-center justify-center px-4 py-32 text-center"> <!-- Big monospace 404 --> <h1 class="font-mono text-[6rem] font-bold leading-none text-blue-500 dark:text-orange-500">
404
</h1> <!-- Friendly message --> <p class="mt-4 text-xl text-slate-700 dark:text-slate-300 max-w-lg">
Oops — the page you’re looking for doesn’t exist.
</p> <p class="mt-2 text-lg text-slate-500 dark:text-slate-400 max-w-md">
It may have been moved or removed. Try heading back home or using the menu above.
</p> <!-- Home button --> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/", "class": "mt-8 px-6 py-3 text-lg font-semibold transition hover:bg-accent hover:text-white" }, { "default": ($$result3) => renderTemplate`
← Back to Home
` })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/404.astro", void 0);

const $$file = "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/404.astro";
const $$url = "/Personal-Website/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
