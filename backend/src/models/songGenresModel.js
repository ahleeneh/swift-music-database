// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSongGenres = (callback) => {
    const queryGetAllSongGenres = `SELECT * FROM SongGenres;`;
    db.pool.query(queryGetAllSongGenres, callback);
}