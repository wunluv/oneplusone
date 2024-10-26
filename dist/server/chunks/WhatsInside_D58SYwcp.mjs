import GhostContentAPI from '@tryghost/content-api';
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_CCuxw6Jy.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from './_astro_assets_qTecStGZ.mjs';

const seo = {
	title: "One Plus One is One by Normand Bourque",
	description: "A Language Thought experiment on the Cosmological Singularity and the Big Bang",
	canonical: "https://one-plus-one-is-one.net",
	locale: "eng_US",
	image: "/og_image_800_600_2.png"
};
const author = {
	name: "Normand Bourque",
	email: "normand_bourque@gmail.com",
	location: "Perth, Australia",
	twitterUrl: "https://twitter.com/",
	instagramUrl: "https://www.instagram.com/",
	linkedinUrl: "https://www.linkedin.com/in/normand-bourque-9a54321a/"
};
const book = {
	title: "One Plus One is One",
	isbn: "999999999999999",
	releaseDate: "2025-03-28",
	price: "34.9",
	currency: "AUD",
	buyPhysicalUrl: "https://",
	buyDigitalUrl: "https://",
	buyAudiobookUrl: "#"
};

const ghostClient = new GhostContentAPI({
  url: "http://127.0.0.1:2368",
  // This is the default URL if your site is running on a local environment
  key: "b6ec8bf3d43273c75a3f2e0c7a",
  // Ensure key is provided
  version: "v5.0"
});
const fetchSettings = async () => {
  try {
    return await ghostClient.settings.browse();
  } catch (error) {
    console.error("Error fetching settings:", error);
    throw error;
  }
};
const getGhostImgPath = (baseUrl, imgUrl, width = 0) => {
  console.log("getGhostImgPath", baseUrl, imgUrl, width);
  if (!imgUrl) return "";
  const baseContentImagePath = `${baseUrl}/content/images`;
  if (!imgUrl.startsWith(baseContentImagePath)) {
    return imgUrl;
  }
  const relativePath = imgUrl.substring(baseContentImagePath.length);
  const cleanedBaseUrl = baseUrl.replace(/\/~$/, "");
  if (width && width > 0) {
    return `${cleanedBaseUrl}/content/images/size/w${width}/${relativePath}`;
  }
  return `${cleanedBaseUrl}/content/images/${relativePath}`;
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer-background py-12 flex flex-col justify-center items-center leading-4"> <p class="text-xl text-center mb-4">
Made with <span class="love">❤️</span> by
<a href="https://github.com/mojah" target="_blank" rel="noopener noreferrer" aria-label="Visit Mojah's GitHub profile" class="text-book-theme border-b-2 border-transparent hover:border-book-yellow transition ease-in-out duration-300">
Mojah
</a> </p> </footer>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/Footer.astro", void 0);

const $$WhatsInside = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">${maybeRenderHead()}<div class="bg-book-gray relative overflow-hidden"> <div class="max-w-screen-xl mx-auto pt-16 pb-8 text-lg"> <div class="relative z-10"> <h2 class="text-5xl mb-10 font-semibold text-gray-50 px-4"> <span class="text-book-theme pl-4">A 360° VISION:</span><!-- --> </h2><div class="flex-none sm:flex"> <div class="text-base sm:flex-1 px-4"> <p class="text-lg mb-10 text-gray-100">Because of our unconditional belief in scientific cosmology, notably in quantum physics,
it seems that we are no longer sovereign of our spirit. Yet we need to expand our vision.
We want a 360° vision, and that is an inner vision that prevents our outer vision from an
excess of details that distract from reality. A thought experiment is a sinking into a
reality where details are not present. It is a sinking process rather than an analyzing one.
<br><br>A sample of chapter titles follow:
</p> <ul class="list-disc text-gray-400 ml-10 mb-4 font-body"> <li class="text-lg mb-2 text-gray-100 font-semibold">
In the Beginning, there was the Present</li> <li class="text-lg mb-2 text-gray-100 font-semibold">
Food for thoughts, thoughts for food</li> <li class="text-lg mb-2 text-gray-100 font-semibold">
Have you ever tried counting to 1?</li> <li class="text-lg mb-2 text-gray-100 font-semibold">
A particle has no parts</li> <li class="text-lg mb-2 text-gray-100 font-semibold">
What is a singularity?</li> <li class="text-lg mb-2 text-gray-100 font-semibold">
Is it really a Big Bang or an implosion?</li> <li class="text-lg mb-2 text-gray-100 font-semibold">
The center of the initial singularity</li> </ul> </div><div class="sm:flex-1 px-4"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-md relative z-10", "src": "/book-table.jpeg", "width": 400, "height": 500, "alt": book.title, "format": "avif", "loading": "eager" })} </div> </div> </div> </div> </div>`;
}, "/home/wunluv/DEV/www/nodejs/oneplusone/oneplusone/src/components/WhatsInside.astro", void 0);

export { $$WhatsInside as $, $$Footer as a, book as b, author as c, getGhostImgPath as d, fetchSettings as f, ghostClient as g, seo as s };
