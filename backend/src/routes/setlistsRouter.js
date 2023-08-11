// import required modules
const express = require('express');
const router = express.Router();
const setlistsController = require('../controllers/setlistsController');

// Router: GET /setlists
// Description: get a list of all setlists
router.get('/', setlistsController.getAllSetlists);

// Router: GET /setlist/:setlistId
// Description: get a selected Setlist
router.get('/:setlistId', setlistsController.getSetlistById);

// Router: POST /setlist
// Description: add a new Setlist
router.post('/', setlistsController.addSetlist);

// Router: PUT /setlist/:setlistId
// Description: updates an existing Setlist by setlistId
router.put('/:setlistId', setlistsController.updateSetlist);

// Router: DELETE /setlist/:setlistId
// Description: updates an existing Setlist by setlistId
router.delete('/:setlistId', setlistsController.deleteSetlist);

// export the router
module.exports = router;