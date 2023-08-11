// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSetlistSongs = (callback) => {
    const queryGetAllSetlistSongs = `
        SELECT
            SetlistSongs.setlistSongId,
            Setlists.setlistName,
            Songs.songTitle
        FROM SetlistSongs
        JOIN Setlists ON SetlistSongs.setlistId = Setlists.setlistId
        JOIN Songs on SetlistSongs.songId = Songs.songId;`;
    db.pool.query(queryGetAllSetlistSongs, callback);
}