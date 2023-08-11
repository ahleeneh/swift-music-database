// import required modules
const concertsModel = require('../models/concertsModel');

// handler to get all Albums
exports.getAllConcerts = (req, res) => {
    concertsModel.getAllConcerts((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}

// handler to get a selected Concert
exports.getConcertById = (req, res) => {
    const concertId = req.params.concertId;

    concertsModel.getConcertById(concertId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Concert not found' });
        } else {
            const selectedConcert = data[0]
            return res.json(selectedConcert);
        }
    })
}

// handler to add a Concert
exports.addConcert = (req, res) => {
    const { concertName, concertVenue, concertLocation, concertDateTime, tourId } = req.body;

    concertsModel.addConcert(concertName, concertVenue, concertLocation, concertDateTime, tourId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Concert added successfully' });
        }
    })
}

// handler to update a Concert
exports.updateConcert = (req, res) => {
    const { concertName, concertVenue, concertLocation, concertDateTime, tourId, setlistId } = req.body;
    const concertId = req.params.concertId;

    concertsModel.updateConcert(concertName, concertVenue, concertLocation, concertDateTime, tourId, setlistId, concertId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Concert updated successfully' });
        }
    })
}

// handler to delete a Concert
exports.deleteConcert = (req, res) => {
    const concertId = req.params.concertId;

    concertsModel.deleteConcert(concertId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Concert deleted successfully' })
        }
    })
}