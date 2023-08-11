// import required modules
const songsModel = require('../models/songsModel');

// handler to get all Songs
exports.getAllSongs = (req, res) => {
    songsModel.getAllSongs((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}

// handler to get a selected Song
exports.getSongById = (req, res) => {
    const songId = req.params.songId;

    songsModel.getSongById(songId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Song not found' });
        } else {
            const selectedSong = data[0]
            return res.json(selectedSong);
        }
    })
}

// handler to add a Song
exports.addSong = (req, res) => {
    const { songTitle, songDuration, albumId, featuredArtist } = req.body;

    songsModel.addSong(songTitle, songDuration, albumId, featuredArtist, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Song added successfully' });
        }
    })
}

// handler to update a Song
exports.updateSong = (req, res) => {
    const { songTitle, songDuration, albumId, featuredArtist } = req.body;
    const songId = req.params.songId;

    songsModel.updateSong(songTitle, songDuration, albumId, featuredArtist, songId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Song updated successfully' });
        }
    })
}

// handler to delete a Song
exports.deleteSong = (req, res) => {
    const songId = req.params.songId;

    songsModel.deleteSong(songId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Song deleted successfully' })
        }
    })
}