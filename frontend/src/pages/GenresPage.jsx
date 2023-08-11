import React, {useEffect, useState} from 'react';
import GenresTable from '../components/genres/GenresTable';
import GenreAddForm from '../components/genres/GenreAddForm';
import GenreDeleteForm from '../components/genres/GenreDeleteForm';
import GenreUpdateForm from '../components/genres/GenreUpdateForm';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function GenresPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState(false);

    // send a GET request to view all Genres
    const getGenres = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/genres');

            // store Genres data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getGenres();
    }, [])

    //open the edit modal with the selected Item
    const openEditModal = (genre) => {
        setSelectedGenre(genre);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Genres table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Genres</h2>
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

                <GenresTable data={data} onEdit={openEditModal}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <GenreAddForm onAdd={() => {
                    getGenres();
                    setIsAddModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <GenreDeleteForm data={data} onDelete={() => {
                    getGenres();
                    setIsDeleteModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <GenreUpdateForm
                    selectedGenre={selectedGenre}
                    onUpdate={() => {
                        getGenres();
                        setIsEditModalOpen(false);
                    }}/>
            </Modal>

        </div>
    );
}

export default GenresPage;