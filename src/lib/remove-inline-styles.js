import { transform } from "astro";

const removeInlineStyles = async (html) => {
  const $ = await transform(html);
  $("*[style]").removeAttr("style");
  return $.html();
};
