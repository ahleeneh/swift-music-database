// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
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