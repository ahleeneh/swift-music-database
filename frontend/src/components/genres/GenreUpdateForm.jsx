import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function GenreUpdateForm({ selectedGenre, onUpdate }) {
    // set state variables to edit an Album
    const [editGenreId, setEditGenreId] = useState('');
    const [editGenreName, setEditGenreName] = useState('');

    // update state variables when an Album is selected in the dropdown
    useEffect(() => {
        if (selectedGenre) {
            setEditGenreId(selectedGenre.genreId);
            setEditGenreName(selectedGenre.genreName);
        }
    }, [selectedGenre])

    // send a PUT request to update the Album
    const updateData = async () => {
        try {
            // send PUT request
            const response = await Axios.put(`http://localhost:1989/genres/${editGenreId}`, {
                "genreId": editGenreId,
                "genreName": editGenreName
            });

        } catch (error) {
            console.error(error);
        }

        // trigger parent component update
        onUpdate();

        // clear fields identifying the Album
        setEditGenreId('');
        setEditGenreName('');

    }

    // return the update Album form
    return (
        <div className="form">
            <legend>Update a Genre</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateGenreName">Name:
                    <input
                        type="text"
                        name="updateGenreName"
                        id="updateGenreName"
                        value={editGenreName}
                        onChange={(e) => setEditGenreName(e.target.value)} />
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Genre
                </button>

            </form>
        </div>
    )

}

export default GenreUpdateForm;