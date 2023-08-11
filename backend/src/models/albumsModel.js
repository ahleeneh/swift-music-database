// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllAlbums = (callback) => {
    const queryGetAllAlbums = `SELECT * FROM Albums;`;
    db.pool.query(queryGetAllAlbums, callback);
}