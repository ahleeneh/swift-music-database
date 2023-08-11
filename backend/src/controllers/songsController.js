// import required modules
const songsModel = require('../models/songsModel');

// handler to get all Albums
exports.getAllSongs = (req, res) => {
    songsModel.getAllSongs((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}