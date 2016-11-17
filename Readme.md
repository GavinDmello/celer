# Einfach
A very simple rest implementation based on pure string matching and events. 

-------------------------------------------------------
### Here is an example of the the usage :-


```js

const http = require('http');
const Einfach = require('./index')
const einfach = new Einfach()

const PORT=8080

einfach.get('/get', function (req, res) {
  res.end('Hello World')
})

einfach.post('/post', function (req, res) {
  res.send('Hello World')
})

einfach.put('/post', function (req, res) {
  res.send('Hello World')
})


var server = http.createServer(einfach.dispatcher)

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT)
})

```


-------------------------------------------------------
### LICENSE

MIT
