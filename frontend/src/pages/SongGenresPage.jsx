import React, {useEffect, useState} from 'react';
import SongGenresTable from '../components/songGenres/SongGenresTable';
import SongGenreAddForm from '../components/songGenres/SongGenreAddForm';
import SongGenreDeleteForm from '../components/songGenres/SongGenreDeleteForm';
import SongGenreUpdateForm from '../components/songGenres/SongGenreUpdateForm';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function SongGenresPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedSongGenre, setSelectedSongGenre] = useState(false);

    // send a GET request to view all Song Genres
    const getSongGenres = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/song-genres');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getSongGenres();
    }, [])

    // open the edit modal with the selected Backpack
    const openEditModal = (songGenre) => {
        setSelectedSongGenre(songGenre);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Song Genres table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Song Genres</h2>
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

                <SongGenresTable data={data} onEdit={openEditModal}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <SongGenreAddForm
                    onAdd={() => {
                        getSongGenres();
                        setIsAddModalOpen(false);
                    }}/>
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <SongGenreDeleteForm
                    data={data}
                    onDelete={() => {
                        getSongGenres();
                        setIsDeleteModalOpen(false);
                    }}/>
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <SongGenreUpdateForm
                    selectedSongGenre={selectedSongGenre}
                    onUpdate={() => {
                        getSongGenres();
                        setIsEditModalOpen(false);
                    }}/>
            </Modal>

        </div>
    );
}

export default SongGenresPage;