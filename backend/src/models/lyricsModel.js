// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
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