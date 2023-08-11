// import required modules
const express = require('express');
const router = express.Router();
const lyricsController = require('../controllers/lyricsController');

// Router: GET /lyrics
// Description: get a list of all lyrics
router.get('/', lyricsController.getAllLyrics);

// Router: GET /lyrics/:lyricId
// Description: get a selected Genre
router.get('/:lyricId', lyricsController.getLyricById);

// Router: POST /lyrics
// Description: add a new Genre
router.post('/', lyricsController.addLyric);

// Router: PUT /lyrics/:lyricId
// Description: updates an existing Genre by genreId
router.put('/:lyricId', lyricsController.updateLyric);

// Router: DELETE /lyrics/:lyricId
// Description: updates an existing Genre by genreId
router.delete('/:lyricId', lyricsController.deleteLyric);

// export the router
module.exports = router;