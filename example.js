const Celer = require('./index')
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