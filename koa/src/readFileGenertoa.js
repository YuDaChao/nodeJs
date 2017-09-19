const fs = require('fs')
let readFile = (fileName) => {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, data) => {
			if (err) reject(err)
			resolve(data)				
		})
	})
}

// 生成器
let gen = function *(){
	let f1 = yield readFile('./fstab.log')
	let f2 = yield readFile('./shells.log')
	console.log(" into gen ")
	console.log(f1.toString())
	console.log(f2.toString())
}

// async
let asyncReadFile = async () => {
	let f1 = await readFile('./fstab.log')
	let f2 = await readFile('./shells.log')
	console.log(" into async ")
	console.log(f1.toString())
	console.log(f2.toString())
}

let g = gen()
console.log(g) // {}

asyncReadFile()