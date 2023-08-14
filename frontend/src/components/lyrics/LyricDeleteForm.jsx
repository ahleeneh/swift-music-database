import React, { useState } from 'react';
import Axios from 'axios';

function LyricDeleteForm({ data, onDelete }) {
    // set state variables to delete a Genre
    const [deleteLyricId, setDeleteLyricId] = useState('');

    // send a DELETE request to delete a Genre
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/lyrics/${deleteLyricId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Album
            setDeleteLyricId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Album form
    return (
        <div className="form">
            <legend>Delete Lyrics</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="lyricId">Select Lyrics:
                    <select
                        name="lyricId"
                        id="lyricId"
                        value={deleteLyricId}
                        onChange={(e) => setDeleteLyricId(e.target.value)}>

                        <option disabled value="">
                            Select Lyrics
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.lyricId}>
                                ({d.lyricId}) {d.songTitle}
                            </option>
                        ))}
                    </select>

                </label>

                <button
                    type="button"
                    className="delete-icon"
                    onClick={deleteData}>
                    Delete Lyrics
                </button>

            </form>

        </div>
    )

}

export default LyricDeleteForm;