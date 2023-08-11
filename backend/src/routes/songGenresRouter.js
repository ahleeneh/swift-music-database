// import required modules
const express = require('express');
const router = express.Router();
const songGenresController = require('../controllers/songGenresController');

// Router: GET /song-genres
// Description: get a list of all song genres
router.get('/', songGenresController.getAllSongGenres);

// Router: GET /song-genres/:songGenreId
// Description: get a selected Song Genre
router.get('/:songGenreId', songGenresController.getSongGenreById);

// Router: POST /song-genres
// Description: add a new Song Genre
router.post('/', songGenresController.addSongGenre);

// Router: PUT /song-genres/:songGenreId
// Description: updates an existing Song Genre by songGenreId
router.put('/:songGenreId', songGenresController.updateSongGenre);

// Router: DELETE /song-genres/:songGenreId
// Description: updates an existing Song Genre by songGenreId
router.delete('/:songGenreId', songGenresController.deleteSongGenre);

// export the router
module.exports = router;