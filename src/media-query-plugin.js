const path = require('path');
const mediaQueries = require(path.join(__dirname, "../../../", "responsive-toolkit-config/media-queries.js"));

function _mediaQueryPlugin(context,content){
  if(context !== -1)
    return content;

  var newContent = content;

  newContent = content.replace(/@media [^{]+{/g,str => {
    for(const name in mediaQueries)
      str = str.replace(new RegExp(`\\b${name}\\b`),mediaQueries[name]);
    return str;
  });
  
  return newContent;
}

const mediaQueryPlugin = Object.defineProperty(_mediaQueryPlugin, 'name', { value: 'responsiveToolkitMediaQuery' });

export default mediaQueryPlugin;
