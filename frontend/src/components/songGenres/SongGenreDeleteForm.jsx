import React, { useState } from 'react';
import Axios from 'axios';

function SongGenreDeleteForm({ data, onDelete }) {
    // set state variables to delete a Song Genre
    const [deleteSongGenreId, setDeleteSongGenreId] = useState('');

    // send a DELETE request to delete a Song Genre
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/song-genres/${deleteSongGenreId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Album
            setDeleteSongGenreId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Album form
    return (
        <div className="form">
            <legend>Delete a Song Genre</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="songGenreId">Select Song Genre:
                    <select
                        name="songGenreId"
                        id="songGenreId"
                        value={deleteSongGenreId}
                        onChange={(e) => setDeleteSongGenreId(e.target.value)}>

                        <option disabled value="">
                            Select Song Genre
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.songGenreId}>
                                ({d.songGenreId}) {d.songTitle}: {d.genreName}
                            </option>
                        ))}
                    </select>

                    <button
                        type="button"
                        className="delete-icon"
                        onClick={deleteData}>
                        Delete Song Genre
                    </button>

                </label>

            </form>

        </div>
    )

}

export default SongGenreDeleteForm;