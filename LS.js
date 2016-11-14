const fs = require('fs');
const path = require('path');
var folderPath = process.argv[2];
var extension = process.argv[3];
var fileter = fs.readdir(folderPath, (err, files)=>{
  files.filter((files) =>{
    var ext = path.extname(files);
    if(ext === '.' + extension){
      return true;
    }
    else {
      return false;
    }
  })
  .forEach((val) =>{
    console.log(val);
  });
});
