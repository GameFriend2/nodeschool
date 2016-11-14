process.argv.slice(2)
  .reduce((accum, val)=>{
    accum[0] = accum[0] + Number(val);
    return accum;
  }, [0])
  .forEach(val => console.log(val));
// var sum = 0;
// for(var i = 2; i<process.argv.length; i++){
//   sum += parseInt(process.argv[i]);
// }
