import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_CCuxw6Jy.mjs';
import 'kleur/colors';
import { g as ghostClient, f as fetchSettings, d as getGhostImgPath } from './WhatsInside_D58SYwcp.mjs';
import { $ as $$Image } from './_astro_assets_qTecStGZ.mjs';
/* empty css                          */

const $$Astro = createAstro("https://one.mojah2.mojahmedia.net");
const $$LatestBlogs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestBlogs;
  const { number_of_posts = 6 } = Astro2.props;
  let posts = [];
  try {
    posts = await ghostClient.posts.browse({ limit: number_of_posts, order: "published_at DESC", include: "authors,tags" });
  } catch (err) {
    console.error(err);
  }
  let settings;
  try {
    settings = await fetchSettings();
  } catch (err) {
    console.error(err);
  }
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50" data-astro-cid-ifodokdz> <div class="max-w-screen-xl mx-auto pt-16 pb-4 px-4" data-astro-cid-ifodokdz> <h2 class="text-3xl leading-9 font-extrabold text-gray-900" data-astro-cid-ifodokdz>
Last ${number_of_posts} entries from the Blog
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-astro-cid-ifodokdz> ${posts && posts.length > 0 ? posts.map((post) => {
    const postImage = getGhostImgPath(settings.url, post.feature_image, 100);
    console.log("Settings URL:", settings.url);
    console.log("Post Feature Image:", post.feature_image);
    console.log("Generated Post Image:", postImage);
    return renderTemplate`<div class="flex flex-col"${addAttribute(post.id, "key")} data-astro-cid-ifodokdz> <!-- todo Change the image url to a local one later*/ --> ${renderComponent($$result, "Image", $$Image, { "src": postImage || "http://localhost:2368/content/images/wordpress/2013/05/dreamstime_xs_12977880_3.jpg", "alt": post.feature_image_alt || post.title, "class": "post-card-image mb-2 mt-10", "widths": [400], "inferSize": true, "data-astro-cid-ifodokdz": true })} <span class="uppercase text-xs" data-astro-cid-ifodokdz> ${post.tags.length > 0 ? renderTemplate`<a${addAttribute(`/tags/${post.tags[0].slug}`, "href")} data-astro-cid-ifodokdz>${post.tags[0].name}</a>` : null} </span> <p class="text-xl mb-3" data-astro-cid-ifodokdz> <a${addAttribute(`/${post.slug}`, "href")} class="underline text-book-gray hover:bg-book-yellow transition ease-in-out duration-300" data-astro-cid-ifodokdz>${post.title}</a> </p> <div class="post-details flex" data-astro-cid-ifodokdz> <div class="author-info flex items-center" data-astro-cid-ifodokdz> <img${addAttribute(post.authors[0].profile_image, "src")}${addAttribute(post.authors[0].name, "alt")} class="w-10 h-10 rounded-full object-cover author-image mr-2" data-astro-cid-ifodokdz> <div class="flex flex-col text-xs text-gray-500" data-astro-cid-ifodokdz> <span class="mr-2" data-astro-cid-ifodokdz>${post.authors[0].name}</span> <span class="mr-2" data-astro-cid-ifodokdz>${new Date(post.published_at).toLocaleString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</span> <span data-astro-cid-ifodokdz>${post.reading_time} min read</span> </div> </div> </div> </div>`;
  }) : renderTemplate`<p data-astro-cid-ifodokdz>No posts available.</p>`} </div> </div> </div>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/latestBlogs.astro", void 0);

export { $$LatestBlogs as $ };
