import React, { useState } from 'react';
import Axios from 'axios';

function GenreAddForm({ onAdd }) {
    // set state variables to add a Genre
    const [genreName, setGenreName] = useState('');

    // send a POST request to add a Genre
    const addData = async () => {
        try {
            // send POST request
            const response = await Axios.post('http://localhost:1989/genres', {
                "genreName": genreName
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Genre
            setGenreName('');

        } catch (error) {
            console.error(error)
        }
    }

    // return the add Gemre form
    return (
        <div className="form">
            <legend>Add a Genre</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label htmlFor="genreName">Genre Name:
                    <input
                        type="text"
                        placeholder="Genre Name"
                        value={genreName}
                        onChange={(e) => setGenreName(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Genre
                </button>
            </form>
        </div>
    )

}

export default GenreAddForm;