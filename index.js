const { Head: _Head } = require("./src/Head");
const mediaQueryPlugin = require("./src/media-query-plugin");
const { pxToRem: _pxToRem, pxToRemPlugin } = require("./src/px-to-rem");
const pxToViewportPlugin = require("./src/px-to-viewport-plugin");

export const plugins = [
  mediaQueryPlugin,
  pxToViewportPlugin,
  pxToRemPlugin,
];

export const pxToRem = _pxToRem;

export const Head = _Head;
