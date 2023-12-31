import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ToursTable from '../components/tours/ToursTable';
import TourAddForm from "../components/tours/TourAddForm";
import TourDeleteForm from "../components/tours/TourDeleteForm";
import TourUpdateForm from "../components/tours/TourUpdateForm";
import Modal from "../components/Modal";
import Axios from 'axios';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';


function ToursPage() {
    // store data fetched from backend
    const [data, setData] = useState([])

    // set state variables for modal components
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(false);

    // send a GET request to view all Items
    const getTours = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/tours');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getTours();
    }, [])

    //open the edit modal with the selected Item
    const openEditModal = (tour) => {
        setSelectedTour(tour);
        setIsEditModalOpen(true);
    }

    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="breadcrumbs">
                    <Link to="/">Home </Link> /
                    <span> Tours </span>
                </div>

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Tours</h2>
                    </div>

                    <div className="card-header-right">
                        <button
                            className="add-icon"
                            onClick={() => setIsAddModalOpen(true)}>
                            ADD<AddRoundedIcon />
                        </button>
                        <button
                            className="delete-icon"
                            onClick={() => setIsDeleteModalOpen(true)}>
                            DELETE<DeleteRoundedIcon />
                        </button>
                    </div>

                </div>

                <ToursTable data={data} onEdit={openEditModal}/>

            </div>

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}>
                <TourAddForm
                    onAdd={() => { getTours(); setIsAddModalOpen(false); }} />
            </Modal>

            <Modal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}>
                <TourDeleteForm
                    data={data}
                    onDelete={() => { getTours(); setIsDeleteModalOpen(false); }} />
            </Modal>

            <Modal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}>
                <TourUpdateForm
                    selectedTour={selectedTour}
                    onUpdate={() => { getTours(); setIsEditModalOpen(false); }} />
            </Modal>

        </div>
    );
}

export default ToursPage;