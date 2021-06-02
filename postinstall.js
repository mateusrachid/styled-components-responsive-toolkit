const fs = require('fs');
const path = require('path');

const files = [
  "responsive-toolkit-config/media-queries.js",
  "responsive-toolkit-config/fonts.js",
  "responsive-toolkit-config/viewport.js",
  "responsive-toolkit-config/css-reset.js",
];

for(const file of files){
  const src = path.join(__dirname,file);
  const dst = path.join(__dirname,"../../",file);

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


