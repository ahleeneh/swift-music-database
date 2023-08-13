import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function SetlistSongUpdateForm({ selectedSetlistSong, onUpdate }) {
    // set state variables to edit Song Genres
    const [editSetlistSongId, setEditSetlistSongId] = useState('');
    const [editSetlistId, setEditSetlistId] = useState('');
    const [editSongId, setEditSongId] = useState('');

    const [setlistDropdown, setSetlistDropdown] = useState([]);
    const [songDropdown, setSongDropdown] = useState([]);

    // function to send a GET request to view all Setlists for the Setlist drop down
    const getSetlistDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/setlists');
            setSetlistDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // function to send a GET request to view all Genres for the Genre drop down
    const getSongDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/songs');
            setSongDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // function to update the state variables for a Song Genres
    const updateStateVariables = (selectedSetlistSong) => {
        setEditSetlistSongId(selectedSetlistSong.setlistSongId);

        const matchingSetlist = setlistDropdown.find(setlist => setlist.setlistName === selectedSetlistSong.setlistName);
        if (matchingSetlist) {
            setEditSetlistId(matchingSetlist.setlistId);
        }

        const matchingSong = songDropdown.find(song => song.songTitle === selectedSetlistSong.songTitle);
        if (matchingSong) {
            setEditSongId(matchingSong.songId);
        }
    };

    // update state variables if a Song Genre is selected
    useEffect(() => {
        if (selectedSetlistSong) {
            updateStateVariables(selectedSetlistSong);
        }
    }, [selectedSetlistSong, setlistDropdown, songDropdown]);

    // fetch the Setlists when the component is mounted
    useEffect(() => {
        getSetlistDropdown();
    }, [])

    // fetch the Songs when the component is mounted
    useEffect(() => {
        getSongDropdown();
    }, [])

    // function to send a PUT request to update the selected Song Genre
    const updateData = async () => {
        try {
            // send PUT request
            const response = await Axios.put(`http://localhost:1989/setlist-songs/${editSetlistSongId}`, {
                "setlistId": editSetlistId,
                "songId": editSongId
            });

            // trigger parent component update
            onUpdate();

            // clear fields identifying the Lyrics
            setEditSetlistSongId('');
            setEditSetlistId('');
            setEditSongId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the update Setlist Song form
    return (
        <div className="form">
            <legend>Update a Setlist Song</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateSetlistId">Setlist:
                    <select
                        name="updateSetlistId"
                        id="updateSetlistId"
                        value={editSetlistId}
                        onChange={(e) => setEditSetlistId(e.target.value)}>
                        <option disabled value="">Select a Setlist</option>

                        {setlistDropdown.map(setlist => (
                            <option key={setlist.setlistId} value={setlist.setlistId}>
                                {setlist.setlistName}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="updateSongId">Song:
                    <select
                        name="updateSongId"
                        id="updateSongId"
                        value={editSongId}
                        onChange={(e) => setEditSongId(e.target.value)}>
                        <option disabled value="">Select a Song</option>

                        {songDropdown.map(song => (
                            <option key={song.songId} value={song.songId}>
                                {song.songTitle}
                            </option>
                        ))}
                    </select>
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Setlist Song
                </button>

            </form>
        </div>
    )

}

export default SetlistSongUpdateForm;