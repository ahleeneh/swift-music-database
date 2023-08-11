// import required modules
const genresModel = require('../models/genresModel');

// handler to get all Albums
exports.getAllGenres = (req, res) => {
    genresModel.getAllGenres((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}