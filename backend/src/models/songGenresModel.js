// import the required database connector
const db = require('../../db-connector');

// get all Song Genres from the database
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

// get a Song Genre by songGenreId from the database
exports.getSongGenreById = (songGenreId, callback) => {
    const queryGetSongGenreById = `
        SELECT * FROM SongGenres
        WHERE songGenreId = ?;`;
    db.pool.query(queryGetSongGenreById, [songGenreId], callback);
}

// add a Song Genre to the database
exports.addSongGenre = (songId, genreId, callback) => {
    const queryAddSongGenre = `
        INSERT INTO SongGenres (songId, genreId)
        VALUES (?, ?);`;
    db.pool.query(queryAddSongGenre, [songId, genreId], callback);
}

// delete a Song Genre from the database
exports.deleteSongGenre = (songGenreId, callback) => {
    const queryDeleteSongGenre = `
        DELETE FROM SongGenres
        WHERE songGenreId = ?;`;
    db.pool.query(queryDeleteSongGenre, [songGenreId], callback);
}