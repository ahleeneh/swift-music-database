import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function SetlistUpdateForm({ selectedSetlist, onUpdate }) {
    // set state variables to edit a Setlist
    const [editSetlistId, setEditSetlistId] = useState('');
    const [editSetlistName, setEditSetlistName] = useState('');

    // update state variables when a Setlist is selected in the dropdown
    useEffect(() => {
        if (selectedSetlist) {
            setEditSetlistId(selectedSetlist.setlistId);
            setEditSetlistName(selectedSetlist.setlistName);
        }
    }, [selectedSetlist])

    // send a PUT request to update the Setlist
    const updateData = async () => {
        try {
            // send PUT request
            const response = await Axios.put(`http://localhost:1989/setlists/${editSetlistId}`, {
                "setlistId": editSetlistId,
                "setlistName": editSetlistName
            });

        } catch (error) {
            console.error(error);
        }

        // trigger parent component update
        onUpdate();

        // clear fields identifying the Setlist
        setEditSetlistId('');
        setEditSetlistName('');

    }

    // return the update Setlist form
    return (
        <div className="form">
            <legend>Update a Setlist</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateSetlistName">Name:
                    <input
                        type="text"
                        name="updateSetlistName"
                        id="updateSetlistName"
                        value={editSetlistName}
                        onChange={(e) => setEditSetlistName(e.target.value)} />
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Setlist
                </button>

            </form>
        </div>
    )

}

export default SetlistUpdateForm;