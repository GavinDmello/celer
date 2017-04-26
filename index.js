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
        router.when(url, handler)
    }

    post(url, handler) {
        router.when(url, handler)
    }

    put(url, handler) {

        router.when(url, handler)
    }

    head(url, handler) {
        router.when(url, handler)
    }

    patch(url, handler) {
        router.when(url, handler)
    }


}

module.exports = celer
