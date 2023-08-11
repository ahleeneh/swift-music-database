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

// handler to get a selected Genre
exports.getGenreById = (req, res) => {
    const genreId = req.params.genreId;

    genresModel.getGenreById(genreId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Genre not found' });
        } else {
            const selectedGenre = data[0]
            return res.json(selectedGenre);
        }
    })
}

// handler to add a Genre
exports.addGenre = (req, res) => {
    const { genreName } = req.body;

    genresModel.addGenre(genreName, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Genre added successfully' });
        }
    })
}

// handler to update a Genre
exports.updateGenre = (req, res) => {
    const { genreName } = req.body;
    const genreId = req.params.genreId;

    genresModel.updateGenre(genreName, genreId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Genre updated successfully' });
        }
    })
}

// handler to delete a Genre
exports.deleteGenre = (req, res) => {
    const genreId = req.params.genreId;

    genresModel.deleteGenre(genreId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Genre deleted successfully' })
        }
    })
}