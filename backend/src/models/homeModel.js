// import the required database connector
const db = require('../../db-connector');

// get albumCount from the database
exports.getAlbumCount = () => {
    return new Promise((resolve, reject) => {
        const queryGetAlbumCount = `
            SELECT COUNT(*) AS albumCount
            FROM Albums;`;
        db.pool.query(queryGetAlbumCount, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

// get songCount from the database
exports.getSongCount = () => {
    return new Promise((resolve, reject) => {
        const queryGetSongCount = `
            SELECT COUNT(*) as songCount
            FROM Songs;`;
        db.pool.query(queryGetSongCount, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

// get tourCount from the database
exports.getTourCount = () => {
    return new Promise((resolve, reject) => {
        const queryGetTourCount = `
            SELECT COUNT(*) as tourCount
            FROM Tours;`;
        db.pool.query(queryGetTourCount, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}

// get tourCount from the database
exports.getGenreCount = () => {
    return new Promise((resolve, reject) => {
        const queryGetGenreCount = `
            SELECT COUNT(DISTINCT genreId) AS genreCount
            FROM SongGenres;`;
        db.pool.query(queryGetGenreCount, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}