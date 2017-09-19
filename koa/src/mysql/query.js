const { query } = require('./asyncMysql')

async function selectAllData() {
	let sql = 'select * from _mysql_session_store'
	let dataList = await query(sql)
	return dataList
}

async function getData() {
	let dataList = await selectAllData()
	console.log(dataList)
}

getData()