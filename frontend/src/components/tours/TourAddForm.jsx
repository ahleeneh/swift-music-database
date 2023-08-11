import React, { useState } from 'react';
import Axios from 'axios';

function TourAddForm({ onAdd }) {
    // set state variables to add an Album
    const [tourName, setTourName] = useState('');
    const [tourStartDate, setTourStartDate] = useState('');
    const [tourEndDate, setTourEndDate] = useState('');
    const [tourDescription, setTourDescription] = useState('');

    // send a POST request to add a Tour
    const addData = async () => {
        try {
            const endDate = tourEndDate === '' ? null : tourEndDate;

            // send POST request
            const response = await Axios.post('http://localhost:1989/tours', {
                "tourName": tourName,
                "tourStartDate": tourStartDate,
                "tourEndDate": endDate,
                "tourDescription": tourDescription
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Album
            setTourName('');
            setTourStartDate('');
            setTourEndDate('');
            setTourDescription('');

        } catch (error) {
            console.error(error)
        }
    }

    // return the add Tour form
    return (
        <div className="form">
            <legend>Add a Tour</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label htmlFor="tourName">Tour Name:
                    <input
                        type="text"
                        placeholder="Tour Name"
                        value={tourName}
                        onChange={(e) => setTourName(e.target.value)}/>
                </label>

                <label htmlFor="tourStartDate">Start Date:
                    <input
                        type="date"
                        value={tourStartDate}
                        onChange={(e) => setTourStartDate(e.target.value)}/>
                </label>

                <label htmlFor="tourEndDate">End Date:
                    <input
                        type="date"
                        value={tourEndDate}
                        onChange={(e) => setTourEndDate(e.target.value)}/>
                </label>

                <label htmlFor="tourDescription">Description:
                    <textarea
                        placeholder="Tour Description"
                        value={tourDescription}
                        onChange={(e) => setTourDescription(e.target.value)}/>
                </label>

                <button
                    type="button"
                    className="add-icon"
                    onClick={addData}>
                    Add Tour
                </button>
            </form>
        </div>
    )

}

export default TourAddForm;