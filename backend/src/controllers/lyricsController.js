// import required modules
const lyricsModel = require('../models/lyricsModel');

// handler to get all Albums
exports.getAllLyrics = (req, res) => {
    lyricsModel.getAllLyrics((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}