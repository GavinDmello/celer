/*
 * Celer - An HTTP framework
 * Copyright(c) 2017-present @GavinDmello
 * MIT Licensed
 */

//Requiring the dev-dependencies
var chai = require('chai')
var expect = chai.expect
var assert =  chai.assert

describe('checking response methods', () => {

    const ResponseWrapper = require('../lib/response')
    const responseWrapper = new ResponseWrapper()
    responseWrapper.write = function(params) {}
    responseWrapper.end = function(params) {}


    it('with string param', (done) => {
        try {
            responseWrapper.send("Hello")
        } catch (e) {
            assert.fail("Error in response", "string param", e.toString())
        }
        done()
    })

    it('with object param', (done) => {
        try {
            responseWrapper.send({ a  : 1})
        } catch (e) {
            assert.fail("Error in response", "object param", e.toString())
        }
        done()
    })

    it('with number param', (done) => {
        try {
            responseWrapper.send(1)
        } catch (e) {
            done()
            return
        }
        assert.fail("should fail before", "numbers are not allowed", "")

    })

})
