// import required modules
const albumsModel = require('../models/albumsModel');

// handler to get all Albums
exports.getAllAlbums = (req, res) => {
    albumsModel.getAllAlbums((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}