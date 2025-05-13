import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const breadcrumbList = currentUrlPath.split("/").slice(1);
  if (breadcrumbList[0] === "posts") {
    const pageNum = Number(breadcrumbList[1]) || 1;
    breadcrumbList.splice(
      0,
      2,
      `Experiences${pageNum > 1 ? ` (Page ${pageNum})` : ""}`
    );
  }
  if (breadcrumbList[0] === "tags" && breadcrumbList.length === 1) {
    breadcrumbList[0] = "projects";
  }
  if (breadcrumbList[0] === "tags" && breadcrumbList.length >= 3) {
    const pageNum = Number(breadcrumbList[2]) || 1;
    breadcrumbList.splice(
      0,
      3,
      `Projects${pageNum > 1 ? ` (Page ${pageNum})` : ""}`
    );
  }
  return renderTemplate`${maybeRenderHead()}<nav class="mx-auto mt-8 mb-1 w-full max-w-3xl px-4" aria-label="breadcrumb"> <ul class="font-light [&>li]:inline [&>li:not(:last-child)>a]:hover:opacity-100"> <li> <a href="/" class="opacity-80">Home</a> <span aria-hidden="true" class="opacity-80">»</span> </li> ${breadcrumbList.map(
    (crumb, index) => index === breadcrumbList.length - 1 ? renderTemplate`<li> <span${addAttribute(["capitalize opacity-75", { lowercase: index > 0 }], "class:list")} aria-current="page"> ${decodeURIComponent(crumb)} </span> </li>` : renderTemplate`<li> <a${addAttribute(`/${crumb.replace(/\s*\(.*?\)/, "").toLowerCase()}/`, "href")} class="capitalize opacity-70"> ${crumb} </a> <span aria-hidden="true">»</span> </li>`
  )} </ul> </nav>`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
