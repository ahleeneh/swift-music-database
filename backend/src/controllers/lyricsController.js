// import required modules
const lyricsModel = require('../models/lyricsModel');

// handler to get all Lyrics
exports.getAllLyrics = (req, res) => {
    lyricsModel.getAllLyrics((error, data) => {
        if (error) {
            return res.status(500).json({ error: 'Internal Server Error' });
        } else {
            return res.status(201).json(data);
        }
    })
}

// handler to get a selected Lyric
exports.getLyricById = (req, res) => {
    const lyricId = req.params.lyricId;

    lyricsModel.getLyricById(lyricId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else if (!data.length) {
            return res.status(404).json({ error: 'Lyrics not found' });
        } else {
            const selectedLyric = data[0]
            return res.json(selectedLyric);
        }
    })
}

// handler to add a Lyric
exports.addLyric = (req, res) => {
    const { songId, lyricsText } = req.body;

    lyricsModel.addLyric(songId, lyricsText, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
        } else {
            return res.status(201).json({ message: 'Lyrics added successfully' });
        }
    })
}

// handler to update a Lyric
exports.updateLyric = (req, res) => {
    const { lyricsText } = req.body;
    const lyricId = req.params.lyricId;

    lyricsModel.updateLyric(lyricsText, lyricId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Lyrics updated successfully' });
        }
    })
}

// handler to delete a Lyric
exports.deleteLyric = (req, res) => {
    const lyricId = req.params.lyricId;

    lyricsModel.deleteLyric(lyricId, (error, data) => {
        if (error) {
            res.status(500).json({ Error: 'Internal Server Error' });
            console.error(error)
        } else {
            return res.status(201).json({ message: 'Lyrics deleted successfully' })
        }
    })
}