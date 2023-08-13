import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SetlistsTable from '../components/setlists/SetlistsTable';
import SetlistAddForm from '../components/setlists/SetlistAddForm';
import SetlistDeleteForm from '../components/setlists/SetlistDeleteForm';
import SetlistUpdateForm from '../components/setlists/SetlistUpdateForm';
import SetlistViewSongs from '../components/setlists/SetlistViewSongs';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

function SetlistsPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSetlist, setSelectedSetlist] = useState(false);
    const [isViewSongsModalOpen, setIsViewSongsModalOpen] = useState(false);


    // send a GET request to view all Setlists
    const getSetlists = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/setlists');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getSetlists();
    }, [])


    const openViewSongsModal = (setlist) => {
        setSelectedSetlist(setlist);
        setIsViewSongsModalOpen(true);
    };

    //open the edit modal with the selected Setlist
    const openEditModal = (setlist) => {
        setSelectedSetlist(setlist);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Setlists table
    return (
        <div>

            <div className="card">

                <div className="breadcrumbs">
                    <Link to="/">Home </Link> /
                    <span> Setlists </span>
                </div>

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Setlists</h2>
                    </div>

                    <div className="card-header-right">
                        <Link to="/setlist-songs">
                            <button
                                className="view-icon">
                                SETLIST SONGS<ArrowForwardRoundedIcon/>
                            </button>
                        </Link>
                        <button
                            className="add-icon"
                            onClick={() => setIsAddModalOpen(true)}>
                            ADD<AddRoundedIcon/>
                        </button>
                        <button
                            className="delete-icon"
                            onClick={() => setIsDeleteModalOpen(true)}>
                            DELETE<DeleteRoundedIcon/>
                        </button>
                    </div>

                </div>

                <SetlistsTable data={data} onEdit={openEditModal} onView={openViewSongsModal} />

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <SetlistAddForm onAdd={() => {
                    getSetlists();
                    setIsAddModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <SetlistDeleteForm data={data} onDelete={() => {
                    getSetlists();
                    setIsDeleteModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <SetlistUpdateForm
                    selectedSetlist={selectedSetlist}
                    onUpdate={() => {
                        getSetlists();
                        setIsEditModalOpen(false);
                    }}/>
            </Modal>

            <Modal
                isOpen={isViewSongsModalOpen}
                onClose={() => setIsViewSongsModalOpen(false)}>
                <SetlistViewSongs
                    selectedSetlist={selectedSetlist}
                    />
            </Modal>

        </div>
    );
}

export default SetlistsPage;