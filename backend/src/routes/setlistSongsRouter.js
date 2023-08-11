// import required modules
const express = require('express');
const router = express.Router();
const setlistSongsController = require('../controllers/setlistSongsController');

// Router: GET /setlist-songs
// Description: get a list of all setlist songs
router.get('/', setlistSongsController.getAllSetlistSongs);

// Router: GET /setlist-songs/:setlistSongId
// Description: get a selected Setlist Song
router.get('/:setlistSongId', setlistSongsController.getSetlistSongById);

// Router: POST /setlist-songs
// Description: add a new Setlist Song
router.post('/', setlistSongsController.addSetlistSong);

// Router: PUT /setlist-songs/:setlistSongId
// Description: updates an existing Setlist Song by setlistSongId
router.put('/:setlistSongId', setlistSongsController.updateSetlistSong);

// Router: DELETE /setlist-songs/:setlistSongId
// Description: updates an existing Setlist Song by setlistSongId
router.delete('/:setlistSongId', setlistSongsController.deleteSetlistSong);

// export the router
module.exports = router;