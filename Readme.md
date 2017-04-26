# Celer
A very simple REST implementation based on pure string matching and events.

-------------------------------------------------------
### Here is an example of the the usage :-


```js

const http = require('http');
const Celer = require('./index')
const celer = new Celer()

const PORT=8080

celer.get('/get', function (req, res) {
  res.end('Hello World')
})

celer.post('/post', function (req, res) {
  res.send('Hello World')
})

celer.put('/post', function (req, res) {
  res.send('Hello World')
})


var server = http.createServer(celer.dispatcher)

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT)
})

```


-------------------------------------------------------
### LICENSE

MIT
