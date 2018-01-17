/*
 * Celer - An HTTP framework
 * Copyright(c) 2017-present @GavinDmello
 * MIT Licensed
 */

//Requiring the dev-dependencies
var chai = require('chai')
var expect = chai.expect

describe('checking API', () => {

    it('presence of server', (done) => {
        let Celer = require('../index')
        let celer = new Celer()
        let server = celer.server
        expect(server).to.be.defined;
        done()
    })

})
