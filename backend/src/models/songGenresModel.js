// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSongGenres = (callback) => {
    const queryGetAllSongGenres = `
        SELECT
            SongGenres.songGenreId,
            Songs.songTitle,
            Genres.genreName
        FROM SongGenres
        JOIN Songs ON SongGenres.songId = Songs.songId
        JOIN Genres ON SongGenres.genreId = Genres.genreId;`;
    db.pool.query(queryGetAllSongGenres, callback);
}