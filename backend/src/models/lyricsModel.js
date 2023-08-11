// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllLyrics = (callback) => {
    const queryGetAllLyrics = `SELECT * FROM Lyrics;`;
    db.pool.query(queryGetAllLyrics, callback);
}