import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { S as SITE } from './config_C5p9a8gf.mjs';

const IconCalendar = new Proxy({"src":"/Personal-Website/_astro/IconCalendar.C0xY3fv4.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconCalendar.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/assets/icons/IconCalendar.svg");
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Datetime = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Datetime;
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const {
    pubDatetime,
    modDatetime,
    size = "sm",
    class: className = "",
    timezone: postTimezone
  } = Astro2.props;
  const latestDatetime = modDatetime && modDatetime > pubDatetime ? modDatetime : pubDatetime;
  const datetime = dayjs(latestDatetime).tz(postTimezone || SITE.timezone);
  const date = datetime.format("D MMM, YYYY");
  const time = datetime.format("hh:mm A");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex items-end space-x-2 opacity-80", className], "class:list")}> ${renderComponent($$result, "IconCalendar", IconCalendar, { "class:list": [
    "inline-block size-6 min-w-[1.375rem]",
    { "scale-90": size === "sm" }
  ] })} ${modDatetime && modDatetime > pubDatetime ? renderTemplate`<span${addAttribute(["text-sm italic", { "sm:text-base": size === "lg" }], "class:list")}>
Updated:
</span>` : renderTemplate`<span class="sr-only">Published:</span>`} <span${addAttribute(["text-sm italic", { "sm:text-base": size === "lg" }], "class:list")}> <time${addAttribute(datetime.toISOString(), "datetime")}>${date}</time> <span aria-hidden="true"> | </span> <span class="sr-only">&nbsp;at&nbsp;</span> <span class="text-nowrap">${time}</span> </span> </div>`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/components/Datetime.astro", void 0);

export { $$Datetime as $ };
