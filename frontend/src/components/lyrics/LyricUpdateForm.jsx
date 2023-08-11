import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function LyricUpdateForm({ selectedLyric, onUpdate }) {
    // set state variables to edit Lyrics
    const [editLyricId, setEditLyricId] = useState('');
    const [editLyricsText, setEditLyricsText] = useState('');

    // update state variables when Lyrics is selected in the dropdown
    useEffect(() => {
        if (selectedLyric) {
            setEditLyricId(selectedLyric.lyricId);
            setEditLyricsText(selectedLyric.lyricsText);
        }
    }, [selectedLyric])

    // send a PUT request to update the Lyrics
    const updateData = async () => {
        try {
            // send PUT request
            const response = await Axios.put(`http://localhost:1989/lyrics/${editLyricId}`, {
                "lyricId": editLyricId,
                "lyricsText": editLyricsText
            });

        } catch (error) {
            console.error(error);
        }

        // trigger parent component update
        onUpdate();

        // clear fields identifying the Lyrics
        setEditLyricId('');
        setEditLyricsText('');

    }

    // return the update Lyrics form
    return (
        <div className="form">
            <legend>Update Lyrics</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateLyricsText">Lyrics:
                    <textarea
                        name="updateLyricsText"
                        id="updateLyricsText"
                        value={editLyricsText === null ? '' : editLyricsText}
                        onChange={(e) => setEditLyricsText(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Lyrics
                </button>

            </form>
        </div>
    )

}

export default LyricUpdateForm;