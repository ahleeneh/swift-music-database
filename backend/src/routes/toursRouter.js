// import required modules
const express = require('express');
const router = express.Router();
const toursController = require('../controllers/toursController');

// Router: GET /tours
// Description: get a list of all tours
router.get('/', toursController.getAllTours);

// export the router
module.exports = router;