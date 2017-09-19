const mysql = require('mysql')
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'koa-demo',
})

connection.query('select * from _mysql_session_store', (error,rows) => {
	if (error) { 
		throw error 
	} else {
		console.log(rows)
	}

	connection.end()
})