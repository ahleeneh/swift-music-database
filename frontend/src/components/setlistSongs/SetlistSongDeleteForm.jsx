import React, { useState } from 'react';
import Axios from 'axios';

function SetlistSongDeleteForm({ data, onDelete }) {
    // set state variables to delete a Setlist Song
    const [deleteSetlistSongId, setDeleteSetlistSongId] = useState('');

    // send a DELETE request to delete a Setlist Song
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/setlist-songs/${deleteSetlistSongId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Album
            setDeleteSetlistSongId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Album form
    return (
        <div className="form">
            <legend>Delete a Setlist Song</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="setlistSongId">Select Setlist Song:
                    <select
                        name="setlistSongId"
                        id="setlistSongId"
                        value={deleteSetlistSongId}
                        onChange={(e) => setDeleteSetlistSongId(e.target.value)}>

                        <option disabled value="">
                            Select Setlist Song
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.setlistSongId}>
                                ({d.setlistSongId}) {d.setlistName}: {d.songTitle}
                            </option>
                        ))}
                    </select>

                    <button
                        type="button"
                        className="delete-icon"
                        onClick={deleteData}>
                        Delete Setlist Song
                    </button>

                </label>

            </form>

        </div>
    )

}

export default SetlistSongDeleteForm;