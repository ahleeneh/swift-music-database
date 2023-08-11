import React, { useEffect, useState } from 'react';
import LyricsTable from '../components/lyrics/LyricsTable';
import LyricAddForm from '../components/lyrics/LyricAddForm';
import LyricDeleteForm from '../components/lyrics/LyricDeleteForm';
import LyricUpdateForm from '../components/lyrics/LyricUpdateForm';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function LyricsPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedLyric, setSelectedLyric] = useState(false);


    // send a GET request to view all Lyrics
    const getLyrics = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/lyrics');

            // store Lyrics data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getLyrics();
    }, [])

    //open the edit modal with the selected Lyric
    const openEditModal = (lyric) => {
        setSelectedLyric(lyric);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Lyrics table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Lyrics</h2>
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

                <LyricsTable data={data} onEdit={openEditModal}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <LyricAddForm onAdd={() => {
                    getLyrics();
                    setIsAddModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <LyricDeleteForm data={data} onDelete={() => {
                    getLyrics();
                    setIsDeleteModalOpen(false);
                }}/>
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <LyricUpdateForm
                    selectedLyric={selectedLyric}
                    onUpdate={() => {
                        getLyrics();
                        setIsEditModalOpen(false);
                    }}/>
            </Modal>

        </div>
    );
}

export default LyricsPage;