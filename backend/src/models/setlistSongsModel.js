// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSetlistSongs = (callback) => {
    const queryGetAllSetlistSongs = `SELECT * FROM SetlistSongs;`;
    db.pool.query(queryGetAllSetlistSongs, callback);
}