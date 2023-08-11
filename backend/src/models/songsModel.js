// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSongs = (callback) => {
    const queryGetAllSongs = `
        SELECT
            Songs.songId, 
            Songs.songTitle, 
            SUBSTRING(Songs.songDuration, 4, 5) AS songDuration, 
            Albums.albumTitle, 
            IFNULL(Songs.featuredArtist, 'N/A') AS featuredArtist,
            GROUP_CONCAT(Genres.genreName SEPARATOR ', ') AS songGenres
        FROM Songs
        JOIN Albums ON Songs.albumId = Albums.albumId
        LEFT JOIN SongGenres ON Songs.songId = SongGenres.songId
        LEFT JOIN Genres on SongGenres.genreId = Genres.genreId
        GROUP BY Songs.songId;`;
    db.pool.query(queryGetAllSongs, callback);
}


