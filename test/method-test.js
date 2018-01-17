/*
 * Celer - An HTTP framework
 * Copyright(c) 2017-present @GavinDmello
 * MIT Licensed
 */

//Requiring the dev-dependencies
var chai = require('chai')
var expect = chai.expect

describe('checking API', () => {
    let Celer = require('../index')
    let celer = new Celer()

    it('check get API', (done) => {
        let originalResponse = {
            response : true
        }
        let originalRequest = {
            url : "/",
            method : "GET"
        }

        celer.get('/', (req, res) => {
            expect(req).to.deep.equal(originalRequest);
            expect(res).to.deep.equal(originalResponse);
            done()
        })

        celer.dispatcher(originalRequest, originalResponse)
    })

    it('check post API', (done) => {
        let originalResponse = {
            response : true
        }
        let originalRequest = {
            url : "/",
            method : "POST"
        }

        celer.post('/', (req, res) => {
            expect(req).to.deep.equal(originalRequest);
            expect(res).to.deep.equal(originalResponse);
            done()
        })

        celer.dispatcher(originalRequest, originalResponse)
    })

    it('check head API', (done) => {
        let originalResponse = {
            response : true
        }
        let originalRequest = {
            url : "/",
            method : "HEAD"
        }

        celer.head('/', (req, res) => {
            expect(req).to.deep.equal(originalRequest);
            expect(res).to.deep.equal(originalResponse);
            done()
        })

        celer.dispatcher(originalRequest, originalResponse)
    })


    it('check put API', (done) => {
        let originalResponse = {
            response : true
        }
        let originalRequest = {
            url : "/",
            method : "PUT"
        }

        celer.put('/', (req, res) => {
            expect(req).to.deep.equal(originalRequest);
            expect(res).to.deep.equal(originalResponse);
            done()
        })

        celer.dispatcher(originalRequest, originalResponse)
    })

    it('check delete API', (done) => {
        let originalResponse = {
            response : true
        }
        let originalRequest = {
            url : "/",
            method : "DELETE"
        }

        celer.delete('/', (req, res) => {
            expect(req).to.deep.equal(originalRequest);
            expect(res).to.deep.equal(originalResponse);
            done()
        })

        celer.dispatcher(originalRequest, originalResponse)
    })


    it('check patch API', (done) => {
        let originalResponse = {
            response : true
        }
        let originalRequest = {
            url : "/",
            method : "PATCH"
        }

        celer.patch('/', (req, res) => {
            expect(req).to.deep.equal(originalRequest);
            expect(res).to.deep.equal(originalResponse);
            done()
        })

        celer.dispatcher(originalRequest, originalResponse)
    })

})
