import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function SongGenreUpdateForm({ selectedSongGenre, onUpdate }) {
    // set state variables to edit Song Genres
    const [editSongGenreId, setEditSongGenreId] = useState('');
    const [editGenreId, setEditGenreId] = useState('');

    const [genreDropdown, setGenreDropdown] = useState([]);

    // function to send a GET request to view all Genres for the Genre drop down
    const getGenreForDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/genres');
            setGenreDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // function to update the state variables for a Song Genres
    const updateStateVariables = (selectedSongGenre) => {
        setEditSongGenreId(selectedSongGenre.songGenreId);

        const matchingGenre = genreDropdown.find(genre => genre.genreName === selectedSongGenre.genreName);
        if (matchingGenre) {
            setEditGenreId(matchingGenre.genreId);
        }
    }

    // update state variables if a Song Genre is selected
    useEffect(() => {
        if (selectedSongGenre) {
            updateStateVariables(selectedSongGenre);
        }
    }, [selectedSongGenre, genreDropdown]);

    // fetch the Genres when the component is mounted
    useEffect(() => {
        getGenreForDropdown();
    }, [])

    // function to send a PUT request to update the selected Song Genre
    const updateData = async () => {
        try {
            // send PUT request
            const response = await Axios.put(`http://localhost:1989/song-genres/${editSongGenreId}`, {
                "genreId": editGenreId
            });

            // trigger parent component update
            onUpdate();

            // clear fields identifying the Lyrics
            setEditSongGenreId('');
            setEditGenreId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the update Lyrics form
    return (
        <div className="form">
            <legend>Update a Song Genre</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateGenreId">Genre:
                    <select
                        name="updateGenreId"
                        id="updateGenreId"
                        value={editGenreId}
                        onChange={(e) => setEditGenreId(e.target.value)}>
                        <option disabled value="">Select a Genre</option>

                        {genreDropdown.map(genre => (
                            <option key={genre.genreId} value={genre.genreId}>
                                {genre.genreName}
                            </option>
                        ))}
                    </select>
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Song Genre
                </button>

            </form>
        </div>
    )

}

export default SongGenreUpdateForm;