const Head = require("./src/Head");
const mediaQueryPlugin = require("./src/media-query-plugin");
const { pxToRem, pxToRemPlugin } = require("./src/px-to-rem");
const pxToViewportPlugin = require("./src/px-to-viewport-plugin");

const plugins = [
  mediaQueryPlugin,
  pxToViewportPlugin,
  pxToRemPlugin,
];

module.exports = {
  plugins,
  pxToRem,
  Head,
};
