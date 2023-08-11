// import required modules
const express = require('express');
const router = express.Router();
const setlistsController = require('../controllers/setlistsController');

// Router: GET /setlists
// Description: get a list of all setlists
router.get('/', setlistsController.getAllSetlists);

// export the router
module.exports = router;