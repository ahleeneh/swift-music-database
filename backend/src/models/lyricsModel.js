// import the required database connector
const db = require('../../db-connector');

// get all Lyrics from the database
exports.getAllLyrics = (callback) => {
    const queryGetAllLyrics = `
        SELECT 
            Lyrics.lyricId,
            Songs.songTitle,
            Lyrics.lyricsText
        FROM Lyrics
        JOIN Songs ON Lyrics.songId = Songs.songId;`;
    db.pool.query(queryGetAllLyrics, callback);
}

// get a Lyric by lyricId from the database
exports.getLyricById = (lyricId, callback) => {
    const queryGetLyricById = `
        SELECT * FROM Lyrics
        WHERE lyricId = ?;`;
    db.pool.query(queryGetLyricById, [lyricId], callback);
}

// add a Lyric to the database
exports.addLyric = (songId, lyricsText, callback) => {
    const queryAddLyric = `
        INSERT INTO Lyrics (songId, lyricsText)
        VALUES (?, ?);`;
    db.pool.query(queryAddLyric, [songId, lyricsText], callback);
}

// update an existing Lyric to the database
exports.updateLyric = (lyricsText, lyricId, callback) => {
    const queryUpdateLyric = `
        UPDATE Lyrics
        SET
            lyricsText = ?
        WHERE lyricId = ?;`;
    db.pool.query(queryUpdateLyric, [lyricsText, lyricId], callback);
}

// delete an existing Lyric from the database
exports.deleteLyric = (lyricId, callback) => {
    const queryDeleteLyric = `
        DELETE FROM Lyrics
        WHERE lyricId = ?;`;
    db.pool.query(queryDeleteLyric, [lyricId], callback);
}