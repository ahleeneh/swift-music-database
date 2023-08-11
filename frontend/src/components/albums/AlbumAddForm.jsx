import React, { useState } from 'react';
import Axios from 'axios';

function AlbumAddForm({ onAdd }) {
    // set state variables to add an Album
    const [albumTitle, setAlbumTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [description, setDescription] = useState('');

    // send a POST request to add an Album
    const addData = async () => {
        try {
            // send POST request
            const response = await Axios.post('http://localhost:1989/albums', {
                "albumTitle": albumTitle,
                "releaseDate": releaseDate,
                "description": description
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Album
            setAlbumTitle('');
            setReleaseDate('');
            setDescription('');

        } catch (error) {
            console.error(error)
        }
    }

    // return the add Album form
    return (
        <div className="form">
            <legend>Add an Album</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label htmlFor="albumTitle">Album Title:
                    <input
                        type="text"
                        placeholder="Album Title"
                        value={albumTitle}
                        onChange={(e) => setAlbumTitle(e.target.value)}/>
                </label>

                <label htmlFor="releaseDate">Release Date:
                    <input
                        type="date"
                        value={releaseDate}
                        onChange={(e) => setReleaseDate(e.target.value)}/>
                </label>

                <label htmlFor="description">Description:
                    <textarea
                        placeholder="Album Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Album
                </button>
            </form>
        </div>
    )

}

export default AlbumAddForm;