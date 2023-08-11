// import required modules
const setlistsModel = require('../models/setlistsModel');

// handler to get all Albums
exports.getAllSetlists = (req, res) => {
    setlistsModel.getAllSetlists((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}