import React, { useState } from 'react';
import Axios from 'axios';

function SetlistDeleteForm({ data, onDelete }) {
    // set state variables to delete a Setlist
    const [deleteSetlistId, setDeleteSetlistId] = useState('');

    // send a DELETE request to delete a Setlist
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/setlists/${deleteSetlistId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Setlist
            setDeleteSetlistId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Album form
    return (
        <div className="form">
            <legend>Delete a Setlist</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="setlistId">Select a Setlist:
                    <select
                        name="setlistId"
                        id="setlistId"
                        value={deleteSetlistId}
                        onChange={(e) => setDeleteSetlistId(e.target.value)}>

                        <option disabled value="">
                            Select a Setlist
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.setlistId}>
                                ({d.setlistId}) {d.setlistName}
                            </option>
                        ))}
                    </select>

                </label>

                <button
                    type="button"
                    className="delete-icon"
                    onClick={deleteData}>
                    Delete Setlist
                </button>

            </form>

        </div>
    )

}

export default SetlistDeleteForm;