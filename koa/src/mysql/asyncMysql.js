const mysql = require('mysql')
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'koa-demo',
})

let query = function(sql, args) {
	return new Promise((resolve, reject) => {
		pool.getConnection(function(err, connection) {
			if (err) {
				reject(err)
			} else {
				connection.query(sql, args, (err, rows) => {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
					connection.release()
				})
			}
		})
	})
}

module.exports = { query }