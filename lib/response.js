

class Response {

	send(data) {
		if (typeof data === 'string') {
			this.write(data)
		}

		if (typeof data === 'object') {
			var convertedData = JSON.stringify(data)
			this.write(convertedData)
		}
		this.end()
	}
}

module.exports = Response