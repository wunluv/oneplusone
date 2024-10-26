/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CCuxw6Jy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BkapTNj8.mjs';
import { g as ghostClient, $ as $$WhatsInside, a as $$Footer } from '../chunks/WhatsInside_D58SYwcp.mjs';
import { $ as $$HeaderMain, a as $$Breadcrumbs } from '../chunks/Breadcrumbs_BV3cfFUA.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://one.mojah2.mojahmedia.net");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPath = Astro2.url.pathname;
  const tags = await ghostClient.tags.browse({ limit: "all" }).catch((err) => {
    console.error(err);
    return [];
  });
  const tagsWithCounts = await Promise.all(
    tags.map(async (tag) => {
      const posts = await ghostClient.posts.browse({ filter: `tag:${tag.slug}` }).catch((err) => {
        console.error(err);
        return [];
      });
      return {
        ...tag,
        postCount: posts.length
      };
    })
  );
  const filteredTags = tagsWithCounts.filter((tag) => tag.postCount > 0);
  filteredTags.sort((a, b) => b.postCount - a.postCount);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Blog Tags" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "HeaderMain", $$HeaderMain, {})} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "currentPath": currentPath })} <main class="py-6"> <h2 class="text-3xl font-bold text-gray-900 mb-4">All Blog Tags</h2> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"> ${filteredTags.map((tag) => renderTemplate`<a${addAttribute(`/tags/${tag.slug}`, "href")} class="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out"> <h3 class="text-base font-medium text-gray-900 mb-1 truncate"> ${tag.name} </h3> <p class="text-s text-gray-600"> ${tag.postCount} ${tag.postCount === 1 ? "post" : "posts"} </p> </a>`)} </div> </main> </div> ${renderComponent($$result2, "WhatsInside", $$WhatsInside, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/tags/index.astro", void 0);

const $$file = "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
