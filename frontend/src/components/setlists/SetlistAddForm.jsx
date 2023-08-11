import React, { useState } from 'react';
import Axios from 'axios';

function SetlistAddForm({ onAdd }) {
    // set state variables to add a Genre
    const [setlistName, setSetlistName] = useState('');

    // send a POST request to add a Genre
    const addData = async () => {
        try {
            // send POST request
            const response = await Axios.post('http://localhost:1989/setlists', {
                "setlistName": setlistName
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Genre
            setSetlistName('');

        } catch (error) {
            console.error(error)
        }
    }

    // return the add Setlist form
    return (
        <div className="form">
            <legend>Add a Setlist</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label htmlFor="setlistName">Setlist Name:
                    <input
                        type="text"
                        placeholder="Setlist Name"
                        value={setlistName}
                        onChange={(e) => setSetlistName(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Setlist
                </button>
            </form>
        </div>
    )

}

export default SetlistAddForm;