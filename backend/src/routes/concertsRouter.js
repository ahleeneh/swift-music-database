// import required modules
const express = require('express');
const router = express.Router();
const concertsController = require('../controllers/concertsController');

// Router: GET /concerts
// Description: get a list of all concerts
router.get('/', concertsController.getAllConcerts);

// export the router
module.exports = router;