import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderSlot, u as unescapeHTML } from '../chunks/astro/server_EUbCdetL.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Header, c as $$Footer } from '../chunks/Footer_CKpDfH08.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_CbWZoJNj.mjs';
import { S as SITE } from '../chunks/config_C5p9a8gf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="
        prose
        prose-strong:text-blue-500
        dark:prose-dark
        dark:prose-strong:text-orange-500
        mb-28
        max-w-3xl
        prose-img:border-0
      "> <h1 class="text-2xl tracking-wider sm:text-3xl"> ${frontmatter.title} </h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/layouts/AboutLayout.astro", void 0);

const html = () => "<p><strong class=\"text-blue-500 dark:text-orange-500\">Hello!</strong> I’m a Cybersecurity &#x26; Software Engineer who loves building clean, performant, and secure applications.</p>\n<p>My journey began in 2022 as a <strong class=\"text-blue-500 dark:text-orange-500\">Freelance Software Engineer on Fiverr</strong>, where I delivered end-to-end solutions—designing MySQL schemas, writing Python scripts, containerizing with Docker, and exposing RESTful APIs in C and Python. In 2023, I joined <strong class=\"text-blue-500 dark:text-orange-500\">Accenture</strong> to help architect and launch a full-stack online classroom using Java, Spring Boot, RESTful APIs, React.js, and MongoDB. After graduation, I pivoted into cybersecurity at <strong class=\"text-blue-500 dark:text-orange-500\">Ignite Africa</strong>, designing and enforcing security architectures with Check Point firewalls, Microsoft Intune, internal/external policy frameworks, and Rapid7, while handling threat detection and incident response across our environments.</p>\n<hr>\n<h2 id=\"skills\">Skills</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Category</th><th>Technologies</th></tr></thead><tbody><tr><td><strong>Languages &#x26; Frameworks</strong></td><td>Java · JavaScript · Python · C · TypeScript · Node.js · React.js · Spring Boot</td></tr><tr><td><strong>DevOps &#x26; Cloud</strong></td><td>Docker · Kubernetes · CI/CD (GitHub Actions) · Azure · AWS</td></tr><tr><td><strong>Databases &#x26; Storage</strong></td><td>MySQL · PostgreSQL · MongoDB · Firebase</td></tr><tr><td><strong>Security &#x26; Monitoring</strong></td><td>Check Point · Microsoft Intune · Rapid7 · OWASP · SIEM · Vulnerability Scanning</td></tr><tr><td><strong>Styling &#x26; UI</strong></td><td>Tailwind CSS · CSS3 · HTML5</td></tr><tr><td><strong>Tools &#x26; Design</strong></td><td>Git · GitHub · Figma · IntelliJ IDE</td></tr></tbody></table>\n<hr>\n<h2 id=\"interests\">Interests</h2>\n<p>I’m also passionate about:</p>\n<ul>\n<li><strong class=\"text-blue-500 dark:text-orange-500\">Badminton &#x26; Running</strong> – Training and competing with an eye toward elite performance</li>\n<li><strong class=\"text-blue-500 dark:text-orange-500\">Continuous Learning</strong> – Diving into data science, ML, and AI to build smarter systems</li>\n<li><strong class=\"text-blue-500 dark:text-orange-500\">Cultural Exchange</strong> – Studying new languages and traditions to connect across borders</li>\n<li><strong class=\"text-blue-500 dark:text-orange-500\">Creative Writing</strong> – Crafting introspective poetry that explores human emotion</li>\n</ul>\n<hr>\n<blockquote>\n<p>👉 <strong>Let’s connect</strong> — <a href=\"mailto:emmanuelburuvuru@example.com\">email me</a> or find me on <a href=\"https://www.linkedin.com/in/emmanuel-buruvuru-a20b46246/\">LinkedIn</a>.</p>\n</blockquote>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About","profile":"../assets/images/profile.png"};
				const file = "/Users/emmanuelburuvuru/Desktop/Website/astro-paper/src/pages/about.md";
				const url = "/Personal-Website/about";
				function rawContent() {
					return "   \n                                    \n              \n                                     \n   \n\n<strong class=\"text-blue-500 dark:text-orange-500\">Hello!</strong> I’m a Cybersecurity & Software Engineer who loves building clean, performant, and secure applications.\n\nMy journey began in 2022 as a <strong class=\"text-blue-500 dark:text-orange-500\">Freelance Software Engineer on Fiverr</strong>, where I delivered end-to-end solutions—designing MySQL schemas, writing Python scripts, containerizing with Docker, and exposing RESTful APIs in C and Python. In 2023, I joined <strong class=\"text-blue-500 dark:text-orange-500\">Accenture</strong> to help architect and launch a full-stack online classroom using Java, Spring Boot, RESTful APIs, React.js, and MongoDB. After graduation, I pivoted into cybersecurity at <strong class=\"text-blue-500 dark:text-orange-500\">Ignite Africa</strong>, designing and enforcing security architectures with Check Point firewalls, Microsoft Intune, internal/external policy frameworks, and Rapid7, while handling threat detection and incident response across our environments.\n\n---\n\n## Skills\n\n| Category                   | Technologies                                                                         |\n| -------------------------- | ------------------------------------------------------------------------------------ |\n| **Languages & Frameworks** | Java · JavaScript · Python · C · TypeScript · Node.js · React.js · Spring Boot       |\n| **DevOps & Cloud**         | Docker · Kubernetes · CI/CD (GitHub Actions) · Azure · AWS                            |\n| **Databases & Storage**    | MySQL · PostgreSQL · MongoDB · Firebase                                               |\n| **Security & Monitoring**  | Check Point · Microsoft Intune · Rapid7 · OWASP · SIEM · Vulnerability Scanning       |\n| **Styling & UI**           | Tailwind CSS · CSS3 · HTML5                                                           |\n| **Tools & Design**         | Git · GitHub · Figma · IntelliJ IDE                                                   |\n\n---\n\n## Interests\n\nI’m also passionate about:\n\n\n- <strong class=\"text-blue-500 dark:text-orange-500\">Badminton & Running</strong> – Training and competing with an eye toward elite performance  \n- <strong class=\"text-blue-500 dark:text-orange-500\">Continuous Learning</strong> – Diving into data science, ML, and AI to build smarter systems  \n- <strong class=\"text-blue-500 dark:text-orange-500\">Cultural Exchange</strong> – Studying new languages and traditions to connect across borders \n- <strong class=\"text-blue-500 dark:text-orange-500\">Creative Writing</strong> – Crafting introspective poetry that explores human emotion   \n\n---\n\n> 👉 **Let’s connect** — [email me](mailto:emmanuelburuvuru@example.com) or find me on [LinkedIn](https://www.linkedin.com/in/emmanuel-buruvuru-a20b46246/).\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"skills","text":"Skills"},{"depth":2,"slug":"interests","text":"Interests"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
