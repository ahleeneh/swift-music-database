// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllTours = (callback) => {
    const queryGetAllTours = `SELECT * FROM Tours;`;
    db.pool.query(queryGetAllTours, callback);
}