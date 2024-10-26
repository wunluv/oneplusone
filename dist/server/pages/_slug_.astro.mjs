/* empty css                                  */
import { c as createAstro, a as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, d as addAttribute, b as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_CCuxw6Jy.mjs';
import 'kleur/colors';
import { s as seo, b as book, c as author, g as ghostClient, $ as $$WhatsInside, a as $$Footer } from '../chunks/WhatsInside_D58SYwcp.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_qTecStGZ.mjs';
import 'clsx';
/* empty css                                 */
/* empty css                                  */
import { $ as $$HeaderMain, a as $$Breadcrumbs } from '../chunks/Breadcrumbs_BV3cfFUA.mjs';
import { $ as $$LatestBlogs } from '../chunks/latestBlogs_jLUo6qPy.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://one.mojah2.mojahmedia.net");
const $$LayoutBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutBlog;
  Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en-US"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><link rel="canonical"', '><meta name="generator" content="Astro + headless Ghost"><meta name="robots" content="index,follow"><meta name="googlebot" content="index,follow"><meta name="description"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:image"', '><meta property="og:image:width" content="800"><meta property="og:image:height" content="600"><meta property="og:site_name"', '><meta property="og:locale"', '><meta property="og:type" content="book"><meta property="book:author"', '><meta property="book:isbn"', '><meta property="book:release_date"', '><meta property="og:type" content="product"><meta property="product:price:amount"', '><meta property="product:price:currency"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', "><title>", '</title><!-- Google tag (gtag.js) --><script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-9FXFDTDRH4"><\/script><script type="text/partytown">\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-9FXFDTDRH4");\n    <\/script>', "</head> <body> ", "  </body> </html>"])), addAttribute(seo.canonical, "href"), addAttribute(seo.description, "content"), addAttribute(seo.canonical, "content"), addAttribute(seo.title, "content"), addAttribute(seo.description, "content"), addAttribute(seo.canonical + seo.image, "content"), addAttribute(seo.title, "content"), addAttribute(seo.locale, "content"), addAttribute(author.name, "content"), addAttribute(book.isbn, "content"), addAttribute(book.releaseDate, "content"), addAttribute(book.price, "content"), addAttribute(book.currency, "content"), addAttribute(seo.title, "content"), addAttribute(seo.description, "content"), seo.title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/layouts/LayoutBlog.astro", void 0);

const $$Astro = createAstro("https://one.mojah2.mojahmedia.net");
async function getStaticPaths() {
  const posts = await ghostClient.posts.browse({
    limit: "all",
    include: ["authors", "tags"]
  }).catch((err) => {
    console.error(err);
    return [];
  });
  return posts.map((post) => {
    return {
      params: {
        slug: post.slug
      },
      props: {
        post
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const currentPath = Astro2.url.pathname;
  const { post } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "LayoutBlog", $$LayoutBlog, { "title": "{post.title}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "HeaderMain", $$HeaderMain, {})} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "currentPath": currentPath })} <h1 class="text-3xl ml-2 mb-8 font-semibold text-gray-900 px-4 font-serif"> ${post.title} </h1> ${renderComponent($$result2, "Image", $$Image, { "src": post.feature_image ?? "http://localhost:2368/content/images/wordpress/2013/05/dreamstime_xs_12977880_3.jpg", "alt": post.feature_image_alt || post.title, "class": "mb-2 mt-10 pl-8", "widths": [800], "inferSize": true })} <span>${post.feature_image_alt}</span> <div class="tags mb-8 ml-8 mt-5">
Tags:
${post.tags && post.tags.length > 0 ? post.tags.slice(0, 3).map((tag, index) => renderTemplate`<span class="uppercase bg-gray-100 rounded px-2 py-1 text-gray-600 text-sm mr-2"> <a${addAttribute(`/tags/${tag.slug}`, "href")}>${tag.name}</a> </span>`) : null} </div> <div class="post-details flex ml-10 mb-10"> <div class="author-info flex items-center"> <img${addAttribute(post.authors?.[0]?.profile_image, "src")}${addAttribute(post.authors?.[0]?.name || "Unkown Author", "alt")} class="w-10 h-10 rounded-full object-cover author-image mr-2"> <div class="flex flex-col text-xs text-gray-500"> <span class="mr-2">${post.authors?.[0]?.name || "Unknown Author"}</span> <span class="mr-2">${post.published_at ? new Date(post.published_at).toLocaleString(
    "en-US",
    {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    }
  ) : "Unknown Date"}</span> <span>${post.reading_time} min read</span> </div> </div> </div> <div class="post-content ml-8 mr-8"> ${renderComponent($$result2, "Fragment", Fragment, { "class": "pl-8" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(post.html)}` })} </div> </div> ` })} ${renderComponent($$result, "LatestBlogs", $$LatestBlogs, { "number_of_posts": 12 })} ${renderComponent($$result, "WhatsInside", $$WhatsInside, {})} ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/[slug].astro", void 0);

const $$file = "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
