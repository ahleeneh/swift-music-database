import React, { useState } from 'react';
import Axios from 'axios';

function TourDeleteForm({ data, onDelete }) {
    // set state variables to delete an Album
    const [deleteTourId, setDeleteTourId] = useState('');

    // send a DELETE request to delete an Album
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/tours/${deleteTourId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Album
            setDeleteTourId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Album form
    return (
        <div className="form">
            <legend>Delete a Tour</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="tourId">Select a Tour:
                    <select
                        name="tourId"
                        id="tourId"
                        value={deleteTourId}
                        onChange={(e) => setDeleteTourId(e.target.value)}>

                        <option disabled value="">
                            Select a Tour
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.tourId}>
                                {d.tourName}
                            </option>
                        ))}
                    </select>

                    <button
                        type="button"
                        className="delete-icon"
                        onClick={deleteData}>
                        Delete Tour
                    </button>

                </label>

            </form>

        </div>
    )

}

export default TourDeleteForm;