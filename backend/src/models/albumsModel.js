// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllAlbums = (callback) => {
    const queryGetAllAlbums = `
        SELECT
            albumId,
            albumTitle,
            DATE_FORMAT(releaseDate, '%Y-%m-%d') AS releaseDate,
            description
        FROM Albums;`;
    db.pool.query(queryGetAllAlbums, callback);
}