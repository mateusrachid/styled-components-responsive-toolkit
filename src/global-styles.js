const { createGlobalStyle } = require("styled-components");
const React = require("react");

module.exports = function getGlobalStyles(config){
  const { viewPortSizes,preserveAspectRatio } = config.viewport;
  const { fontsInUse, defaultFontFamily, defaultFontWeight } = config.fonts;
  const cssReset = config.cssReset;

  const fontImports = ()=>{
    const urls = [];
    for(const font of fontsInUse){
      var url = `https://fonts.googleapis.com/css2?display=swap&family=${font.family}:ital,wght@`;
      for(const weight of font.weights)
        url += `0,${weight};`;
      for(const weight of font.italicWeights)
        url += `1,${weight};`;
      urls.push(url.replace(/;$/,''));
    }
    return urls;
  }

  const fontFamily = ()=>`*{font-family: ${defaultFontFamily};font-weight: ${defaultFontWeight};}`;

  const globalStyle = function(){
    var style = 'html{';

    const fontSize = name => `font-size:${(100*16/viewPortSizes[name][0]).toFixed(2)}vw;`
    const fontSizeVh = name => `font-size:${(100*16/viewPortSizes[name][1]).toFixed(2)}vh;`

    style += fontSize('default');

    for(const name in viewPortSizes){
      if(name === 'default'){
        if(preserveAspectRatio)
          style += `@media (min-aspect-ratio:${viewPortSizes[name][0]}/${viewPortSizes[name][1]}){${fontSizeVh(name)}}`;
      }else{
        style += `@media ${name}{${fontSize(name)}}`;
        if(preserveAspectRatio)
          style += `@media ${name} and (min-aspect-ratio:${viewPortSizes[name][0]}/${viewPortSizes[name][1]}){${fontSizeVh(name)}}`;
      }
    }

    return style;
  };

  const StyledComponentsGlobalStyle = createGlobalStyle`${cssReset}${fontFamily}${globalStyle}`;

  const GlobalStyles = ()=>(
    React.createElement(
      React.Fragment,
      null,
      fontImports().map((url, idx) => (
        React.createElement(
          "link",{
            key: idx,
            rel: "stylesheet",
            href: url
          }
        )
      )),
      React.createElement(StyledComponentsGlobalStyle, null)
    )
  );

  return GlobalStyles;
};

