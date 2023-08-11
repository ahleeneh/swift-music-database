// import required modules
const setlistSongsModel = require('../models/setlistSongsModel');

// handler to get all Albums
exports.getAllSetlistSongs = (req, res) => {
    setlistSongsModel.getAllSetlistSongs((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}