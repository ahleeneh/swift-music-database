// import required modules
const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

// Router: GET /genres
// Description: get a list of all Genres
router.get('/', genresController.getAllGenres);

// Router: GET /genres/:genreId
// Description: get a selected Genre
router.get('/:genreId', genresController.getGenreById);

// Router: POST /genres
// Description: add a new Genre
router.post('/', genresController.addGenre);

// Router: PUT /genres/:genreId
// Description: updates an existing Genre by genreId
router.put('/:genreId', genresController.updateGenre);

// Router: DELETE /genres/:genreId
// Description: updates an existing Genre by genreId
router.delete('/:genreId', genresController.deleteGenre);

// export the router
module.exports = router;