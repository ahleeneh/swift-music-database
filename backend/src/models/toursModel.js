// import the required database connector
const db = require('../../db-connector');

// get all Tours from the database
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

// get a Tour by tourId from the database
exports.getTourById = (tourId, callback) => {
    const queryGetTourById = `
        SELECT * FROM Tours
        WHERE tourId = ?;`;
    db.pool.query(queryGetTourById, [tourId], callback);
}

// add a Tour to the database
exports.addTour = (tourName, tourStartDate, tourEndDate, tourDescription, callback) => {
    const queryAddTour = `
        INSERT INTO Tours (tourName, tourStartDate, tourEndDate, tourDescription)
        VALUES (?, ?, ?, ?);`;
    db.pool.query(queryAddTour, [tourName, tourStartDate, tourEndDate, tourDescription], callback);
}

// update an existing Tour to the database
exports.updateTour = (tourName, tourStartDate, tourEndDate, tourDescription, tourId, callback) => {
    const queryUpdateTour = `
        UPDATE Tours
        SET 
            tourName = ?,
            tourStartDate = ?,
            tourEndDate = ?,
            tourDescription = ?
        WHERE tourId = ?;`;
    db.pool.query(queryUpdateTour, [tourName, tourStartDate, tourEndDate, tourDescription, tourId], callback);
}

// delete an existing Tour from the database
exports.deleteTour = (tourId, callback) => {
    const queryDeleteTour = `
        DELETE FROM Tours
        WHERE tourId = ?;`;
    db.pool.query(queryDeleteTour, [tourId], callback);
}