// import required modules
const concertsModel = require('../models/concertsModel');

// handler to get all Albums
exports.getAllConcerts = (req, res) => {
    concertsModel.getAllConcerts((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}