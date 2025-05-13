import { c as createComponent, b as createAstro, e as addAttribute, g as renderScript, a as renderTemplate, d as renderSlot, n as renderHead, r as renderComponent, u as unescapeHTML, m as maybeRenderHead } from './astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { S as SITE } from './config_C5p9a8gf.mjs';

const $$Astro$6 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/node_modules/.pnpm/astro@5.5.2_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.2_typescript@5.8.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/node_modules/.pnpm/astro@5.5.2_jiti@2.4.2_lightningcss@1.29.2_rollup@4.40.2_typescript@5.8.2_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const googleSiteVerification = undefined                                               ;
  const {
    title = SITE.title,
    author = SITE.author,
    profile = SITE.author,
    description = SITE.desc,
    ogImage = `/${SITE.ogImage}` ,
    canonicalURL = new URL(Astro2.url.pathname, Astro2.url),
    pubDatetime,
    modDatetime,
    scrollSmooth = false
  } = Astro2.props;
  const socialImageURL = new URL(ogImage, Astro2.url);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: socialImageURL.toString(),
    datePublished: pubDatetime?.toISOString(),
    ...modDatetime && { dateModified: modDatetime.toISOString() },
    author: [
      {
        "@type": "Person",
        name: author,
        ...profile && { url: profile }
      }
    ]
  };
  return renderTemplate(_a || (_a = __template(["<html", "", ' data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- Favicon now points to icon.svg --><link rel="icon" type="image/svg+xml" href="/icon.png"><link rel="canonical"', '><meta name="generator"', "><!-- General Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author"', '><link rel="sitemap" href="/sitemap-index.xml"><!-- Open Graph / Facebook --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', "><!-- Article Published/Modified time -->", "", '<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Google JSON-LD Structured data --><script type="application/ld+json">', '</script><!-- RSS feed auto-discovery --><link rel="alternate" type="application/rss+xml"', "", '><meta name="theme-color" content="">', "", '<script src="/toggle-theme.js"></script>', "</head> <body data-astro-cid-sckkx6r4> ", " </body></html>"])), addAttribute(SITE.lang, "lang"), addAttribute(scrollSmooth ? "scroll-smooth" : "", "class"), addAttribute(canonicalURL, "href"), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(author, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(socialImageURL, "content"), pubDatetime && renderTemplate`<meta property="article:published_time"${addAttribute(pubDatetime.toISOString(), "content")}>`, modDatetime && renderTemplate`<meta property="article:modified_time"${addAttribute(modDatetime.toISOString(), "content")}>`, addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(socialImageURL, "content"), unescapeHTML(JSON.stringify(structuredData)), addAttribute(SITE.title, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), googleSiteVerification, renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Hr = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hr;
  const { noPadding = false, ariaHidden = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-3xl mx-auto ${noPadding ? "px-0" : "px-4"}`, "class")}> <hr class="border-border w-full"${addAttribute(ariaHidden, "aria-hidden")}> </div>`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Hr.astro", void 0);

const IconMoon = new Proxy({"src":"/Personal-Website/_astro/IconMoon.CRxdR147.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconMoon.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconMoon.svg");
							return target[name];
						}
					});

const IconSunHigh = new Proxy({"src":"/Personal-Website/_astro/IconSunHigh.EHu4P2Sl.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconSunHigh.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconSunHigh.svg");
							return target[name];
						}
					});

const IconMenuDeep = new Proxy({"src":"/Personal-Website/_astro/IconMenuDeep.CczWFiGg.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconMenuDeep.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconMenuDeep.svg");
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const currentPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const isActive = (path) => {
    const currentPathArray = currentPath.split("/").filter((p) => p.trim());
    const pathArray = path.split("/").filter((p) => p.trim());
    return currentPath === path || currentPathArray[0] === pathArray[0];
  };
  return renderTemplate`${maybeRenderHead()}<header> <a id="skip-to-content" href="#main-content" class="absolute -top-full left-16 z-50 bg-background px-3 py-2 text-accent backdrop-blur-lg transition-all focus:top-4">
Skip to content
</a> <div id="nav-container" class="mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row"> <div id="top-nav-wrap" class="relative flex w-full items-baseline justify-between bg-background p-4 sm:items-center sm:py-6"> <a href="/" class="inline-flex items-center justify-center rounded-full border-3 border-blue-500 dark:border-orange-400 p-0.5 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 transition-all hover:scale-105"> <img src="/images/profile.png" alt="Emmanuel Buruvuru" class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" width="80" height="80" loading="lazy"> </a> <nav id="nav-menu" class="flex w-full flex-col items-center sm:ml-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0"> <button id="menu-btn" class="focus-outline self-end p-2 sm:hidden" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items"> ${renderComponent($$result, "IconMenuDeep", IconMenuDeep, { "id": "menu-icon" })} </button> <ul id="menu-items"${addAttribute([
    "mt-4 grid w-44 grid-cols-2 place-content-center gap-2",
    "[&>li>a]:block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-center [&>li>a]:font-medium [&>li>a]:hover:text-accent sm:[&>li>a]:px-2 sm:[&>li>a]:py-1",
    "hidden",
    "sm:mt-0 sm:ml-0 sm:flex sm:w-auto sm:gap-x-5 sm:gap-y-0"
  ], "class:list")}> <li class="col-span-2"> <a href="/posts"${addAttribute({ "active-nav": isActive("/posts") }, "class:list")}>
Experience
</a> </li> <li class="col-span-2"> <a href="/tags"${addAttribute({ "active-nav": isActive("/tags") }, "class:list")}>
Projects
</a> </li> <li class="col-span-2"> <a href="/about"${addAttribute({ "active-nav": isActive("/about") }, "class:list")}>
About
</a> </li> ${renderTemplate`<li class="col-span-1 flex items-center justify-center"> <button id="theme-btn" class="focus-outline relative size-12 p-4 sm:size-8 hover:[&>svg]:stroke-accent" title="Toggles light & dark" aria-label="auto" aria-live="polite"> ${renderComponent($$result, "IconMoon", IconMoon, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" })} ${renderComponent($$result, "IconSunHigh", IconSunHigh, { "class": "absolute top-[50%] left-[50%] -translate-[50%] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" })} </button> </li>`} </ul> </nav> </div> </div> ${renderComponent($$result, "Hr", $$Hr, {})} </header> ${renderScript($$result, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Header.astro", void 0);

const IconMail = new Proxy({"src":"/Personal-Website/_astro/IconMail.BsR8RxJL.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconMail.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconMail.svg");
							return target[name];
						}
					});

const IconGitHub = new Proxy({"src":"/Personal-Website/_astro/IconGitHub.D4TpU-sh.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconGitHub.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconGitHub.svg");
							return target[name];
						}
					});

new Proxy({"src":"/Personal-Website/_astro/IconBrandX.ATC87rTm.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconBrandX.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconBrandX.svg");
							return target[name];
						}
					});

const IconLinkedin = new Proxy({"src":"/Personal-Website/_astro/IconLinkedin.CgFOWy_H.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconLinkedin.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconLinkedin.svg");
							return target[name];
						}
					});

new Proxy({"src":"/Personal-Website/_astro/IconWhatsapp.B1vN587S.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconWhatsapp.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconWhatsapp.svg");
							return target[name];
						}
					});

new Proxy({"src":"/Personal-Website/_astro/IconFacebook.DViGtK9D.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconFacebook.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconFacebook.svg");
							return target[name];
						}
					});

new Proxy({"src":"/Personal-Website/_astro/IconTelegram.Btn5McfO.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconTelegram.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconTelegram.svg");
							return target[name];
						}
					});

new Proxy({"src":"/Personal-Website/_astro/IconPinterest.Fl4F684Z.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconPinterest.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconPinterest.svg");
							return target[name];
						}
					});

const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/Sycolee78",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuel-buruvuru-a20b46246/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin
  },
  {
    name: "Mail",
    href: "mailto:emmanuelburuvuru@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail
  }
];

const $$Astro$2 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const {
    id,
    href,
    class: className = "",
    ariaLabel,
    title,
    disabled = false
  } = Astro2.props;
  return renderTemplate`${disabled ? renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(["group inline-block", className], "class:list")}${addAttribute(title, "title")}${addAttribute(disabled, "aria-disabled")}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`<a${addAttribute(id, "id")}${addAttribute(href, "href")}${addAttribute(["group inline-block hover:text-accent", className], "class:list")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(title, "title")}>${renderSlot($$result, $$slots["default"])}</a>`}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/LinkButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Socials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Socials;
  const { centered = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex-wrap justify-center gap-1", { flex: centered }], "class:list")}> ${SOCIALS.map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": social.href, "class": "p-2 hover:rotate-6 sm:p-1", "title": social.linkTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "social.icon", social.icon, { "class": "inline-block size-6 scale-125 fill-transparent stroke-current stroke-2 opacity-90 group-hover:fill-transparent sm:scale-110" })} <span class="sr-only">${social.linkTitle}</span> ` })}`)} </div>`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Socials.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const { noMarginTop = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(["w-full", { "mt-auto": !noMarginTop }], "class:list")}> ${renderComponent($$result, "Hr", $$Hr, { "noPadding": true })} <div class="flex flex-col items-center justify-between py-6 sm:flex-row-reverse sm:py-4"> ${renderComponent($$result, "Socials", $$Socials, { "centered": true })} <div class="my-2 flex flex-col items-center whitespace-nowrap sm:flex-row"> <span>Copyright &#169; ${currentYear}</span> <span class="hidden sm:inline">&nbsp;|&nbsp;</span> <span>All rights reserved.</span> </div> </div> </footer>`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Footer.astro", void 0);

export { $$Layout as $, SOCIALS as S, $$Header as a, $$LinkButton as b, $$Footer as c, $$Socials as d };
