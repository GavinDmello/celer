const http = require('http')
class Celer {

    constructor(opts) {
        let Router = undefined
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


    listen(port, callback) {
        let that = this
        let server = http.createServer((req, res) => {
            that.dispatcher(req, res)
        })
        callback = callback || noop
        server.listen(port, callback)
    }
}

function noop() {}

module.exports = Celer