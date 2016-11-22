const http = require('http');
const Einfach = require('./index')
const einfach = new Einfach()

const PORT=8080

einfach.get('/hi', function (req, res) {
  res.send('Hello World')
})

var server = http.createServer(einfach.dispatcher);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});