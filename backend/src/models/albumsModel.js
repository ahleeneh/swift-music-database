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
        FROM Albums
        ORDER BY releaseDate;`;
    db.pool.query(queryGetAllAlbums, callback);
}

// get an Album by albumId from the database
exports.getAlbumById = (albumId, callback) => {
    const queryGetAlbumById = `
        SELECT * FROM Albums
        WHERE albumId = ?;`;
    db.pool.query(queryGetAlbumById, [albumId], callback);
}

// add an Album to the database
exports.addAlbum = (albumTitle, releaseDate, description, callback) => {
    const queryAddAlbum = `
        INSERT INTO Albums (albumTitle, releaseDate, description)
        VALUES (?, ?, ?);`;
    db.pool.query(queryAddAlbum, [albumTitle, releaseDate, description], callback);
}

// update an existing Album to the database
exports.updateAlbum = (albumTitle, releaseDate, description, albumId, callback) => {
    const queryUpdateAlbum = `
        UPDATE Albums
        SET
            albumTitle = ?,
            releaseDate = ?,
            description = ?
        WHERE albumId = ?;`;
    db.pool.query(queryUpdateAlbum, [albumTitle, releaseDate, description, albumId], callback);
}

// delete an existing Album from the database
exports.deleteAlbum = (albumId, callback) => {
    const queryDeleteAlbum = `
        DELETE FROM Albums
        WHERE albumId = ?;`;
    db.pool.query(queryDeleteAlbum, [albumId], callback);
}