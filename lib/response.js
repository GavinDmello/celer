/*
 * Celer - An HTTP framework
 * Copyright(c) 2017-present @GavinDmello
 * MIT Licensed
 */

class Response {

	send(data) {

	    if (typeof data != 'string' && typeof data != 'object') {
	        throw new Error("Cannot write anything except string or object")
        }

		if (typeof data === 'string') {
			this.write(data)
		}

		if (typeof data === 'object') {
			let convertedData = JSON.stringify(data)
			this.write(convertedData)
		}
		this.end()
	}
}

module.exports = Response