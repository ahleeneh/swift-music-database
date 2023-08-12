// import the required database connector
const db = require('../../db-connector');

// get all Genres from the database
exports.getAllGenres = (callback) => {
    const queryGetAllGenres = `SELECT * FROM Genres ORDER BY genreName;`;
    db.pool.query(queryGetAllGenres, callback);
}

// get a Genre by genreId from the database
exports.getGenreById = (genreId, callback) => {
    const queryGetGenreById = `
        SELECT * FROM Genres
        WHERE genreId = ?;`;
    db.pool.query(queryGetGenreById, [genreId], callback);
}

// add a Genre to the database
exports.addGenre = (genreName, callback) => {
    const queryAddGenre = `
        INSERT INTO Genres (genreName)
        VALUES (?);`;
    db.pool.query(queryAddGenre, [genreName], callback);
}

// update an existing Genre to the database
exports.updateGenre = (genreName, genreId, callback) => {
    const queryUpdateGenre = `
        UPDATE Genres
        SET 
            genreName = ?
        WHERE genreId = ?;`;
    db.pool.query(queryUpdateGenre, [genreName, genreId], callback);
}

// delete an existing Genre from the database
exports.deleteGenre = (genreId, callback) => {
    const queryDeleteGenre = `
        DELETE FROM Genres
        WHERE genreId = ?;`;
    db.pool.query(queryDeleteGenre, [genreId], callback);
}