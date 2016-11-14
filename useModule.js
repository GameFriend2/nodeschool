// import function
// use function
var myModule = require('./module.js')
var folderPath = process.argv[2];
var getExt = process.argv[3];
myModule(folderPath, getExt, (err, filteredFiles)=>{
  if(err){return console.log(err);}
  filteredFiles.forEach((fileName)=>{
    console.log(fileName);
  });
});
