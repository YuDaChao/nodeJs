const Koa = require('Koa')
const app = new Koa()
app.use( async (ctx) => {
	if (ctx.method === 'GET') {
		// let html = `
		// 	 <h1>koa2 request post demo</h1>
		//       <form method="POST" action="/">
		//         <p>userName</p>
		//         <input name="userName" /><br/>
		//         <p>nickName</p>
		//         <input name="nickName" /><br/>
		//         <p>email</p>
		//         <input name="email" /><br/>
		//         <button type="submit">submit</button>
		//       </form>
		// `
		let postData = await parsePostData(ctx)
		ctx.body = postData
		// ctx.body = html
	} else if (ctx.method === 'POST') {
		let postData = await parsePostData(ctx)
		ctx.body = postData
	} else {
		ctx.body = '404 !!!'
	}
})






function parsePostData(ctx) {
	return new Promise((resolve, reject) => {
		try {
			let postData = ''
			ctx.req.addListener('data', (data) => {
				postData += data
			})
			ctx.req.addListener('end', () => {
				let parseData = parseQueryStr(postData)
				resolve(parseData)
			})
		} catch (err) {
			reject(err)
		}
	})

	function parseQueryStr(queryStr) {
		let queryData = {}
		let queryStrList = queryStr.split('&')
		console.log(queryStrList)
		for (let [index, queryStr] of queryStrList.entries()) {
			let itemList = queryStr.split('=')
			queryData[itemList[0]] = decodeURIComponent(itemList[1])
		}
		return queryData
	}
}

app.listen(3000, () => {
	console.log('app is running at port 3000')
})