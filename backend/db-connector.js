// import required modules
const mysql = require('mysql2');
const env = require('dotenv').config();

// create connection pool with the following credentials (found in .env file)
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    database        : process.env.DB_DATABASE
})


pool.getConnection((error, connection) => {
    if (error) {
        console.error('Error connecting to the database:', error.message);
    } else {
        console.log('Connected to the TaylorSwift database Aline created! :)');
        connection.release();
    }
});

// export the pool for use in our application
module.exports.pool = pool;