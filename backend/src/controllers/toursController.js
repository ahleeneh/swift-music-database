// import required modules
const toursModel = require('../models/toursModel');

// handler to get all Albums
exports.getAllTours = (req, res) => {
    toursModel.getAllTours((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}

// handler to get a selected Tour
exports.getTourById = (req, res) => {
    const tourId = req.params.tourId;

    toursModel.getTourById(tourId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Tour not found' });
        } else {
            const selectedTour = data[0]
            return res.json(selectedTour);
        }
    })
}

// handler to add a Tour
exports.addTour = (req, res) => {
    const { tourName, tourStartDate, tourEndDate, tourDescription} = req.body;

    toursModel.addTour(tourName, tourStartDate, tourEndDate, tourDescription, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Tour added successfully' });
        }
    })
}

// handler to update a Tour
exports.updateTour = (req, res) => {
    const { tourName, tourStartDate, tourEndDate, tourDescription } = req.body;
    const tourId = req.params.tourId;

    toursModel.updateTour(tourName, tourStartDate, tourEndDate, tourDescription, tourId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Tour updated successfully' });
        }
    })
}

// handler to delete a Tour
exports.deleteTour = (req, res) => {
    const tourId = req.params.tourId;

    toursModel.deleteTour(tourId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Tour deleted successfully' })
        }
    })
}