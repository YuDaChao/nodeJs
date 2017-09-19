const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const app = new Koa()

// 配置存储session信息的mysql
let store = new MysqlSession({
	user: 'root',
	password: 'root',
	database: 'koa-demo',
	host: 'localhost'
})

//存放sessionId的cookie配置

let cookie = {
	maxAge: '',
	expires: '',
	path: '',
	httpOnly: '',
	overwrite: '',
	secure: '',
	sameSite: '',
	signed: '',
}

// 使用session中间件

app.use(session({
	key: 'SESSION_ID',
	store: store,
	cookie: cookie
}))

app.use(async (ctx) => {
	if (ctx.url === '/set') {
		ctx.session = {
			user_session: Math.random().toString(36).substr(2),
			count: 0
		}
		ctx.body = ctx.session
	} else if (ctx.url === '/') {
		ctx.session.count = ctx.session.count + 1
		ctx.body = ctx.session
	}
})

app.listen(3000, () => {
	console.log('session ......')
})


