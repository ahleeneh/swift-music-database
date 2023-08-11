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

// handler to get a selected Album
exports.getAlbumById = (req, res) => {
    const albumId = req.params.albumId;

    albumsModel.getAlbumById(albumId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Album not found' });
        } else {
            const selectedAlbum = data[0]
            return res.json(selectedAlbum);
        }
    })
}

// handler to add an Album
exports.addAlbum = (req, res) => {
    const { albumTitle, releaseDate, description } = req.body;

    albumsModel.addAlbum(albumTitle, releaseDate, description, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Album added successfully' });
        }
    })
}

// handler to update an Album
exports.updateAlbum = (req, res) => {
    const { albumTitle, releaseDate, description } = req.body;
    const albumId = req.params.albumId;

    albumsModel.updateAlbum(albumTitle, releaseDate, description, albumId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Album updated successfully' });
        }
    })
}

// handler to delete an Album
exports.deleteAlbum = (req, res) => {
    const albumId = req.params.albumId;

    albumsModel.deleteAlbum(albumId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Album deleted successfully' })
        }
    })
}