import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function LyricAddForm({ onAdd }) {
    // set state variables to add a Lyric
    const [songId, setSongId] = useState('');
    const [lyricsText, setLyricsText] = useState('');
    const [songDropdown, setSongDropdown] = useState([]);

    // send a GET request to view all Songs for the Songs drop-down
    const getSongDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/songs');
            setSongDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch the Songs when the component is mounted
    useEffect(() => {
        getSongDropdown();
    }, []);

    // send a POST request to add a Lyric
    const addData = async () => {
        try {
            // send POST request
            const response = await Axios.post('http://localhost:1989/lyrics', {
                "songId": songId,
                "lyricsText": lyricsText
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Genre
            setSongId('');
            setLyricsText('');

        } catch (error) {
            console.error(error)
        }
    }

    // return the add Genre form
    return (
        <div className="form">
            <legend>Add Lyrics</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label htmlFor="songId">Song:
                    <select
                        name="songId"
                        id="songId"
                        value={songId}
                        onChange={(e) => setSongId(e.target.value)}>

                        <option disabled value="">
                            Select a Song
                        </option>

                        {songDropdown.map(song => (
                            <option key={song.songId} value={song.songId}>
                                {song.songTitle}
                            </option>
                        ))}

                    </select>
                </label>


                <label htmlFor="lyricsText">Lyrics:
                    <textarea
                        placeholder="Lyrics Text"
                        value={lyricsText}
                        onChange={(e) => setLyricsText(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Lyrics
                </button>
            </form>
        </div>
    )

}

export default LyricAddForm;