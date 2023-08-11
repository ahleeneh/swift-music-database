// import required modules
const setlistsModel = require('../models/setlistsModel');

// handler to get all Setlists
exports.getAllSetlists = (req, res) => {
    setlistsModel.getAllSetlists((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}

// handler to get a selected Setlist
exports.getSetlistById = (req, res) => {
    const setlistId = req.params.setlistId;

    setlistsModel.getSetlistById(setlistId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Setlist not found' });
        } else {
            const selectedSetlist = data[0]
            return res.json(selectedSetlist);
        }
    })
}

//  handler to add a Setlist
exports.addSetlist = (req, res) => {
    const { setlistName } = req.body;

    setlistsModel.addSetlist(setlistName, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Setlist added successfully' });
        }
    })
}

// handler to update a Setlist
exports.updateSetlist = (req, res) => {
    const { setlistName } = req.body;
    const setlistId = req.params.setlistId;

    setlistsModel.updateSetlist(setlistName, setlistId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Setlist updated successfully' });
        }
    })
}

// handler to delete a Setlist
exports.deleteSetlist = (req, res) => {
    const setlistId = req.params.setlistId;

    setlistsModel.deleteSetlist(setlistId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Setlist deleted successfully' })
        }
    })
}