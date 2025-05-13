import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { b as $$LinkButton } from './Footer_CKpDfH08.mjs';

const IconArrowLeft = new Proxy({"src":"/Personal-Website/_astro/IconArrowLeft.7rKuNJsZ.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconArrowLeft.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconArrowLeft.svg");
							return target[name];
						}
					});

const IconArrowRight = new Proxy({"src":"/Personal-Website/_astro/IconArrowRight.D72qTBYn.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconArrowRight.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconArrowRight.svg");
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page } = Astro2.props;
  return renderTemplate`${page.lastPage > 1 && renderTemplate`${maybeRenderHead()}<nav class="mt-auto mb-8 flex justify-center" aria-label="Pagination">${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.prev, "href": page.url.prev, "class:list": ["mr-4 select-none", { "opacity-50": !page.url.prev }], "ariaLabel": "Previous" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "IconArrowLeft", IconArrowLeft, { "class": "inline-block" })}
Prev
` })}${page.currentPage} / ${page.lastPage}${renderComponent($$result, "LinkButton", $$LinkButton, { "disabled": !page.url.next, "href": page.url.next, "class:list": ["ml-4 select-none", { "opacity-50": !page.url.next }], "ariaLabel": "Next" }, { "default": ($$result2) => renderTemplate`
Next
${renderComponent($$result2, "IconArrowRight", IconArrowRight, { "class": "inline-block" })}` })}</nav>`}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
