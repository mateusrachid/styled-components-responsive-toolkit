function getMediaQueryPlugin({mediaQueries}){
  const _mediaQueryPlugin = (context,content)=>{
    if(context !== -1)
      return content;

    var newContent = content;

    newContent = content.replace(/@media [^{]+{/g,str => {
      for(const name in mediaQueries)
        str = str.replace(new RegExp(`\\b${name}\\b`),mediaQueries[name]);
      return str;
    });
    
    return newContent;
  };
  const mediaQueryPlugin = Object.defineProperty(_mediaQueryPlugin, 'name', { value: 'responsiveToolkitMediaQuery' });
  return mediaQueryPlugin;
}

module.exports = getMediaQueryPlugin;
