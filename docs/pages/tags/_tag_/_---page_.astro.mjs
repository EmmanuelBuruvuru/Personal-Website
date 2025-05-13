import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, e as addAttribute, f as renderTransition, m as maybeRenderHead } from '../../../chunks/astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_BWMMlk2C.mjs';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../../../chunks/Footer_CKpDfH08.mjs';
import { $ as $$Main } from '../../../chunks/Main_fxplyKgP.mjs';
import { $ as $$Card } from '../../../chunks/Card_DYQWpnOL.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_CHIpC_nv.mjs';
import { s as slugifyStr, a as slugifyAll } from '../../../chunks/getPath_DRkJT768.mjs';
import { p as postFilter, g as getSortedPosts } from '../../../chunks/getSortedPosts_CDu_myWc.mjs';
import { S as SITE } from '../../../chunks/config_C5p9a8gf.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const getUniqueTags = (posts) => {
  const tags = posts.filter(postFilter).flatMap((post) => post.data.tags).map((tag) => ({ tag: slugifyStr(tag), tagName: tag })).filter(
    (value, index, self) => self.findIndex((tag) => tag.tag === value.tag) === index
  ).sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
};

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag }) => {
    const tagPosts = getPostsByTag(posts, tag);
    return paginate(tagPosts, {
      params: { tag },
      props: { tagName: tag },
      pageSize: SITE.postPerPage
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  const { page, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": ["Tag:", tagName], "titleTransition": tag, "pageDesc": `All the articles tagged "${tagName}".` }, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul class="space-y-6"> ${page.data.map((post) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { ...post })}`)} </ul> `, "title": async ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "7yucybdb", "", tag), "data-astro-transition-scope")}>
Tag: ${tagName} </h1>` })}  ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": !page.lastPage })} ` })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/tags/[tag]/[...page].astro", "self");

const $$file = "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/tags/[tag]/[...page].astro";
const $$url = "/Personal-Website/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
