// import required modules
const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');

// Router: GET /songs
// Description: get a list of all songs
router.get('/', songsController.getAllSongs);

// export the router
module.exports = router;