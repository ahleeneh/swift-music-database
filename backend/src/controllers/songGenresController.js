// import required modules
const songGenresModel = require('../models/songGenresModel');

// handler to get all Albums
exports.getAllSongGenres = (req, res) => {
    songGenresModel.getAllSongGenres((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}