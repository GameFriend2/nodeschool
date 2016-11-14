const fs = require('fs');

module.exports = function(folderPath, getExt, cb){
  fs.readdir(folderPath, (err, files)=>{
    if(err){return cb(err);}
    fileNames = filter((fileName) => {
      var ext = path.extname(fileName);
      if(ext === '.' + getExt){
        return true;
      }
      else {
        return false;
      }
    });
  });
  return cb(null, fileName);
});
