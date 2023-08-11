// import required modules
const express = require('express');
const router = express.Router();
const albumsController = require('../controllers/albumsController');

// Router: GET /albums
// Description: get a list of all albums
router.get('/', albumsController.getAllAlbums);

// Router: GET /albums/:albumId
// Description: get a selected Album
router.get('/:albumId', albumsController.getAlbumById);

// Router: POST /albums
// Description: add a new Album
router.post('/', albumsController.addAlbum);

// Router: PUT /albums/:albumId
// Description: updates an existing Album by albumId
router.put('/:albumId', albumsController.updateAlbum);

// Router: DELETE /albums/:albumId
// Description: updates an existing Album by albumId
router.delete('/:albumId', albumsController.deleteAlbum);

// export the router
module.exports = router;