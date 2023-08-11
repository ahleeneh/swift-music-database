// import required modules
const setlistSongsModel = require('../models/setlistSongsModel');

// handler to get all Setlist Songs
exports.getAllSetlistSongs = (req, res) => {
    setlistSongsModel.getAllSetlistSongs((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}

// handler to get a selected Setlist Song
exports.getSetlistSongById = (req, res) => {
    const setlistSongId = req.params.setlistSongId;

    setlistSongsModel.getSetlistSongById(setlistSongId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Setlist Song not found' });
        } else {
            const selectedSetlistSong = data[0]
            return res.json(selectedSetlistSong);
        }
    })
}

// handler to add a Setlist Song
exports.addSetlistSong = (req, res) => {
    const { setlistId, songId } = req.body;

    setlistSongsModel.addSetlistSong(setlistId, songId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Setlist Song added successfully' });
        }
    })
}

// handler to update an existing Setlist Song
exports.updateSetlistSong = (req, res) => {
    const { setlistId, songId } = req.body;
    const setlistSongId = req.params.setlistSongId;

    setlistSongsModel.updateSetlistSong(setlistId, songId, setlistSongId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Setlist Song updated successfully' });
        }
    })
}

// handler to delete a Setlist Song
exports.deleteSetlistSong = (req, res) => {
    const setlistSongId = req.params.setlistSongId;

    setlistSongsModel.deleteSetlistSong(setlistSongId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Setlist Songs deleted successfully' })
        }
    })
}