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