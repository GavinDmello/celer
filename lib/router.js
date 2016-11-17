'use strict';

const EventEmitter = require('events')
const urlTrim = require('url-trim')
const ResponseWrapper = require('./response')
const responseWrapper = new ResponseWrapper()
var traceback = require('stack-trace');

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

        this.trace = traceback.get()[1]
        this.on(this.trace.getMethodName() + url, handler)
    }
}

module.exports = Router