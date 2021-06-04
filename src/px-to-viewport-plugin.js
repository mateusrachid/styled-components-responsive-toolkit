const path = require('path');
const appRoot = require('app-root-path');
const { viewPortSizes } = require(path.join(appRoot, "responsive-toolkit-config/viewport.js"));

function _pxToViewportPlugin(context,content){
  if(context !== 1)
    return content;
  return content.replace(/([0-9.e-]+)([mt]?)px(vw|vh)\b/g,(match,pxValue,size,dimension)=>{
    const d = {vw:0,vh:1}[dimension];
    const s = {m:'mobile',t:'tablet'}[size] || 'default';
    return (parseFloat(pxValue)/viewPortSizes[s][d]*100).toFixed(3) + dimension;
  }).replace(/([0-9.e-]+)([mt]?)pxva/g,(match,pxValue,size,dimension)=>{
    const s = {m:'mobile',t:'tablet'}[size] || 'default';
    const value = parseFloat(pxValue);
    const sign = Math.sign(value);
    const vwValue = (value/viewPortSizes[s][0]*100).toFixed(3) + 'vw';
    const vhValue = (value/viewPortSizes[s][1]*100*pxToViewportAutoVhRatio).toFixed(3) + 'vh';
    const fun = sign < 0 ? 'max' : 'min';
    return `${fun}(${vwValue},${vhValue})`;
  });
}

const pxToViewportPlugin = Object.defineProperty(_pxToViewportPlugin, 'name', { value: 'responsiveToolkitPxToViewportPlugin' });

module.exports = pxToViewportPlugin;
