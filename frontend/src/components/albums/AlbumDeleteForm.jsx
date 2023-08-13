import React, { useState } from 'react';
import Axios from 'axios';

function AlbumDeleteForm({ data, onDelete }) {
    // set state variables to delete an Album
    const [deleteAlbumId, setDeleteAlbumId] = useState('');

    // send a DELETE request to delete an Album
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/albums/${deleteAlbumId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Album
            setDeleteAlbumId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Album form
    return (
        <div className="form">
            <legend>Delete an Album</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="albumId">Select an Album:
                    <select
                        name="albumId"
                        id="albumId"
                        value={deleteAlbumId}
                        onChange={(e) => setDeleteAlbumId(e.target.value)}>

                        <option disabled value="">
                            Select an Album
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.albumId}>
                                ({d.albumId}) {d.albumTitle}
                            </option>
                        ))}
                    </select>

                    <button
                        type="button"
                        className="delete-icon"
                        onClick={deleteData}>
                        Delete Album
                    </button>

                </label>

            </form>

        </div>
    )

}

export default AlbumDeleteForm;