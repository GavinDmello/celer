const EventEmitter = require('events')
const urlTrim = require('url-trim')
const ResponseWrapper = require('./response')
const responseWrapper = new ResponseWrapper()

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

    when(url, method, handler) {

        this.routes[method + url] = handler

    }
}

module.exports = ObjectRouter
