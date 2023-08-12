import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function SongAddForm({ onAdd }) {
    // set state variables to add a Song
    const [songTitle, setSongTitle] = useState('');
    const [songDuration, setSongDuration] = useState('');
    const [albumId, setAlbumId] = useState('');
    const [featuredArtist, setFeaturedArtist] = useState('');
    const [albumDropdown, setAlbumDropdown] = useState([]);

    // send a GET request to view all Albums for the Albums drop-down
    const getAlbumDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/albums');
            setAlbumDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch the Songs when the component is mounted
    useEffect(() => {
        getAlbumDropdown();
    }, []);

    // send a POST request to add a Song
    const addData = async () => {
        try {
            const featured = featuredArtist === '' ? null : featuredArtist;

            // convert mm:ss to time format (hh:mm:ss)
            const [minutes, seconds] = songDuration.split(":");
            const convertedDuration = `00:${minutes}:${seconds}`;

            // send POST request
            const response = await Axios.post('http://localhost:1989/songs', {
                "songTitle": songTitle,
                "songDuration": convertedDuration,
                "albumId": albumId,
                "featuredArtist": featured
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Genre
            setSongTitle('');
            setSongDuration('');
            setAlbumId('');
            setFeaturedArtist('');

        } catch (error) {
            console.error(error)
        }
    }

    // return the add Genre form
    return (
        <div className="form">
            <legend>Add a Song</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label htmlFor="songTitle">Song Title:
                    <input
                        type="text"
                        placeholder="Song Title"
                        value={songTitle}
                        onChange={(e) => setSongTitle(e.target.value)}/>
                </label>

                <label htmlFor="albumId">Album:
                    <select
                        name="albumId"
                        id="albumId"
                        value={albumId}
                        onChange={(e) => setAlbumId(e.target.value)}>

                        <option disabled value="">
                            Select an Album
                        </option>

                        {albumDropdown.map(album => (
                            <option key={album.albumId} value={album.albumId}>
                                {album.albumTitle}
                            </option>
                        ))}

                    </select>
                </label>

                <label htmlFor="songDuration">Duration:
                    <input
                        type="text"
                        placeholder="mm:ss"
                        value={songDuration}
                        onChange={(e) => setSongDuration(e.target.value)}/>
                </label>

                <label htmlFor="featuredArtist">Featured Artist:
                    <input
                        type="text"
                        placeholder="Featured Artist (can be left blank)"
                        value={featuredArtist}
                        onChange={(e) => setFeaturedArtist(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Song
                </button>
            </form>
        </div>
    )

}

export default SongAddForm;