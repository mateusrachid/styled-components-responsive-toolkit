import { Head as _Head } from "./src/Head";
import mediaQueryPlugin from "./src/media-query-plugin";
import { pxToRem as _pxToRem, pxToRemPlugin } from "./src/px-to-rem";
import pxToViewportPlugin from "./src/px-to-viewport-plugin";

export const plugins = [
  mediaQueryPlugin,
  pxToViewportPlugin,
  pxToRemPlugin,
];

export const pxToRem = _pxToRem;

export const Head = _Head;
