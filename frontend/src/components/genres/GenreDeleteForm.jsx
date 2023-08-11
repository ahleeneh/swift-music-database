import React, { useState } from 'react';
import Axios from 'axios';

function GenreDeleteForm({ data, onDelete }) {
    // set state variables to delete a Genre
    const [deleteGenreId, setDeleteGenreId] = useState('');

    // send a DELETE request to delete a Genre
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/genres/${deleteGenreId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Album
            setDeleteGenreId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Album form
    return (
        <div className="form">
            <legend>Delete a Genre</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="genreId">Select a Genre:
                    <select
                        name="genreId"
                        id="genreId"
                        value={deleteGenreId}
                        onChange={(e) => setDeleteGenreId(e.target.value)}>

                        <option disabled value="">
                            Select a Genre
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.genreId}>
                                {d.genreName}
                            </option>
                        ))}
                    </select>

                    <button
                        type="button"
                        className="delete-icon"
                        onClick={deleteData}>
                        Delete Genre
                    </button>

                </label>

            </form>

        </div>
    )

}

export default GenreDeleteForm;