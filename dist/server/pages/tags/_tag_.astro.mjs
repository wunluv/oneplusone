/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CCuxw6Jy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BkapTNj8.mjs';
import { g as ghostClient, $ as $$WhatsInside, a as $$Footer } from '../../chunks/WhatsInside_D58SYwcp.mjs';
import { $ as $$HeaderMain, a as $$Breadcrumbs } from '../../chunks/Breadcrumbs_BV3cfFUA.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://one.mojah2.mojahmedia.net");
async function getStaticPaths() {
  const allTags = await ghostClient.tags.browse({ limit: "all" });
  return allTags.map((tag) => {
    return {
      params: { tag: tag.slug },
      props: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const currentPath = Astro2.url.pathname;
  const { tag } = Astro2.params;
  const posts = await ghostClient.posts.browse({
    limit: "all",
    filter: `tag:${tag}`,
    include: ["authors", "tags"]
    // Change to an array
  }).catch((err) => {
    console.error(err);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": `Posts tagged with ${tag}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "HeaderMain", $$HeaderMain, {})} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "currentPath": currentPath })} <main class="pl-6"> <h2 class="text-2xl font-semibold text-gray-800 mb-4">
Posts tagged with ${tag} </h2> <div class="space-y-8 pl-2"> ${(posts || []).map(
    (post) => renderTemplate`<article class="border-b border-gray-200 pb-6"> <h3 class="text-xl font-semibold text-gray-900 mb-2"> <a${addAttribute(`/${post.slug}`, "href")} class="hover:text-blue-600"> ${post.title} </a> </h3> <p class="text-gray-600 mb-4">${post.excerpt}</p> <p class="text-sm text-gray-500">
By: ${post.authors?.[0]?.name || "Unknown Author"} </p> </article>`
  )} </div> </main> </div> ${renderComponent($$result2, "WhatsInside", $$WhatsInside, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/tags/[tag].astro", void 0);

const $$file = "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
