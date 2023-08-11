// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSetlists = (callback) => {
    const queryGetAllSetlists = `SELECT * FROM Setlists;`;
    db.pool.query(queryGetAllSetlists, callback);
}