const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: 'us-cdbr-east-02.cleardb.com' || 'localhost',
	user: 'b7fc3bad1faa19' || 'root',
	password: 'a5a38c27' || 'hdrFKDSDNr',
	database: 'heroku_d28241b7e155f29' || 'company',

	// host: 'us-cdbr-east-02.cleardb.com',
	// user: 'b7fc3bad1faa19',
	// password: 'a5a38c27',
	// database: 'heroku_d28241b7e155f29',
});

// DATABASE_URL: mysql://b7fc3bad1faa19:a5a38c27@us-cdbr-east-02.cleardb.com/heroku_d28241b7e155f29?reconnect=true

mysqlConnection.connect(function (err) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('DB is connected');
	}
});

module.exports = mysqlConnection;
