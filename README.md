# postal_pin_code.js
Web-API for [postalpincode.in](http://www.postalpincode.in/) an Postal PIN Code API allows developers to get details of Post Office by searching

## Example
```JavaScript
async function main() {
	const { PostalPinCode } = require("./postal_pin_code.js");
	const postalPinCode = new PostalPinCode()
	const searchResult = await postalPinCode.searchByPinCode("")
	console.log(searchResult)
}

main()
```
