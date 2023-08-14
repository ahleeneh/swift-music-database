import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function AlbumUpdateForm({ selectedAlbum, onUpdate }) {
    // set state variables to edit an Album
    const [editAlbumId, setEditAlbumId] = useState('');
    const [editAlbumTitle, setEditAlbumTitle] = useState('');
    const [editReleaseDate, setEditReleaseDate] = useState('');
    const [editDescription, setEditDescription] = useState('');

    // update state variables when an Album is selected in the dropdown
    useEffect(() => {
        if (selectedAlbum) {
            setEditAlbumId(selectedAlbum.albumId);
            setEditAlbumTitle(selectedAlbum.albumTitle);
            setEditReleaseDate(selectedAlbum.releaseDate);
            setEditDescription(selectedAlbum.description);
        }
    }, [selectedAlbum])

    // send a PUT request to update the Album
    const updateData = async () => {
        try {
            // send PUT request
            const response = await Axios.put(`http://localhost:1989/albums/${editAlbumId}`, {
                "albumTitle": editAlbumTitle,
                "releaseDate": editReleaseDate,
                "description": editDescription
            });
            console.log(response)

        } catch (error) {
            console.error(error);
        }

        // trigger parent component update
        onUpdate();

        // clear fields identifying the Album
        setEditAlbumId('');
        setEditAlbumTitle('');
        setEditReleaseDate('');
        setEditDescription('');

    }

    // return the update Album form
    return (
        <div className="form">
            <legend>Update an Album</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateAlbumTitle">Album Title:
                    <input
                        type="text"
                        name="updateAlbumTitle"
                        id="updateAlbumTitle"
                        value={editAlbumTitle}
                        onChange={(e) => setEditAlbumTitle(e.target.value)} />
                </label>

                <label htmlFor="updateReleaseDate">Release Date:
                    <input
                        type="date"
                        name="updateReleaseDate"
                        id="updateReleaseDate"
                        value={editReleaseDate}
                        onChange={(e) => setEditReleaseDate(e.target.value)} />
                </label>

                <label htmlFor="updateDescription">Description:
                    <textarea
                        name="updateDescription"
                        id="updateDescription"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Album
                </button>

            </form>
        </div>
    )

}

export default AlbumUpdateForm;