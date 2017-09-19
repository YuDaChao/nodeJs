const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
	if (ctx.url === '/index') {
		ctx.cookies.set(
			'cid', // cookie key
			'hello word', // cookie value
			{
				domain: 'localhost', // cookie 所在的域名
				path: '/index', // cookie所在路径
				maxAge: 1000 * 60, // cookie有效时长
				httpOnly: false, // 是否值允许用于http请求中获取
				overwrite: false // 是否允许重写
			}
		)
		ctx.body = 'cookie is ok'
	} else {
		ctx.body = ' hello world'
	}
})

app.listen(3000, () => {
	console.log('cookie is starting at port 3000')
})