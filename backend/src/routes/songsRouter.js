// import required modules
const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');

// Router: GET /songs
// Description: get a list of all songs
router.get('/', songsController.getAllSongs);

// Router: GET /songs/:songId
// Description: get a selected Song
router.get('/:songId', songsController.getSongById);

// Router: POST /songs
// Description: add a new Song
router.post('/', songsController.addSong);

// Router: PUT /songs/:songId
// Description: updates an existing Song by songId
router.put('/:songId', songsController.updateSong);

// Router: DELETE /songs/:songId
// Description: updates an existing Song by songId
router.delete('/:songId', songsController.deleteSong);

// export the router
module.exports = router;