import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlbumsTable from '../components/albums/AlbumsTable';
import AlbumAddForm from '../components/albums/AlbumAddForm';
import AlbumDeleteForm from '../components/albums/AlbumDeleteForm';
import AlbumUpdateForm from '../components/albums/AlbumUpdateForm';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function AlbumsPage() {
    // store data fetched from backend
    const [data, setData] = useState([]);

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(false);

    // send a GET request to view all Albums
    const getAlbums = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/albums');

            // store Albums data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getAlbums();
    }, [])

    //open the edit modal with the selected Item
    const openEditModal = (album) => {
        setSelectedAlbum(album);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Albums table
    return (
        <div>

            <div className="card">

                <div className="breadcrumbs">
                    <Link to="/">Home </Link> /
                    <span> Albums </span>
                </div>

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Albums</h2>
                    </div>

                    <div className="card-header-right">
                        <button
                            className="add-icon"
                            onClick={() => setIsAddModalOpen(true)}>
                            <AddOutlinedIcon />ADD
                        </button>
                        <button
                            className="delete-icon"
                            onClick={() => setIsDeleteModalOpen(true)}>
                            <DeleteOutlineOutlinedIcon />DELETE
                        </button>
                    </div>

                </div>

                <AlbumsTable data={data} onEdit={openEditModal} itemsPerPage={10}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <AlbumAddForm
                    onAdd={() => { getAlbums(); setIsAddModalOpen(false); }} />
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <AlbumDeleteForm
                    data={data}
                    onDelete={() => { getAlbums(); setIsDeleteModalOpen(false); }} />
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <AlbumUpdateForm
                    selectedAlbum={selectedAlbum}
                    onUpdate={() => { getAlbums(); setIsEditModalOpen(false); }} />
            </Modal>

        </div>
    );
}

export default AlbumsPage;