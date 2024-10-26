import { a as createComponent, r as renderTemplate, m as maybeRenderHead, c as createAstro, d as addAttribute } from './astro/server_CCuxw6Jy.mjs';
import 'kleur/colors';
import 'clsx';

const $$HeaderMain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-30 pt-10 overflow-hidden md:pt-10 md:pb-5 lg:pt-10 lg:pb-1"> <div class="mx-auto"> <div class="mb-5 md:max-w-1xl md:mx-auto lg:col-span-8"> <h1 class="mt-1 text-2xl tracking-tight leading-10 font-extrabold font-serif text-gray-900 sm:leading-none sm:text-3xl lg:text-3xl xl:text-4xl"> <a href="/" class="no-underline text-gray-900">
One Plus One <span class="underline">is One</span> </a> </h1> <p class="mt-0 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-2xl xl:text-2xl font-body">
A Language Thought experiment on the Cosmological Singularity and the
        Big Bang
</p> </div> </div> </section>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/headerMain.astro", void 0);

const $$Astro = createAstro("https://one.mojah2.mojahmedia.net");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { currentPath } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="py-4 pl-6"> <ol class="flex text-sm text-gray-500"> <li class="hover:text-gray-700"> <a href="/">Home</a> </li> ${currentPath.split("/").slice(1).map((crumb, index, array) => renderTemplate`<li> <span class="mx-2">&gt;&gt;</span> <a${addAttribute(`/${array.slice(0, index + 1).join("/")}`, "href")} class="hover:text-gray-700"> ${crumb} </a> </li>`)} </ol> </nav>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/Breadcrumbs.astro", void 0);

export { $$HeaderMain as $, $$Breadcrumbs as a };
