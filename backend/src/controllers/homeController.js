// import required modules
const homeModel = require('../models/homeModel');

// handler to get all Items
exports.getDashboard = async (req, res) => {
    try {
        // fetch data using the homeModel functions
        const albumCount = await homeModel.getAlbumCount();
        const songCount = await homeModel.getSongCount();
        const tourCount = await homeModel.getTourCount();
        const genreCount = await homeModel.getGenreCount();

        // construct the dashboard data object
        const dashboardData = {
            albumCount,
            songCount,
            tourCount,
            genreCount
        };

        return res.json(dashboardData);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}