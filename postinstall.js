const fs = require('fs');
const path = require('path');

const files = [
  "media-queries.js",
  "fonts.js",
  "viewport.js",
  "css-reset.js",
];

const srcDir = path.join(__dirname,"config");
const dstDir = path.join(__dirname,"../../src/css-config");

fs.mkdir(
  dstDir,
  {recursive: true},
  (err) => {
    if (err) 
      throw err;
  }
);

for(const file of files){
  const src = path.join(srcDir,file);
  const dst = path.join(dstDir,file);

  fs.access(dst, (err) => {
    if(!err)
      return;
    fs.copyFile(
      src,
      dst,
      (err) => {
        if (err) throw err;
      }
    );
  });
}


