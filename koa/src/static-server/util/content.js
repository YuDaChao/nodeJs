const path = require('path')
const fs = require('fs')

const dir = require('./dir')

const file = require('./file')

async function content( ctx, fullStaticPath) {
	let reqPath = path.join(fullStaticPath, ctx.url)
	let exist = fs.existSync(reqPath)
	let content = ''
	if (!exist) {
		content = '404 Not Found'
	} else {
		let stat = fs.statSync(reqPath)
		if (stat.isDirectory()) {
			content = dir(ctx.url, reqPath)
		} else {
			content = file(reqPath)
		}
	}
	return content
}
module.exports = content