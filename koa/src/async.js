let getStockSynbol = (name) => {
	return new Pormise((resolve, reject) => {
		setTimeout(() => {
			console.log(" setTimeout ")
			resolve(name)
		}, 1000)
	})
}

