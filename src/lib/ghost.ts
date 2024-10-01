import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
  url: "http://127.0.0.1:2368", // This is the default URL if your site is running on a local environment
  key: import.meta.env.CONTENT_API_KEY || "", // Ensure key is provided
  version: "v5.0",
});

// Function to fetch settings from Ghost
export const fetchSettings = async () => {
  try {
    return await ghostClient.settings.browse();
  } catch (error) {
    console.error("Error fetching settings:", error);
    throw error;
  }
};

/**
 * Get the path for a Ghost image with optional resizing.
 * @param {string} baseUrl - The base URL of the Ghost site.
 * @param {string} imgUrl - The URL of the image.
 * @param {number} [width=0] - The desired width of the image.
 * @returns {string} - The processed image URL.
 */
export const getGhostImgPath = (
  baseUrl: string,
  imgUrl: string,
  width: number = 0
): string => {
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
