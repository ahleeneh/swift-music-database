// import required modules
const express = require('express');
const router = express.Router();
const songGenresController = require('../controllers/songGenresController');

// Router: GET /song-genres
// Description: get a list of all song genres
router.get('/', songGenresController.getAllSongGenres);

// export the router
module.exports = router;