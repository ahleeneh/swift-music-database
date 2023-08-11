import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function SetlistSongAddForm({ onAdd }) {
    // set state variables to add a Location
    const [setlistId, setSetlistId] = useState('');
    const [songId, setSongId] = useState('');
    const [setlistDropdown, setSetlistDropdown] = useState([]);
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

    // fetch Songs when the component is mounted
    useEffect(() => {
        getSongDropdown();
    }, []);

    // send a GET request to view all Setlists for the Setlists drop-down
    const getSetlistDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/setlists');
            setSetlistDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch Items when the component is mounted
    useEffect(() => {
        getSetlistDropdown();
    }, []);

    // send a POST request to add a Setlist Song
    const addData = async () => {
        try {
            // send POST request
            const response = await Axios.post('http://localhost:1989/setlist-songs', {
                "setlistId": setlistId,
                "songId": songId
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Item
            setSetlistId('');
            setSongId('');
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="form">
            <legend>Add a Setlist Song</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="setlistId">Setlist:
                    <select
                        name="setlistId"
                        id="setlistId"
                        value={setlistId}
                        onChange={(e) => setSetlistId(e.target.value)}>

                        <option disabled value="">
                            Select Setlist
                        </option>

                        {setlistDropdown.map(setlist => (
                            <option key={setlist.setlistId} value={setlist.setlistId}>
                                {setlist.setlistName}
                            </option>
                        ))}

                    </select>
                </label>

                <label htmlFor="songId">Song:
                    <select
                        name="songId"
                        id="songId"
                        value={songId}
                        onChange={(e) => setSongId(e.target.value)}>

                        <option disabled value="">
                            Select Song
                        </option>

                        {songDropdown.map(song => (
                            <option key={song.songId} value={song.songId}>
                                {song.songTitle}
                            </option>
                        ))}

                    </select>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Setlist Song
                </button>

            </form>
        </div>
    )

}

export default SetlistSongAddForm;