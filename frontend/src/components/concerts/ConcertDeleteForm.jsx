import React, { useState } from 'react';
import Axios from 'axios';

function ConcertDeleteForm({ data, onDelete }) {
    // set state variables to delete an Album
    const [deleteConcertId, setDeleteConcertId] = useState('');

    // send a DELETE request to delete a Concert
    const deleteData = async () => {
        try {
            // send DELETE request
            const response = await Axios.delete(`http://localhost:1989/concerts/${deleteConcertId}`);

            // trigger parent component delete
            onDelete();

            // clear field identifying the Concert
            setDeleteConcertId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the delete Concert form
    return (
        <div className="form">
            <legend>Delete a Concert</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="concertId">Select a Concert:
                    <select
                        name="concertId"
                        id="concertId"
                        value={deleteConcertId}
                        onChange={(e) => setDeleteConcertId(e.target.value)}>

                        <option disabled value="">
                            Select a Concert
                        </option>

                        {data.map((d, i) => (
                            <option key={i} value={d.concertId}>
                                ({d.concertId}) {d.concertName} @ {d.concertVenue} | {d.concertDate}
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

export default ConcertDeleteForm;