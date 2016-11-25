const EventEmitter = require('events')
const urlTrim = require('url-trim')
const ResponseWrapper = require('./response')
const responseWrapper = new ResponseWrapper()
const traceback = require('stack-trace');

class ObjectRouter {

    constructor() {
        this.routes = {}
    }

    send(request, response) {

        var sendTo = request.method.toLowerCase() + urlTrim(request.url)
        response.send = responseWrapper.send
        if (this.routes[sendTo]) {
            this.routes[sendTo](request, response)
        }
    }

    when(url, handler) {

        this.trace = traceback.get()[1]
        this.routes[this.trace.getMethodName() + url] = handler

    }
}

module.exports = ObjectRouter
