import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function SongGenreAddForm({ onAdd }) {
    // set state variables to add a Location
    const [songId, setSongId] = useState('');
    const [genreId, setGenreId] = useState('');
    const [songDropdown, setSongDropdown] = useState([]);
    const [genreDropdown, setGenreDropdown] = useState([]);

    // send a GET request to view all Songs for the Songs drop-down
    const getSongDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/songs');
            setSongDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch Songs when the component is mounted
    useEffect(() => {
        getSongDropdown();
    }, []);

    // send a GET request to view all Genres for the Genres drop-down
    const getGenreDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/genres');
            setGenreDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch Items when the component is mounted
    useEffect(() => {
        getGenreDropdown();
    }, []);

    // send a POST request to add a Song Genre
    const addData = async () => {
        try {
            // send POST request
            const response = await Axios.post('http://localhost:1989/song-genres', {
                "songId": songId,
                "genreId": genreId
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Item
            setSongId('');
            setGenreId('');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="form">
            <legend>Add a Song Genre</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="songId">Song:
                    <select
                        name="songId"
                        id="songId"
                        value={songId}
                        onChange={(e) => setSongId(e.target.value)}>

                        <option disabled value="">
                            Select Song
                        </option>

                        {songDropdown.map(song => (
                            <option key={song.songId} value={song.songId}>
                                {song.songTitle}
                            </option>
                        ))}

                    </select>
                </label>

                <label htmlFor="genreId">Genre:
                    <select
                        name="genreId"
                        id="genreId"
                        value={genreId}
                        onChange={(e) => setGenreId(e.target.value)}>

                        <option disabled value="">
                            Select Genre
                        </option>

                        {genreDropdown.map(genre => (
                            <option key={genre.genreId} value={genre.genreId}>
                                {genre.genreName}
                            </option>
                        ))}

                    </select>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Song-Genre
                </button>

            </form>
        </div>
    )

}

export default SongGenreAddForm;