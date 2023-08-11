// import the required database connector
const db = require('../../db-connector');

// get all Albums from the database
exports.getAllSetlists = (callback) => {
    const queryGetAllSetlists = `SELECT * FROM Setlists;`;
    db.pool.query(queryGetAllSetlists, callback);
}

// get a Setlist by setlistId from the database
exports.getSetlistById = (setlistId, callback) => {
    const queryGetSetlistById =  `
        SELECT * FROM Setlists
        WHERE setlistId = ?;`;
    db.pool.query(queryGetSetlistById, [setlistId], callback);
}

// add a Setlist to the database
exports.addSetlist = (setlistName, callback) => {
    const queryAddSetlist = `
        INSERT INTO Setlists (setlistName)
        VALUES (?);`;
    db.pool.query(queryAddSetlist, [setlistName], callback);
}

// update an existing Setlist to the database
exports.updateSetlist = (setlistName, setlistId, callback) => {
    const queryUpdateSetlist = `
        UPDATE Setlists
        SET 
            setlistName = ?
        WHERE setlistId = ?;`;
    db.pool.query(queryUpdateSetlist, [setlistName, setlistId], callback);
}

// delete an existing Setlist from the database
exports.deleteSetlist = (setlistId, callback) => {
    const queryDeleteSetlist = `
        DELETE FROM Setlists
        WHERE setlistId = ?;`;
    db.pool.query(queryDeleteSetlist, [setlistId], callback);
}