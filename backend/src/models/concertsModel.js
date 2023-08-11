// import the required database connector
const db = require('../../db-connector');

// get all Concerts from the database
exports.getAllConcerts = (callback) => {
    const queryGetAllConcerts = `
        SELECT
            Concerts.concertId,
            Concerts.concertName,
            Concerts.concertVenue,
            Concerts.concertLocation,
            DATE_FORMAT(Concerts.concertDateTime, '%Y-%m-%d') AS concertDateTime,
            Tours.tourName,
            Setlists.setlistName
        FROM Concerts
        JOIN Tours ON Concerts.tourId = Tours.tourId
        LEFT JOIN Setlists ON Concerts.setlistId = Setlists.setlistId;`;
    db.pool.query(queryGetAllConcerts, callback);
}

// get a Concert by concertId from the database
exports.getConcertById = (concertId, callback) => {
    const queryGetConcertById = `
        SELECT * FROM Concerts
        WHERE concertId = ?;`;
    db.pool.query(queryGetConcertById, [concertId], callback);
}

// add a Concert to the database
exports.addConcert = (concertName, concertVenue, concertLocation, concertDateTime, tourId, callback) => {
    const queryAddConcert = `
        INSERT INTO Concerts (concertName, concertVenue, concertLocation, concertDateTime, tourId)
        VALUES (?, ?, ?, ?, ?);`;
    db.pool.query(queryAddConcert, [concertName, concertVenue, concertLocation, concertDateTime, tourId], callback);
}

// update an existing Concert to the database
exports.updateConcert = (concertName, concertVenue, concertLocation, concertDateTime, tourId, setlistId, concertId, callback) => {
    const queryUpdateConcert = `
        UPDATE Concerts
        SET
            concertName = ?,
            concertVenue = ?,
            concertLocation = ?,
            concertDateTime = ?,
            tourId = ?,
            setlistId = ?
        WHERE concertId = ?;`;
    db.pool.query(queryUpdateConcert, [concertName, concertVenue, concertLocation, concertDateTime, tourId, setlistId, concertId], callback);
}

// delete an existing Concert from the database
exports.deleteConcert = (concertId, callback) => {
    const queryDeleteConcert = `
        DELETE FROM Concerts
        WHERE concertId = ?;`;
    db.pool.query(queryDeleteConcert, [concertId], callback);
}