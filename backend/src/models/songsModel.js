// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSongs = (callback) => {
    const queryGetAllSongs = `SELECT * FROM Songs;`;
    db.pool.query(queryGetAllSongs, callback);
}