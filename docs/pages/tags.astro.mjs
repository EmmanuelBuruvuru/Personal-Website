import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../chunks/Main_fxplyKgP.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../chunks/Footer_CKpDfH08.mjs';
import { S as SITE } from '../chunks/config_C5p9a8gf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const githubIconUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='icon%20icon-tabler%20icons-tabler-outline%20icon-tabler-brand-github'%3e%3cpath%20stroke='none'%20d='M0%200h24v24H0z'%20fill='none'/%3e%3cpath%20d='M9%2019c-4.3%201.4%20-4.3%20-2.5%20-6%20-3m12%205v-3.5c0%20-1%20.1%20-1.4%20-.5%20-2c2.8%20-.3%205.5%20-1.4%205.5%20-6a4.6%204.6%200%200%200%20-1.3%20-3.2a4.2%204.2%200%200%200%20-.1%20-3.2s-1.1%20-.3%20-3.5%201.3a12.3%2012.3%200%200%200%20-6.2%200c-2.4%20-1.6%20-3.5%20-1.3%20-3.5%20-1.3a4.2%204.2%200%200%200%20-.1%203.2a4.6%204.6%200%200%200%20-1.3%203.2c0%204.6%202.7%205.7%205.5%206c-.6%20.6%20-.6%201.2%20-.5%202v3.5'%20/%3e%3c/svg%3e";

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Avail Sport Application",
      description: "A FlutterFlow app connecting users with sports, gym, and educational activities in Mauritius.",
      status: "In Progress",
      technologies: ["FlutterFlow", "Firebase Database", "Figma Design"],
      // on FlutterFlow – no repo yet
      repo: null,
      repoHint: "No public repo (built in FlutterFlow)"
    },
    {
      title: "Online Classroom for Accenture",
      description: "Internal learning platform for Accenture employees, with live sessions and resource sharing.",
      status: "Completed",
      technologies: ["Spring Boot", "Java", "REST API", "React.js", "MongoDB"],
      // private repo
      repo: null,
      repoHint: "Private company repo"
    },
    {
      title: "Custom Machine Learning Models",
      description: "Created and deployed ML models to predict business\u2010specific metrics on Azure VMs.",
      status: "Completed",
      technologies: ["Python", "Anaconda", "Azure VMs", "LLaMA"],
      // replace with your actual GitHub URL
      repo: "https://github.com/yourusername/custom-ml-models",
      repoHint: null
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Projects | ${SITE.title}`, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-os4i7owy": true })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Projects", "pageDesc": "A selection of projects I\u2019ve built or contributed to.", "data-astro-cid-os4i7owy": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="h-1 w-20 bg-blue-500 dark:bg-orange-500 mt-2 mb-8 rounded" data-astro-cid-os4i7owy></div> <div class="mx-auto max-w-4xl px-6 py-12" data-astro-cid-os4i7owy> <!-- Single column --> <div class="flex flex-col gap-4" data-astro-cid-os4i7owy> ${projects.map((proj, i) => renderTemplate`<article class="
              relative group
              border-l-4 border-blue-500 dark:border-orange-500
              rounded-2xl bg-white dark:bg-zinc-900
              p-6
              shadow-lg hover:shadow-2xl
              transition-all duration-300
              transform hover:-translate-y-1
            "${addAttribute(`animation: fadeInUp 0.5s ease ${i * 0.1}s both;`, "style")} data-astro-cid-os4i7owy> <div class="flex items-center justify-between" data-astro-cid-os4i7owy> <h2 class="font-mono text-2xl font-semibold text-blue-500 dark:text-orange-500" data-astro-cid-os4i7owy> ${proj.title} </h2> <!-- GitHub icon --> ${proj.repo ? renderTemplate`<a${addAttribute(proj.repo, "href")} target="_blank" rel="noopener noreferrer" class="opacity-80 hover:opacity-100 transition-opacity" title="View source on GitHub" data-astro-cid-os4i7owy> <img${addAttribute(githubIconUrl, "src")} alt="GitHub" class="w-6 h-6" data-astro-cid-os4i7owy> </a>` : renderTemplate`<span class="opacity-50 cursor-default"${addAttribute(proj.repoHint, "title")} data-astro-cid-os4i7owy> <img${addAttribute(githubIconUrl, "src")} alt="GitHub" class="w-6 h-6" data-astro-cid-os4i7owy> </span>`} </div> <p class="text-sm text-blue-600 dark:text-blue-400 italic mt-1" data-astro-cid-os4i7owy>
Status: ${proj.status} </p> <p class="mt-4 text-gray-700 dark:text-gray-300" data-astro-cid-os4i7owy> ${proj.description} </p> <p class="mt-4 font-semibold text-gray-800 dark:text-gray-100" data-astro-cid-os4i7owy>
Tech Stack:
</p> <p class="text-gray-700 dark:text-gray-300" data-astro-cid-os4i7owy> ${proj.technologies.join(", ")} </p> </article>`)} </div> </div> ` })} ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-os4i7owy": true })}  ` })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/tags/index.astro", void 0);

const $$file = "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/tags/index.astro";
const $$url = "/Personal-Website/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
