// var http = require('http');
// http.createServer(function(req,res){
//     res.write("first message from server.");
//     res.end()
// }).listen(8080);

const { createServer } = require('node:http');
// const reload = require('reload');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader("Type","corns")
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("mode","same-origin");
//   res.sendDate("this is for testing..");
  // res.write('Hello World....');
  res.end('This text is coming from server..');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});