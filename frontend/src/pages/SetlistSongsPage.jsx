import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SetlistSongsTable from '../components/setlistSongs/SetlistSongsTable';
import SetlistSongAddForm from '../components/setlistSongs/SetlistSongAddForm';
import SetlistSongDeleteForm from '../components/setlistSongs/SetlistSongDeleteForm';
import SetlistSongUpdateForm from '../components/setlistSongs/SetlistSongUpdateForm';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function SetlistSongsPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSetlistSong, setSelectedSetlistSong] = useState(false);

    // send a GET request to view all Setlist Songs
    const getSetlistSongs = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/setlist-songs');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getSetlistSongs();
    }, [])

    // open the edit modal with the selected Setlist Song
    const openEditModal = (setlistSong) => {
        setSelectedSetlistSong(setlistSong);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Setlist Songs table
    return (
        <div>

            <div className="card">

                <div className="breadcrumbs">
                    <Link to="/">Home </Link> /
                    <Link to="/setlists"> Setlists </Link> /
                    <span> Setlist Songs</span>
                </div>

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Setlist Songs</h2>
                    </div>

                    <div className="card-header-right">
                        <button
                            className="add-icon"
                            onClick={() => setIsAddModalOpen(true)}>
                            <AddRoundedIcon/>ADD
                        </button>
                        <button
                            className="delete-icon"
                            onClick={() => setIsDeleteModalOpen(true)}>
                            <DeleteRoundedIcon/>DELETE
                        </button>
                    </div>

                </div>

                <SetlistSongsTable data={data} onEdit={openEditModal} itemsPerPage={20}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <SetlistSongAddForm
                    onAdd={() => {
                        getSetlistSongs();
                        setIsAddModalOpen(false);
                    }}/>
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <SetlistSongDeleteForm
                    data={data}
                    onDelete={() => {
                        getSetlistSongs();
                        setIsDeleteModalOpen(false);
                    }}/>
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <SetlistSongUpdateForm
                    selectedSetlistSong={selectedSetlistSong}
                    onUpdate={() => {
                        getSetlistSongs();
                        setIsEditModalOpen(false);
                    }}/>
            </Modal>

        </div>
    );
}

export default SetlistSongsPage;