// import required modules
const express = require('express');
const router = express.Router();
const setlistSongsController = require('../controllers/setlistSongsController');

// Router: GET /setlist-songs
// Description: get a list of all setlist songs
router.get('/', setlistSongsController.getAllSetlistSongs);

// export the router
module.exports = router;