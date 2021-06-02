function pxToRem(pxValue){
  return `${(parseFloat(pxValue)/16).toFixed(3)}rem`;
}
function _pxToRemPlugin(context,content){
  if(context !== 1)
    return content;
  return content.replace(/([0-9.e-]+)px\b/g,(match,pxValue) => (
    `${(parseFloat(pxValue)/16).toFixed(3)}rem`
  )).replace(/([0-9.e-]+)pxc\b/g,(match,pxValue,dimension)=>(
    `${pxValue}px`
  ));
}

const pxToRemPlugin = Object.defineProperty(_pxToRemPlugin, 'name', { value: 'responsiveToolkitPxToRemPlugin' });

module.exports = {
  pxToRem,
  pxToRemPlugin,
};

