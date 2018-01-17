/*
 * Celer - An HTTP framework
 * Copyright(c) 2017-present @GavinDmello
 * MIT Licensed
 */

const http = require('http')
class Celer {

    constructor(opts) {
        let Router = undefined
        let that = this
        opts = opts || {}

        if (!(this instanceof Celer)) {
            return new Celer()
        }

        switch (opts.router) {
            case 'event':
                Router = require('./lib/event-router')
                break

            case 'object':
                Router = require('./lib/object-router')
                break

            default:
                Router = require('./lib/object-router')
        }

        this.router = new Router()
        this.server = http.createServer((req, res) => {
            that.dispatcher(req, res)
        })
    }

    dispatcher(req, res) {
        this.router.send(req, res)
    }

    get(url, handler) {
        this.router.when(url, 'get', handler)
    }

    post(url, handler) {
        this.router.when(url, 'post', handler)
    }

    put(url, handler) {
        this.router.when(url, 'put', handler)
    }

    head(url, handler) {
        this.router.when(url, 'head', handler)
    }

    patch(url, handler) {
        this.router.when(url, 'patch', handler)
    }

    delete(url, handler) {
        this.router.when(url, 'delete', handler)
    }


    listen(port, callback) {
        callback = callback || noop
        this.server.listen(port, callback)
    }
}

function noop() {}

module.exports = Celer