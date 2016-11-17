const Router = require('./lib/router.js')
const router = new Router()

class einfach {

    constructor() {
        if (!(this instanceof einfach)) {
            return new einfach()
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

module.exports = einfach