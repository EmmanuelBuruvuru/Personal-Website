import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_BWMMlk2C.mjs';
import { $ as $$Layout, a as $$Header, S as SOCIALS, d as $$Socials, c as $$Footer } from '../chunks/Footer_CKpDfH08.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_CDu_myWc.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  sortedPosts.filter(({ data }) => data.featured);
  sortedPosts.filter(({ data }) => !data.featured);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content" data-layout="index"> <section id="hero" class="pt-32 pb-6 text-left"> <!-- ↑ increased from pt-8 to pt-32 for more vertical space --> <p class="font-semibold text-blue-600 dark:text-orange-400 transition-colors duration-300">
Hallo, My Name is
</p> <h1 class="my-4 inline-block text-4xl font-bold sm:my-8 sm:text-5xl typewriter">
Emmanuel Buruvuru
</h1> <h2 class="mb-6 text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
Cybersecurity Software Engineer
</h2> <p class="mx-auto mt-4 max-w-1xl text-left">
I'm a Cybersecurity and Software Engineer passionate about crafting secure,
        intelligent systems. Currently, I focus on building resilient, user-focused
        solutions that bridge tech and trust.
</p> <div class="mt-6 flex flex-col sm:flex-row justify-start items-start gap-4"> ${SOCIALS.length > 0 && renderTemplate`<div class="flex items-center gap-2"> <div class="whitespace-nowrap">Social Links:</div> ${renderComponent($$result2, "Socials", $$Socials, {})} </div>`} <!-- Resume Button opens PDF in new tab --> <a href="/assets/Buruvuru-Emmanuel-Resume.pdf" target="_blank" rel="noopener noreferrer" class="rounded border border-current px-4 py-2 text-sm font-semibold transition hover:bg-accent hover:text-white">
Resume
</a> </div> </section> <!-- ... you can render featuredPosts, recentPosts, etc. below ... --> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/index.astro", void 0);

const $$file = "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/index.astro";
const $$url = "/Personal-Website";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
