const getGlobalStyles = require("styled-components-responsive-toolkit/src/global-styles");
const getMediaQueryPlugin = require("./src/media-query-plugin");
const { pxToRem, pxToRemPlugin } = require("./src/px-to-rem");
const getPxToViewportPlugin = require("./src/px-to-viewport-plugin");

module.exports = function init(config){
  return {
    pxToRem,
    GlobalStyles: getGlobalStyles(config),
    plugins:[
      getMediaQueryPlugin(config),
      getPxToViewportPlugin(config),
      pxToRemPlugin,
    ]
  };
};



