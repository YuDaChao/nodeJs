const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router');
const app = new Koa();

const home = new Router();

home.get('/home', (ctx) => {
	ctx.body = "home koa-route"
})

let page = new Router()

page.get('/page', (ctx) => {
	ctx.body = "page koa-route"
})


let router = new Router()

router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
	console.log('koa-route is starting at port 3000')
})