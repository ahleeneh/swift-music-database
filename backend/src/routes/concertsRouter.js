// import required modules
const express = require('express');
const router = express.Router();
const concertsController = require('../controllers/concertsController');

// Router: GET /concerts
// Description: get a list of all concerts
router.get('/', concertsController.getAllConcerts);

// Router: GET /concerts/:concertId
// Description: get a selected Concert
router.get('/:concertId', concertsController.getConcertById);

// Router: POST /concerts
// Description: add a new Concert
router.post('/', concertsController.addConcert);

// Router: PUT /concerts/:concertId
// Description: updates an existing Concert by concertId
router.put('/:concertId', concertsController.updateConcert);

// Router: DELETE /v/:concertId
// Description: updates an existing Concert by concertId
router.delete('/:concertId', concertsController.deleteConcert);

// export the router
module.exports = router;