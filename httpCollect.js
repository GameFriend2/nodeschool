const http = require('http');
const URL = process.argv[2];

http.get(URL, (response)=>{
  var str='';
  response.on('data', (buff)=>{
    str = str + buff;
    //console.log(str);
  });
  response.on('end', ()=>{
    console.log(str.length);
    console.log(str);
  })
})
