class PostalPinCode {
	constructor() {
		this.api = "https://api.postalpincode.in"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async searchByPinCode(pinCode) {
		const response = await fetch(
			`${this.api}/pincode/${pinCode}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async searchByPostOffice(postOffice) {
		const response = await fetch(
			`${this.api}/postoffice/${postOffice}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {PostalPinCode}
