# Celer  &nbsp;&nbsp;[![Build Status](https://travis-ci.org/GavinDmello/celer.svg?branch=master)](https://travis-ci.org/GavinDmello/celer.svg?branch=master)&nbsp; [![Coverage Status](https://coveralls.io/repos/github/GavinDmello/celer/badge.svg?branch=master)](https://coveralls.io/github/GavinDmello/celer?branch=master)
A very simple REST implementation based on pure string matching and events.

-------------------------------------------------------
### Here is an example of the the usage :-


```js

const Celer = require('celer')
const celer = new Celer()

const PORT = 8888

celer.get('/hi', function(req, res) {
    res.send('Hello World')
})

celer.post('/hi', function(req, res) {
    res.send('Hello World')
})

celer.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT)
})

```


-------------------------------------------------------
### LICENSE

MIT
