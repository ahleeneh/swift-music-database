import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function SetlistViewSongs({ selectedSetlist }) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (selectedSetlist) {
            fetchSongs(selectedSetlist.setlistId);
        }
    }, [selectedSetlist]);

    const fetchSongs = async (selectedSetlist) => {
        try {
            const response = await Axios.get(`http://localhost:1989/setlists/${selectedSetlist}`);

            // Check if response data is an object
            if (typeof response.data === 'object') {
                // Split the setlistSongs string into an array if it's not null or undefined
                const songTitles = response.data.setlistSongs ? response.data.setlistSongs.split(', ') : [];

                // Create an array of song objects with songTitle property
                const songArray = songTitles.map((songTitle, index) => ({
                    songId: index, // You can use a unique identifier here
                    songTitle: songTitle
                }));

                setSongs(songArray);
            } else {
                console.error('Response data is not an object:', response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="form">
            {selectedSetlist && (
                <div>
                    <h2>{selectedSetlist.setlistName}</h2>
                    <ol>
                        {songs.map((song) => (
                            <li key={song.songId}>{song.songTitle}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}

export default SetlistViewSongs;