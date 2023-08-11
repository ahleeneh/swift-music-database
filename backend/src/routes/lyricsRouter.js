// import required modules
const express = require('express');
const router = express.Router();
const lyricsController = require('../controllers/lyricsController');

// Router: GET /lyrics
// Description: get a list of all lyrics
router.get('/', lyricsController.getAllLyrics);

// export the router
module.exports = router;