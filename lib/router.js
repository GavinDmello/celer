const EventEmitter = require('events')
const urlTrim = require('url-trim')
const ResponseWrapper = require('./response')
const responseWrapper = new ResponseWrapper()

class Router extends EventEmitter {

    constructor() {
        super()
    }

    send(request, response) {
    	var sendTo = request.method.toLowerCase() + urlTrim(request.url)
    	response.send = responseWrapper.send
        this.emit(sendTo, request, response)
    }

    when(url, handler) {
        this.on(url, handler)
    }
}

module.exports = Router