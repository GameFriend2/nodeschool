const http = require('http');
const URL = process.argv.slice(2);

var promises =  URL.map((url)=>{
  return new Promise((resolve)=>{
    http.get(url, (response)=>{
      var str='';
      response.on('data', (buff)=>{
        str = str + buff;
      });
      response.on('end', ()=>{
        resolve(str);
      });
    }).on('error', (err)=>{
      reject(err);
    })
  });
});

Promise.all(promises).then((array)=>{
  array.forEach((val)=>{
    console.log(val);
  });
}, (err)=>{
  console.log(err);
});
