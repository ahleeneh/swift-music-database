import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConcertsTable from '../components/concerts/ConcertsTable';
import ConcertAddForm from '../components/concerts/ConcertAddForm';
import ConcertDeleteForm from '../components/concerts/ConcertDeleteForm';
import ConcertUpdateForm from '../components/concerts/ConcertUpdateForm';
import Modal from '../components/Modal';
import Axios from 'axios';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

function ConcertsPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedConcert, setSelectedConcert] = useState(false);

    // send a GET request to view all Concerts
    const getConcerts = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/concerts');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getConcerts();
    }, [])

    // open the edit modal with the selected Concerts
    const openEditModal = (concert) => {
        setSelectedConcert(concert);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the concerts table
    return (
        <div>

            <div className="card">

                <div className="breadcrumbs">
                    <Link to="/">Home </Link> /
                    <span> Concerts </span>
                </div>

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Concerts</h2>
                    </div>

                    <div className="card-header-right">
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

                <ConcertsTable data={data} onEdit={openEditModal} itemsPerPage={20}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <ConcertAddForm
                    onAdd={() => {
                        getConcerts();
                        setIsAddModalOpen(false);
                    }}/>
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <ConcertDeleteForm
                    data={data}
                    onDelete={() => {
                        getConcerts();
                        setIsDeleteModalOpen(false);
                    }}/>
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <ConcertUpdateForm
                    selectedConcert={selectedConcert}
                    onUpdate={() => {
                        getConcerts();
                        setIsEditModalOpen(false);
                    }}/>
            </Modal>

        </div>
    );
}

export default ConcertsPage;