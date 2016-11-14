const fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, (err, buff)=>{
  var filearr = buff.toString().split('\n');
  if(err){return console.log(err);}
  console.log(filearr.length-1);
});
