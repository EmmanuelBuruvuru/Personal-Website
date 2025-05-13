import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BWMMlk2C.mjs';
import { $ as $$Main } from '../../chunks/Main_fxplyKgP.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_CKpDfH08.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_CHIpC_nv.mjs';
import { g as getSortedPosts } from '../../chunks/getSortedPosts_CDu_myWc.mjs';
import { S as SITE } from '../../chunks/config_C5p9a8gf.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const getStaticPaths = async ({ paginate }) => {
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && data.tags?.includes("experience")
  );
  return paginate(getSortedPosts(posts), { pageSize: SITE.postPerPage });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const experiences = [
    {
      title: "Cybersecurity Engineer",
      company: "Ignite Africa",
      date: "Jun 2024 \u2013 May 2025",
      description: `At Ignite Africa I designed and enforced security architectures with Check Point firewalls and Microsoft Intune, defined both internal and external policies, and leveraged Rapid7 to identify and remediate vulnerabilities across our environment.`,
      techStack: ["Check Point", "Microsoft Intune", "Internal & External Policy", "Rapid7"]
    },
    {
      title: "Software Engineer",
      company: "Accenture",
      date: "Feb 2023 \u2013 Nov 2023",
      description: `At Accenture I built full-stack applications using Java and Spring Boot, exposed RESTful APIs consumed by React.js frontends, and managed data persistence in MongoDB.`,
      techStack: ["Java", "Spring Boot", "RESTful API", "React.js", "MongoDB"]
    },
    {
      title: "Freelance Software Engineer",
      company: "Fiverr",
      date: "Aug 2022 \u2013 Feb 2023",
      description: `On Fiverr I delivered end-to-end solutions including database design, backend scripting, containerization, and API development to small business clients.`,
      techStack: ["MySQL", "Python", "Docker", "RESTful API", "C"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Experiences | ${SITE.title}`, "data-astro-cid-e6mkutl5": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-e6mkutl5": true })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Experiences", "pageDesc": "A chronicle of my engineering roles and achievements.", "data-astro-cid-e6mkutl5": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="h-1 w-20 bg-blue-500 dark:bg-orange-500 mt-2 mb-8 rounded" data-astro-cid-e6mkutl5></div> <div class="mx-auto max-w-4xl px-6 py-12" data-astro-cid-e6mkutl5> <!-- Section heading --> <!-- Single-column list of experiences --> <div class="flex flex-col gap-8" data-astro-cid-e6mkutl5> ${experiences.map((exp, i) => renderTemplate`<article class="
              relative group
              border-l-4 border-blue-500 dark:border-orange-500
              rounded-2xl bg-white dark:bg-zinc-900
              p-6
              shadow-lg hover:shadow-2xl
              transition-all duration-300
              transform hover:-translate-y-1
            "${addAttribute(`animation: fadeInUp 0.5s ease ${i * 0.1}s both;`, "style")} data-astro-cid-e6mkutl5> <h2 class="font-mono text-2xl font-semibold text-blue-500 dark:text-orange-500 mb-1" data-astro-cid-e6mkutl5> ${exp.title} </h2> <p class="text-sm text-muted-foreground mb-4" data-astro-cid-e6mkutl5> ${exp.company} · ${exp.date} </p> <p class="mb-4 text-gray-700 dark:text-gray-300" data-astro-cid-e6mkutl5> ${exp.description} </p> <p class="font-semibold text-gray-800 dark:text-gray-100 mb-1" data-astro-cid-e6mkutl5>
Tech Stack:
</p> <p class="text-gray-700 dark:text-gray-300" data-astro-cid-e6mkutl5> ${exp.techStack.join(", ")} </p> </article>`)} </div> </div> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page, "data-astro-cid-e6mkutl5": true })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1, "data-astro-cid-e6mkutl5": true })}  ` })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/posts/[...page].astro", void 0);

const $$file = "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/posts/[...page].astro";
const $$url = "/Personal-Website/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
