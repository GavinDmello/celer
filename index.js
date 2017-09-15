let router = null

class Celer {

    constructor(opts) {
        let Router
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

        router = new Router()
    }

    dispatcher(req, res) {
        router.send(req, res)
    }

    get(url, handler) {
        router.when(url, 'get', handler)
    }

    post(url, handler) {
        router.when(url, 'post', handler)
    }

    put(url, handler) {
        router.when(url, 'put', handler)
    }

    head(url, handler) {
        router.when(url, 'head', handler)
    }

    patch(url, handler) {
        router.when(url, 'patch', handler)
    }


}

module.exports = Celer