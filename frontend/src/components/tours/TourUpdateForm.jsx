import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function TourUpdateForm({ selectedTour, onUpdate }) {
    // set state variables to edit an Album
    const [editTourId, setEditTourId] = useState('');
    const [editTourName, setEditTourName] = useState('');
    const [editTourStartDate, setEditTourStartDate] = useState('');
    const [editTourEndDate, setEditTourEndDate] = useState('');
    const [editTourDescription, setEditTourDescription] = useState('');

    // update state variables when an Album is selected in the dropdown
    useEffect(() => {
        if (selectedTour) {
            setEditTourId(selectedTour.tourId);
            setEditTourName(selectedTour.tourName);
            setEditTourStartDate(selectedTour.tourStartDate);
            setEditTourEndDate(selectedTour.tourEndDate);
            setEditTourDescription(selectedTour.tourDescription);
        }
    }, [selectedTour])

    // send a PUT request to update the Tour
    const updateData = async () => {
        try {
            // send PUT request
            const endDate = editTourEndDate === '' ? null : editTourEndDate;

            const response = await Axios.put(`http://localhost:1989/tours/${editTourId}`, {
                "tourName": editTourName,
                "tourStartDate": editTourStartDate,
                "tourEndDate": endDate,
                "tourDescription": editTourDescription
            });

            console.log(response)

        } catch (error) {
            console.error(error);
        }

        // trigger parent component update
        onUpdate();

        // clear fields identifying the Album
        setEditTourId('');
        setEditTourName('');
        setEditTourStartDate('');
        setEditTourEndDate('');
        setEditTourDescription('');

    }

    // return the update Album form
    return (
        <div className="form">
            <legend>Update a Tour</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateTourName">Tour Name:
                    <input
                        type="text"
                        name="updateTourName"
                        id="updateTourName"
                        value={editTourName}
                        onChange={(e) => setEditTourName(e.target.value)} />
                </label>

                <label htmlFor="updateTourStartDate">Start Date:
                    <input
                        type="date"
                        name="updateTourStartDate"
                        id="updateTourStartDate"
                        value={editTourStartDate}
                        onChange={(e) => setEditTourStartDate(e.target.value)} />
                </label>

                <label htmlFor="updateTourEndDate">End Date:
                    <input
                        type="date"
                        name="updateTourEndDate"
                        id="updateTourEndDate"
                        value={editTourEndDate === null ? '' : editTourEndDate}
                        onChange={(e) => setEditTourEndDate(e.target.value)} />
                </label>

                <label htmlFor="updateTourDescription">Description:
                    <textarea
                        name="updateTourDescription"
                        id="updateTourDescription"
                        value={editTourDescription === null ? '' : editTourDescription}
                        onChange={(e) => setEditTourDescription(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Tour
                </button>

            </form>
        </div>
    )

}

export default TourUpdateForm;