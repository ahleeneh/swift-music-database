// import required modules
const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumsController');

// Router: GET /albums
// Description: get a list of all albums
router.get('/', albumsController.getAllAlbums);

// export the router
module.exports = router;