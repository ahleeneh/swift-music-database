// import required modules
const express = require('express'); // use Express library for web sever
const cors = require('cors');
const router = express.Router();
const PORT = 1989;
const app = express();
require('dotenv').config();

// setup middleware
app.use(cors());
app.use(express.json());

// import route handlers for all entity pages
const albumsRouter = require('./routes/albumsRouter');
const genresRouter = require('./routes/genresRouter');
const toursRouter = require('./routes/toursRouter');
const setlistsRouter = require('./routes/setlistsRouter');
const songsRouter = require('./routes/songsRouter');
const lyricsRouter = require('./routes/lyricsRouter');
const concertsRouter = require('./routes/concertsRouter');
const songGenresRouter = require('./routes/songGenresRouter');
const setlistSongsRouter = require('./routes/setlistSongsRouter');

// root route
app.get('/', (req, res) => {
    return res.json("Hello from the backend!")
});

// mount route handlers to the specified pages
app.use('/albums', albumsRouter);
app.use('/genres', genresRouter);
app.use('/tours', toursRouter);
app.use('/setlists', setlistsRouter);
app.use('/songs', songsRouter);
app.use('/lyrics', lyricsRouter);
app.use('/concerts', concertsRouter);
app.use('/song-genres', songGenresRouter);
app.use('/setlist-songs', setlistSongsRouter);


// start the backend server at the specified PORT
app.listen(PORT, () => {
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});

// export the router
// module.exports = router;