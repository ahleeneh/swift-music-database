import React, { useState } from 'react';
import Axios from 'axios';

function SongDeleteForm({ data, onDelete }) {
    // set state variables to delete a Song
    const [deleteSongId, setDeleteSongId] = useState('');

    // send a DELETE request to delete a Song
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/songs/${deleteSongId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Song
            setDeleteSongId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Song form
    return (
        <div className="form">
            <legend>Delete a Song</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="songId">Select Song:
                    <select
                        name="songId"
                        id="songId"
                        value={deleteSongId}
                        onChange={(e) => setDeleteSongId(e.target.value)}>

                        <option disabled value="">
                            Select Song
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.songId}>
                                ({d.songId}) {d.songTitle}
                            </option>
                        ))}
                    </select>

                </label>

                <button
                    type="button"
                    className="delete-icon"
                    onClick={deleteData}>
                    Delete Song
                </button>

            </form>

        </div>
    )

}

export default SongDeleteForm;