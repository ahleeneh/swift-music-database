// import the required database connector
const db = require('../../db-connector');

// get all Setlist Songs from the database
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

// get a Setlist Song by setlistSongId from the database
exports.getSetlistSongById = (setlistSongId, callback) => {
    const queryGetSetlistSongById = `
        SELECT * FROM SetlistSongs
        WHERE setlistSongId = ?;`;
    db.pool.query(queryGetSetlistSongById, [setlistSongId], callback);
}

// add a Setlist Song to the database
exports.addSetlistSong = (setlistId, songId, callback) => {
    const queryAddSetlistSong = `
        INSERT INTO SetlistSongs (setlistId, songId)
        VALUES (?, ?);`;
    db.pool.query(queryAddSetlistSong, [setlistId, songId], callback);
}

// update an existing Setlist Song to the database
exports.updateSetlistSong = (setlistId, songId, setlistSongId, callback) => {
    const queryUpdateSetlistSong = `
        UPDATE SetlistSongs
        SET
            setlistId = ?,
            songId = ?
        WHERE setlistSongId = ?;`;
    db.pool.query(queryUpdateSetlistSong, [setlistId, songId, setlistSongId], callback);
}

// delete an existing Setlist Song from the database
exports.deleteSetlistSong = (setlistSongId, callback) => {
    const queryDeleteSetListSong = `
        DELETE FROM SetlistSongs
        WHERE setlistSongId = ?;`;
    db.pool.query(queryDeleteSetListSong, [setlistSongId], callback);
}