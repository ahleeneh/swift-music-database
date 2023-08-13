// import required modules
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// ROUTER: GET /home
// Description: get the count of all the items needed
router.get('/', homeController.getDashboard);

// export the router
module.exports = router;