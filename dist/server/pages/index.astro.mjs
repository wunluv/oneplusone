/* empty css                                  */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CCuxw6Jy.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_qTecStGZ.mjs';
import { c as author, b as book, $ as $$WhatsInside, a as $$Footer } from '../chunks/WhatsInside_D58SYwcp.mjs';
import { $ as $$Layout } from '../chunks/Layout_BkapTNj8.mjs';
import { $ as $$LatestBlogs } from '../chunks/latestBlogs_jLUo6qPy.mjs';
export { renderers } from '../renderers.mjs';

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="w-5 h-5 mr-2 fill-current text-book-gray hover:text-gray-500 transition ease-in-out duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>ionicons-v5_logos</title><path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path> </svg>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/icons/Linkedin.astro", void 0);

const $$WhyReadThisBook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50"> <div class="max-w-screen-xl mx-auto py-16"> <h2 class="text-5xl mb-8 font-semibold text-gray-900 px-4 font-serif">
Meet the<!-- -->&nbsp;<span class="underline">author</span> </h2><div class="flex-none sm:flex"> <div class="sm:flex-1 px-4"> ${renderComponent($$result, "Image", $$Image, { "class": "mb-4 rounded-md", "src": "/author.jpeg", "width": 500, "height": 500, "alt": author.name, "format": "avif" })} </div><div class="text-lg text-gray-600 sm:flex-1 px-4 font-body"> <p class="mb-4">
This work began in 2020, after Normand healed from his stroke. It
          marked a quantum leap in the depth of his writing. The work is
          actively being edited and reviewed. Publication will happen in mid
          2025.
</p> <p class="mb-4 p-3 font-style: italic">
On the recommendation of Gloria Wendroff, I set about writing 70 blogs on themes
inspired by Heavenletters.org. The majority of the blogs were written between
November 2013 and June 2014, during several stays in China
(Shenyang in the province of Laoning), and also in Perth, Western Australia.
My period of writing blogs was abruptly interrupted by a severe ischemic stroke
that grounded me for 36 consecutive hours without any medical assistance.
 After a period of occupational therapy, I decided to resume blogging in 2020,
 opting for a synthesis of the 70 previous blogs, which took the form of the
 present book attesting to the reconstruction of numerous new neurological ramifications.
 Gloria's Heavenletters have certainly contributed to this neurological expansion through
 the writing of this book.
</p><p class="text-sm italic text-gray-500"> ${author.location} </p><div class="flex flex-row my-2"> <a title="LinkedIn link"${addAttribute(author.linkedinUrl, "href")} target="_blank"> ${renderComponent($$result, "Linkedin", $$Linkedin, {})} </a> </div> </div> </div> </div> </div>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/WhyReadThisBook.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="mx-auto max-w-screen-xl px-4 mb-8 mt-4 sm:mt-12 sm:mb-12 sm:px-6 md:mt-10 md:mb-20 xl:mt-10 xl:mb-24"> <div class="lg:grid lg:grid-cols-12 lg:gap-8"> <div class="mb-12 md:max-w-1xl md:mx-auto lg:col-span-8"> <h1 class="mt-1 text-4xl tracking-tight leading-10 font-extrabold font-serif text-gray-900 sm:leading-none sm:text-5xl lg:text-5xl xl:text-6xl">
One Plus One <span class="underline">is One</span> </h1><p class="mt-3 text-base text-gray-800 sm:mt-5 sm:text-xl lg:text-2xl xl:text-3xl font-body">
A Language Thought experiment on the Cosmological Singularity and the Big Bang
</p> <p class="p-9 pb-4 mt-3 text-base text-sky-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-2xl font-style: italic font-body">
“There is only one way out of the world's thinking,
        just as there was only one way into it. Understand totally by understanding totality.”
</p><div class="mx-auto text-center text-base leading-6 font-medium text-gray-900">
Helen Schucman, A Course in Miracles, 3rd Ed. 2007
</div>  <p class="p-9 mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-body">Atoms in their quantum state can communicate and exchange information instantly.
      Are we not made of these same atoms, and is there a part of ourselves
      communicating continuously with the rest of the universe without traveling
      any distance? This is what quantum phenomena weirdnesses are about.</p> <div> <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div> </div> </div><div class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center"> <a class="book-container" href="#ebook"><div class="book"> ${renderComponent($$result, "Image", $$Image, { "src": "/cover-2.jpeg", "width": 300, "height": 600, "alt": book.title, "format": "avif", "loading": "eager" })} </div> </a> </div> </div> </main>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/HeroSection.astro", void 0);

const $$Interviews = createComponent(($$result, $$props, $$slots) => {
  const interviews = [
    {
      imageUrl: "/gloria.jpg",
      name: "Gloria Wendroff",
      company: {
        name: "Founder and Godwriter of Heavenletters",
        url: "https://heavenletters.org/love-letters-of-spiritual-upliftment-from-god.html"
      },
      summary: `Your writing is so wide and deep \u2014 like the Ocean. Despite what is beyond
      my understanding, there is something simple that you say. I suppose that all
      depth can only be simple the closer we get to Truth. The closer we get to Truth,
      the closer to Oneness, yes? <br /><br /><a href="https://heavenletters.org/love-letters-of-spiritual-upliftment-from-god.html" class="underline hover:bg-book-yellow">heavenletters.org</a>
      `,
      location: "Fiarfield, United States"
    },
    {
      imageUrl: "/san.jpg",
      name: "San Naidoo",
      company: {
        name: "Creative Director of Heavenletters",
        url: "https://heavenletters.org/love-letters-of-spiritual-upliftment-from-god.html"
      },
      summary: `Heavenletters happen to be one of those unexplainable phenomenas. I personally
      witnessed them being written daily at 5am without fail for a year. Sometimes two and even
      three would be written in a morning. Heavenletters have been a helping hand to millions of
      readers of all nationalities and cultures. <br /><br />It warms my heart to see Normand do such an indepth study
      with Heavenletters and tacitly link their essence to various domains of cutting edge theoretical physics.
      In our world of rapid transformation, its paramount that we bridge the
      compassion & warmth of spirituality to the clarity and intellect of science.
      Normand's book is such a bridge.
      <br /><a href="https://heavenletters.org/love-letters-of-spiritual-upliftment-from-god.html" class="underline hover:bg-book-yellow">heavenletters.org</a>
      `,
      location: "South Africa"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white"> <div class="max-w-screen-xl mx-auto pt-16 pb-4 px-4"> <h2 class="text-3xl leading-9 font-extrabold text-gray-900">
Feedback from friends...
</h2> <div class="flex flex-col md:flex-row mt-6 pt-10"> ${interviews.map((interview) => renderTemplate`<div class="mb-12 w-full mb:w-1/2 p-6"> ${renderComponent($$result, "Image", $$Image, { "class": "float-left w-40 h-40 rounded-full mr-8", "src": interview.imageUrl, "alt": interview.name, "width": 160, "height": 160 })} <div class="flex flex-col text-sm"> <p class="text-2xl font-semibold text-gray-900"> ${interview.name} </p> <p class="text-xl mb-3"> <a class="underline text-book-gray hover:bg-book-yellow transition ease-in-out duration-300"${addAttribute(interview.company.url, "href")} target="_blank"> ${interview.company.name} </a> </p> <p class="text-base text-gray-600 mb-1 font-body">${unescapeHTML(interview.summary)}</p> <p class="text-sm italic text-gray-500  font-body"> ${interview.location} </p> </div> </div>`)} </div> </div> </div>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/Interviews.astro", void 0);

const $$Quote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-100 pt-10 pb-12 overflow-hidden md:pt-18 md:pb-20 lg:pt-22 lg:pb-24"> <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="relative"> <blockquote class="mt-8"> <div class="max-w-4xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900 font-body"> <p>
“<!-- -->The inner and outer are not exactly opposites. We could say
            that there is no inner and no outer. We could say there is only
            inner, and that is closer to the Truth.<!-- -->”
</p> </div> <footer class="mt-3"> <div class="mx-auto text-center text-base leading-6 font-medium text-gray-900">
Heavenletter #144 <a href="https://heavenletters.org/like-heaven-itself.html" class="underline hover:bg-book-yellow transition ease-in-out duration-300">Like Heaven Itself</a> </div> </footer> </blockquote> <blockquote class="mt-8"> <div class="max-w-4xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900 font-body"> <p>
“What you may consider unfounded knowledge is pure awareness.
            All that you have wondered
            and imagined about the cosmos is true. It is not a flight of fancy
            you have been on. It is a flight of the heart seeking to reclaim
            itself.<!-- -->”
</p> </div> <footer class="mt-3"> <div class="mx-auto text-center text-base leading-6 font-medium text-gray-900">
Heavenletter #1615
<a href="https://heavenletters.org/stars.html" class="underline hover:bg-book-yellow transition ease-in-out duration-300">
Stars</a> </div> </footer> </blockquote> </div> </div> </section>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/Quote.astro", void 0);

const $$HeaderQuote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-30 pt-10 pb-4 overflow-hidden md:pt-18 md:pb-5 lg:pt-22 lg:pb-4"> <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="relative"> <blockquote class="mt-8"> <div class="max-w-7xl mx-auto text-center text-3xl leading-9 font-medium text-sky-600 font-body">
“Spirituality without quantum physics is an incomplete picture of
            reality. Broadly speaking, although there are some differences, I
            think Buddhist philosophy and quantum physics can shake hands on
            their view of the world….It is my belief that quantum physics is
            closer to spirituality than to religion”
</div> <div class="font-body p-5 md:flex md:items-center md:justify-center sm:px-6 lg:px-8 text-center text-xl">
The Dalai Lama, Delhi 2015
</div> </blockquote> </div> </div> </section>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/headerQuote.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Book Title" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderQuote", $$HeaderQuote, {})} ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "Quote", $$Quote, {})} ${renderComponent($$result2, "WhyReadThisBook", $$WhyReadThisBook, {})} ${renderComponent($$result2, "Interviews", $$Interviews, {})} ${renderComponent($$result2, "LatestBlogs", $$LatestBlogs, {})} ${renderComponent($$result2, "WhatsInside", $$WhatsInside, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/index.astro", void 0);

const $$file = "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
