// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllGenres = (callback) => {
    const queryGetAllGenres = `SELECT * FROM Genres;`;
    db.pool.query(queryGetAllGenres, callback);
}