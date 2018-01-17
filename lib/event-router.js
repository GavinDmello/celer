/*
 * Celer - An HTTP framework
 * Copyright(c) 2017-present @GavinDmello
 * MIT Licensed
 */

const urlTrim = require('url-trim')
const ResponseWrapper = require('./response')
const responseWrapper = new ResponseWrapper()

class EventRouter extends EventEmitter {

    constructor() {
        super()
    }

    send(request, response) {

        var sendTo = request.method.toLowerCase() + urlTrim(request.url)
        response.send = responseWrapper.send
        this.emit(sendTo, request, response)
    }

    when(url, method, handler) {
        this.on(method + url, handler)
    }
}

module.exports = EventRouter