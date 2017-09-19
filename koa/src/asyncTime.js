function getSyncTime() {
	return new Promise((resolve, reject) => {
		try {
			let begin = new Date().getTime()
			setTimeout(() => {
				let end = new Date().getTime()
				let time = end - begin
				resolve(time)
			}, 500)
		} catch(err) {
			reject(err)
		}
	})
}

async function getSyncData() {
	let time = await getSyncTime()
	let data = `endTime - startTime = ${time}`
	return data
}

async function getData() {
	let data = await getSyncData()
	console.log(data)
}

getData()