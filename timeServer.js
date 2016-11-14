const net = require('net');
const http = require('http');

const server = net.createServer((socket) => {
  var date = new Date();
  var result = formatTime(date);
  socket.write(result);
  socket.end();
});

server.listen(+process.argv[2]);

//input new Date();
//output '2016-10-29 15:33'
function formatTime(date){
  var year = zeroFill(date.getFullYear());
  var month = zeroFill(date.getMonth() + 1);
  var day = zeroFill(date.getDate());
  var hour = zeroFill(date.getHours());
  var minute = zeroFill(date.getMinutes());
  var result = `${year}-${month}-${day} ${hour}:${minute}
`;
  return result;
}

function zeroFill(num){
  (num < 10 ? '0' : '') + num;
}
