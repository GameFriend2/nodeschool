const fs = require('fs');
var filePath = process.argv[2];
var buff = fs.readFileSync(filePath);
var filearr = buff.toString().split('\n');
console.log(filearr.length-1);
