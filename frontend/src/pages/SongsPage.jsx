import React, { useEffect, useState } from 'react';
import SongsTable from '../components/songs/SongsTable';
import SongAddForm from '../components/songs/SongAddForm';
import SongDeleteForm from '../components/songs/SongDeleteForm';
import SongUpdateForm from '../components/songs/SongUpdateForm';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function SongsPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSong, setSelectedSong] = useState(false);

    // send a GET request to view all Songs
    const getSongs = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/songs');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getSongs();
    }, [])

    //open the edit modal with the selected Song
    const openEditModal = (song) => {
        setSelectedSong(song);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Songs table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Songs</h2>
                    </div>

                    <div className="card-header-right">
                        <button
                            className="add-icon"
                            onClick={() => setIsAddModalOpen(true)}>
                            <AddOutlinedIcon/>ADD
                        </button>
                        <button
                            className="delete-icon"
                            onClick={() => setIsDeleteModalOpen(true)}>
                            <DeleteOutlineOutlinedIcon/>DELETE
                        </button>
                    </div>

                </div>

                <SongsTable data={data} onEdit={openEditModal}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <SongAddForm onAdd={() => {
                    getSongs();
                    setIsAddModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <SongDeleteForm data={data} onDelete={() => {
                    getSongs();
                    setIsDeleteModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <SongUpdateForm
                    selectedSong={selectedSong}
                    onUpdate={() => {
                        getSongs();
                        setIsEditModalOpen(false);
                    }}/>
            </Modal>

        </div>
    );
}

export default SongsPage;