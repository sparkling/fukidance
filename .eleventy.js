module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "mp4",
    "woff",
    "woff2",
    "html",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);
  return {
    dir: {
      includes: "_includes",
      layouts: "layouts",
      input: "src"
    }
  }
};
