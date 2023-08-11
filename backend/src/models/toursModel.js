// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllTours = (callback) => {
    const queryGetAllTours = `
        SELECT 
            tourId,
            tourName,
            DATE_FORMAT(tourStartDate, '%Y-%m-%d') AS tourStartDate,
            DATE_FORMAT(tourEndDate, '%Y-%m-%d') AS tourEndDate,
            tourDescription
        FROM Tours;`;
    db.pool.query(queryGetAllTours, callback);
}