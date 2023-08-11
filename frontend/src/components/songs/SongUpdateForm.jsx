import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function SongUpdateForm({ selectedSong, onUpdate }) {
    // set state variables to edit a Song
    const [editSongId, setEditSongId] = useState('');
    const [editSongTitle, setEditSongTitle] = useState('');
    const [editSongDuration, setEditSongDuration] = useState('');
    const [editAlbumId, setEditAlbumId] = useState('');
    const [editFeaturedArtist, setEditFeaturedArtist] = useState('');

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

    // function to update the state variables for a SOng
    const updateStateVariables = (selectedSong) => {
        setEditSongId(selectedSong.songId);
        setEditSongTitle(selectedSong.songTitle);
        setEditSongDuration(selectedSong.songDuration);

        const matchingAlbum = albumDropdown.find(album => album.albumTitle === selectedSong.albumTitle);
        if (matchingAlbum) {
            setEditAlbumId(matchingAlbum.albumId);
        }

        setEditFeaturedArtist(selectedSong.featuredArtist);
    }

    // update state variables if a Song is selected
    useEffect(() => {
        if (selectedSong) {
            updateStateVariables(selectedSong);
        }
    }, [selectedSong, albumDropdown]);

    // fetch players when the component is mounted
    useEffect(() => {
        getAlbumDropdown();
    }, []);

    // send a PUT request to update the Song
    const updateData = async () => {
        try {
            const featured = editFeaturedArtist === '' ? null : editFeaturedArtist;

            // convert mm:ss to time format (hh:mm:ss)
            const [minutes, seconds] = editSongDuration.split(":");
            const convertedDuration = `00:${minutes}:${seconds}`;

            // send PUT request
            const response = await Axios.put(`http://localhost:1989/songs/${editSongId}`, {
                "songTitle": editSongTitle,
                "songDuration": convertedDuration,
                "albumId": editAlbumId,
                "featuredArtist": featured,
            });

            // trigger parent component update
            onUpdate();

            // clear fields identifying the Lyrics
            setEditSongTitle('');
            setEditSongDuration('');
            setEditAlbumId('');
            setEditFeaturedArtist('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the update Lyrics form
    return (
        <div className="form">
            <legend>Update Song</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateSongTitle">Song Title:
                    <input
                        type="text"
                        placeholder="Song Title"
                        value={editSongTitle}
                        onChange={(e) => setEditSongTitle(e.target.value)}/>
                </label>

                <label htmlFor="updateSongDuration">Duration:
                    <input
                        type="text"
                        placeholder="mm:ss"
                        value={editSongDuration}
                        onChange={(e) => setEditSongDuration(e.target.value)}/>
                </label>

                <label htmlFor="updateAlbumId">Album:
                    <select
                        name="updateAlbumId"
                        id="updateAlbumId"
                        value={editAlbumId}
                        onChange={(e) => setEditAlbumId(e.target.value)}>

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

                <label htmlFor="updateFeaturedArtist">Featured Artist:
                    <input
                        type="text"
                        placeholder="Featured Artist (can be left blank)"
                        value={editFeaturedArtist}
                        onChange={(e) => setEditFeaturedArtist(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Song
                </button>

            </form>
        </div>
    )

}

export default SongUpdateForm;