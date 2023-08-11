// import the required database connector
const db = require('../../db-connector');

// get all Songs from the database
exports.getAllSongs = (callback) => {
    const queryGetAllSongs = `
        SELECT
            Songs.songId, 
            Songs.songTitle, 
            SUBSTRING(Songs.songDuration, 4, 5) AS songDuration, 
            Albums.albumTitle, 
            IFNULL(Songs.featuredArtist, 'N/A') AS featuredArtist,
            IFNULL(GROUP_CONCAT(Genres.genreName SEPARATOR ', '), 'Uncategorized') AS songGenres
        FROM Songs
        JOIN Albums ON Songs.albumId = Albums.albumId
        LEFT JOIN SongGenres ON Songs.songId = SongGenres.songId
        LEFT JOIN Genres on SongGenres.genreId = Genres.genreId
        GROUP BY Songs.songId;`;
    db.pool.query(queryGetAllSongs, callback);
}

// get a Song by songId from the database
exports.getSongById = (songId, callback) => {
    const queryGetSongById = `
        SELECT * FROM Songs
        WHERE songId = ?`;
    db.pool.query(queryGetSongById, [songId], callback);
}

// add a Song to the database
exports.addSong= (songTitle, songDuration, albumId, featuredArtist, callback) => {
    const queryAddSong = `
        INSERT INTO Songs (songTitle, songDuration, albumId, featuredArtist)
        VALUES (?, ?, ?, ?);`;
    db.pool.query(queryAddSong, [songTitle, songDuration, albumId, featuredArtist], callback);
}

// update an existing Song to the database
exports.updateSong = (songTitle, songDuration, albumId, featuredArtist, songId, callback) => {
    const queryUpdateSong = `
        UPDATE SONGS
        SET
            songTitle = ?,
            songDuration = ?,
            albumId = ?,
            featuredArtist = ?
        WHERE songId = ?;`;
    db.pool.query(queryUpdateSong, [songTitle, songDuration, albumId, featuredArtist, songId], callback);
}

// delete an existing Song from the database
exports.deleteSong = (songId, callback) => {
    const queryDeleteSong = `
        DELETE FROM Songs
        WHERE songId = ?;`;
    db.pool.query(queryDeleteSong, [songId], callback);
}