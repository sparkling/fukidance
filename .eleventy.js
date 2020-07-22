const embeds = require("eleventy-plugin-embed-everything");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedVimeo = require("eleventy-plugin-vimeo-embed");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItDivs = require("markdown-it-div");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItToc = require("markdown-it-toc-done-right");
const markdownTableMd = require('markdown-it-multimd-table');

const markdownItOptions = {
  html: false,
  xhtmlOut: true,
  typographer: true
};

const markdownItAnchorOptions = {
  permalink: false,
  level: 2
}

const markdownItTocOptions = {
  level: 2
}

const markdownTableMdOptions = {
  multiline:  false,
  rowspan:    false,
  headerless: true
}


const eleventyOptions = {
  dir: {
    includes: "_includes",
    layouts: "layouts",
    input: "src"
  }
}


const embedYoutubeOptions = {
  embedClass: 'youtube-embed',
  lite: {
    css: {
      path: "/css/lite-yt-embed.css"
    },
    js: {
      path: "/js/lite-yt-embed.js"
    }
  }
};

const embedVimeoOptions = {
  embedClass: 'vimeo-embed'
}

const embedsOptions = {
  embedClass: 'video-embed'
}

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "md",
    "mp4",
    "woff",
    "woff2",
    "html",
    "css"
  ]);
  eleventyConfig.addPlugin(embeds);
  eleventyConfig.addPlugin(embedYouTube, embedYoutubeOptions);
  eleventyConfig.addPlugin(embedVimeo, embedVimeoOptions);
  eleventyConfig.setLibrary("md", markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    .use(markdownItDivs)
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(markdownItToc, markdownItTocOptions)
    .use(markdownTableMd, markdownTableMdOptions));


  return eleventyOptions;
};
