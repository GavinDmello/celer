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
        this.newUrl = 'get' + url
        router.when(this.newUrl, handler)
    }

    post(url, handler) {
        this.newUrl = 'post' + url
        router.when(this.newUrl, handler)
    }

    put(url, handler) {
        this.newUrl = 'put' + url
        router.when(this.newUrl, handler)
    }

    head(url, handler) {
        this.newUrl = 'head' + url
        router.when(this.newUrl, handler)
    }

    patch(url, handler) {
        this.newUrl = 'patch' + url
        router.when(this.newUrl, handler)
    }


}

module.exports = einfach