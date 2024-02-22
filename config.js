const db = require('mysql2');

const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '106041niN!',
    database: 'employees_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});
 
module.exports = connection;