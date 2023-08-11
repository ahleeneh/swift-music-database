// import required modules
const songGenresModel = require('../models/songGenresModel');

// handler to get all Song Genres
exports.getAllSongGenres = (req, res) => {
    songGenresModel.getAllSongGenres((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}

// handler to get a selected Song Genre
exports.getSongGenreById = (req, res) => {
    const songGenreId = req.params.songGenreId;

    songGenresModel.getSongGenreById(songGenreId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Song Genre not found' });
        } else {
            const selectedSongGenre = data[0]
            return res.json(selectedSongGenre);
        }
    })
}

// handler to add a Song Genre
exports.addSongGenre = (req, res) => {
    const { songId, genreId } = req.body;

    songGenresModel.addSongGenre(songId, genreId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Song Genre added successfully' });
        }
    })
}

//  handler to update a Song Genre
exports.updateSongGenre = (req, res) => {
    const { genreId } = req.body;
    const songGenreId = req.params.songGenreId;

    songGenresModel.updateSongGenre(genreId, songGenreId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Song Genre updated successfully' });
        }
    })
}

// handler to delete a Song Genre
exports.deleteSongGenre = (req, res) => {
    const songGenreId = req.params.songGenreId;

    songGenresModel.deleteSongGenre(songGenreId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Song Genre deleted successfully' })
        }
    })
}