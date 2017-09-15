const Router = require('./lib/object-router.js')
const router = new Router()

class celer {

    constructor() {
        if (!(this instanceof celer)) {
            return new celer()
        }
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

module.exports = celer
