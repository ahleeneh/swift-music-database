// import required modules
const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

// Router: GET /genres
// Description: get a list of all genres
router.get('/', genresController.getAllGenres);

// export the router
module.exports = router;