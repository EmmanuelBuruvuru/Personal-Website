import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, r as renderComponent, f as renderTransition, a as renderTemplate, g as renderScript } from '../../chunks/astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BWMMlk2C.mjs';
import { b as $$LinkButton, $ as $$Layout, a as $$Header, c as $$Footer } from '../../chunks/Footer_CKpDfH08.mjs';
/* empty css                                    */
import { $ as $$Datetime } from '../../chunks/Datetime_gRLAiT2s.mjs';
import { S as SITE } from '../../chunks/config_C5p9a8gf.mjs';
import { g as getPath, s as slugifyStr } from '../../chunks/getPath_DRkJT768.mjs';
import { g as getSortedPosts } from '../../chunks/getSortedPosts_CDu_myWc.mjs';
export { renderers } from '../../renderers.mjs';

const IconHash = new Proxy({"src":"/Personal-Website/_astro/IconHash.D97SZ4jU.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconHash.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconHash.svg");
							return target[name];
						}
					});

const $$Astro$3 = createAstro();
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, tagName, size = "sm" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute([
    "group inline-block group-hover:cursor-pointer",
    size === "sm" ? "my-1 underline-offset-4" : "mx-1 my-3 underline-offset-8"
  ], "class:list")}> <a${addAttribute(`/tags/${tag}/`, "href")}${addAttribute([
    "relative pr-2 text-lg underline decoration-dashed group-hover:-top-0.5 group-hover:text-accent focus-visible:p-1",
    { "text-sm": size === "sm" }
  ], "class:list")}${addAttribute(renderTransition($$result, "36ssibgs", "", tag), "data-astro-transition-scope")}> ${renderComponent($$result, "IconHash", IconHash, { "class:list": [
    "inline-block opacity-80",
    { "-mr-3.5 size-4": size === "sm" },
    { "-mr-5 size-6": size === "lg" }
  ] })}
&nbsp;<span>${tagName}</span> </a> </li>`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Tag.astro", "self");

const IconEdit = new Proxy({"src":"/Personal-Website/_astro/IconEdit.C9zdzJLB.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconEdit.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconEdit.svg");
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$EditPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EditPost;
  const { hideEditPost, post, class: className = "" } = Astro2.props;
  const href = `${SITE.editPost.url}${post.filePath}`;
  const showEditPost = !hideEditPost && href.trim() !== "";
  return renderTemplate`${showEditPost && renderTemplate`${maybeRenderHead()}<div${addAttribute(["opacity-80", className], "class:list")}><span aria-hidden="true" class="max-sm:hidden">
|
</span><a class="space-x-1.5 hover:opacity-75"${addAttribute(href, "href")} rel="noopener noreferrer" target="_blank">${renderComponent($$result, "IconEdit", IconEdit, { "class": "inline-block size-6" })}<span class="italic max-sm:text-sm sm:inline">${SITE.editPost.text}</span></a></div>`}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/EditPost.astro", void 0);

const IconChevronLeft = new Proxy({"src":"/Personal-Website/_astro/IconChevronLeft.DuweWiRq.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconChevronLeft.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconChevronLeft.svg");
							return target[name];
						}
					});

const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="mx-auto flex w-full max-w-3xl items-center justify-start px-2">${renderComponent($$result, "LinkButton", $$LinkButton, { "id": "back-button", "href": "/", "class": "focus-outline mt-8 mb-2 flex hover:text-foreground/75" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconChevronLeft", IconChevronLeft, { "class": "inline-block size-6" })}<span>Go back</span>` })}</div>`}${renderScript($$result, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/BackButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/BackButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$PostDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post, posts } = Astro2.props;
  const title = "My Experience";
  const {
    author,
    description,
    ogImage: initOgImage,
    canonicalURL,
    pubDatetime,
    modDatetime,
    timezone,
    tags = [],
    hideEditPost
  } = post.data;
  let ogImageUrl;
  if (typeof initOgImage === "string") {
    ogImageUrl = initOgImage;
  } else if (initOgImage?.src) {
    ogImageUrl = initOgImage.src;
  }
  if (!ogImageUrl && SITE.dynamicOgImage) {
    ogImageUrl = `${getPath(post.id, post.filePath)}/index.png`;
  }
  const ogImage = ogImageUrl ? new URL(ogImageUrl, Astro2.url.origin).href : void 0;
  const layoutProps = {
    title: `${title} | ${SITE.title}`,
    author,
    description,
    pubDatetime,
    modDatetime,
    canonicalURL,
    ogImage,
    scrollSmooth: true
  };
  const allPosts = posts.map(({ data: { title: title2 }, id }) => ({
    slug: id,
    title: title2
  }));
  const currentPostIndex = allPosts.findIndex((a) => a.slug === post.id);
  currentPostIndex !== 0 ? allPosts[currentPostIndex - 1] : null;
  currentPostIndex !== allPosts.length ? allPosts[currentPostIndex + 1] : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { ...layoutProps }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "BackButton", $$BackButton, {})} ${maybeRenderHead()}<main id="main-content"${addAttribute([
    "mx-auto w-full max-w-3xl px-4 pb-12",
    { "mt-8": false }
  ], "class:list")} data-pagefind-body> <h1 class="inline-block text-2xl font-bold text-accent sm:text-3xl"${addAttribute(renderTransition($$result2, "fam6wyqg", "", slugifyStr(title)), "data-astro-transition-scope")}> ${title} </h1> <div class="flex items-center gap-4"> ${renderComponent($$result2, "Datetime", $$Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime, "timezone": timezone, "size": "lg", "class": "my-2" })} ${renderComponent($$result2, "EditPost", $$EditPost, { "class": "max-sm:hidden", "hideEditPost": hideEditPost, "post": post })} </div> <article id="article" class="mx-auto mt-10 max-w-3xl px-4"> <section class="space-y-12" data-aos="fade-up" data-aos-duration="800"> <div class="border-l-4 border-blue-500 pl-4"> <h3 class="text-2xl font-semibold text-blue-700">Cybersecurity Engineer</h3> <p class="text-sm text-muted-foreground mb-2">Ignite Africa – Jun 2024 to May 2025</p> <ul class="list-disc list-inside text-base leading-relaxed text-gray-700"> <li>Implemented security measures to protect systems, networks, and data.</li> <li>Developed and enforced security policies and procedures.</li> <li>Monitored security alerts and responded to incidents.</li> </ul> </div> <div class="border-l-4 border-green-500 pl-4" data-aos="fade-up" data-aos-delay="100"> <h3 class="text-2xl font-semibold text-green-700">Software Engineer</h3> <p class="text-sm text-muted-foreground mb-2">Accenture – Feb 2023 to Nov 2023</p> <ul class="list-disc list-inside text-base leading-relaxed text-gray-700"> <li>Developed web applications using Spring Boot and React JS.</li> <li>Integrated advanced features for enhanced user experiences.</li> </ul> </div> <div class="border-l-4 border-purple-500 pl-4" data-aos="fade-up" data-aos-delay="200"> <h3 class="text-2xl font-semibold text-purple-700">Freelance Software Engineer</h3> <p class="text-sm text-muted-foreground mb-2">Fiverr – Aug 2022 to Feb 2023</p> <ul class="list-disc list-inside text-base leading-relaxed text-gray-700"> <li>Built scripts and automations in Python for diverse clients.</li> <li>Designed and styled responsive web content with HTML, CSS, and JavaScript.</li> </ul> </div> </section> </article> <hr class="my-8 border-dashed"> ${renderComponent($$result2, "EditPost", $$EditPost, { "class": "sm:hidden", "hideEditPost": hideEditPost, "post": post })} <ul class="mt-4 mb-8 sm:my-8"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": slugifyStr(tag), "tagName": tag })}`)} </ul> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/PostDetails.astro", "self");

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: getPath(post.id, post.filePath, false) },
    props: { post }
  }));
  return postResult;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post, "posts": sortedPosts })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/posts/[...slug]/index.astro", void 0);

const $$file = "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/posts/[...slug]/index.astro";
const $$url = "/Personal-Website/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
