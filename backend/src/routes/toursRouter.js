// import required modules
const express = require('express');
const router = express.Router();
const toursController = require('../controllers/toursController');

// Router: GET /tours
// Description: get a list of all tours
router.get('/', toursController.getAllTours);

// Router: GET /tours/:tourId
// Description: get a selected Tour
router.get('/:tourId', toursController.getTourById);

// Router: POST /tours
// Description: add a new Tour
router.post('/', toursController.addTour);

// Router: PUT /tours/:tourId
// Description: updates an existing Tour by tourId
router.put('/:tourId', toursController.updateTour);

// Router: DELETE /tours/:tourId
// Description: updates an existing Tour by tourId
router.delete('/:tourId', toursController.deleteTour);

// export the router
module.exports = router;