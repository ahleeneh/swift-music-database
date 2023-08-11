// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllConcerts = (callback) => {
    const queryGetAllConcerts = `SELECT * FROM Concerts;`;
    db.pool.query(queryGetAllConcerts, callback);
}