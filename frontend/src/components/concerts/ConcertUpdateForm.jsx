import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ConcertUpdateForm({ selectedConcert, onUpdate }) {
    // set state variables to edit a Concert
    const [editConcertId, setEditConcertId] = useState('');
    const [editConcertName, setEditConcertName] = useState('');
    const [editConcertVenue, setEditConcertVenue] = useState('');
    const [editConcertLocation, setEditConcertLocation] = useState('');
    const [editConcertDate, setEditConcertDate] = useState('');
    const [editTourId, setEditTourId] = useState('');
    const [editSetlistId, setEditSetlistId] = useState('');

    const [tourDropdown, setTourDropdown] = useState([]);
    const [setlistDropdown, setSetlistDropdown] = useState([]);


    // function to send a GET request to view all Tours for the Tour drop down
    const getTourDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/tours');
            setTourDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // function to send a GET request to view all Setlists for the Setlist drop down
    const getSetlistDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/setlists');
            setSetlistDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // function to update the state variables for a Tour
    const updateStateVariables = (selectedConcert) => {
        setEditConcertId(selectedConcert.concertId);
        setEditConcertName(selectedConcert.concertName);
        setEditConcertVenue(selectedConcert.concertVenue);
        setEditConcertLocation(selectedConcert.concertLocation);
        setEditConcertDate(selectedConcert.concertDate);

        const matchingTour = tourDropdown.find(tour => tour.tourName === selectedConcert.tourName);
        if (matchingTour) {
            setEditTourId(matchingTour.tourId);
        }

        const matchingSetlist = setlistDropdown.find(setlist => setlist.setlistName === selectedConcert.setlistName);
        if (matchingSetlist) {
            setEditSetlistId(matchingSetlist.setlistId);
        }
    }

    // update state variables if a Concert is selected
    useEffect(() => {
        if (selectedConcert) {
            updateStateVariables(selectedConcert);
        }
    }, [selectedConcert, tourDropdown, setlistDropdown]);

    // fetch the Tours when the component is mounted
    useEffect(() => {
        getTourDropdown();
    }, []);

    // fetch the Setlists when the component is mounted
    useEffect(() => {
        getSetlistDropdown();
    }, []);

    // send a PUT request to update the Concert
    const updateData = async () => {
        try {
            // send PUT request
            const setlist = editSetlistId === '' ? null : editSetlistId;

            const response = await Axios.put(`http://localhost:1989/concerts/${editConcertId}`, {
                "concertName": editConcertName,
                "concertVenue": editConcertVenue,
                "concertLocation": editConcertLocation,
                "concertDate": editConcertDate,
                "tourId": editTourId,
                "setlistId": editSetlistId
            });

            // trigger parent component update
            onUpdate();

            // clear fields identifying the Concert
            setEditConcertId('');
            setEditConcertName('');
            setEditConcertVenue('');
            setEditConcertLocation('');
            setEditConcertDate('');
            setEditTourId('');
            setEditSetlistId('');

        } catch (error) {
            console.error(error);
        }
    }

    // return the update Concert form
    return (
        <div className="form">
            <legend>Update a Concert</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="updateConcertName">Concert Name:
                    <input
                        type="text"
                        placeholder="Concert Name"
                        value={editConcertName}
                        onChange={(e) => setEditConcertName(e.target.value)}/>
                </label>

                <label htmlFor="updateConcertVenue">Venue:
                    <input
                        type="text"
                        placeholder="Concert Venue"
                        value={editConcertVenue}
                        onChange={(e) => setEditConcertVenue(e.target.value)}/>
                </label>

                <label htmlFor="updateConcertLocation">Location:
                    <input
                        type="text"
                        placeholder="Concert Location"
                        value={editConcertLocation}
                        onChange={(e) => setEditConcertLocation(e.target.value)}/>
                </label>

                <label htmlFor="updateConcertDate">Concert Date:
                    <input
                        type="date"
                        value={editConcertDate}
                        onChange={(e) => setEditConcertDate(e.target.value)}/>
                </label>

                <label htmlFor="updateTourId">Tour:
                    <select
                        name="updateTourId"
                        id="updateTourId"
                        value={editTourId}
                        onChange={(e) => setEditTourId(e.target.value)}>

                        <option disabled value="">
                            Select Tour
                        </option>

                        {tourDropdown.map(tour => (
                            <option key={tour.tourId} value={tour.tourId}>
                                {tour.tourName}
                            </option>
                        ))}

                    </select>
                </label>

                <label htmlFor="updateSetlistId">Setlist:
                    <select
                        name="updateSetlistId"
                        id="updateSetlistId"
                        value={editSetlistId}
                        onChange={(e) => setEditSetlistId(e.target.value)}>

                        <option disabled value="">
                            Select Setlist
                        </option>

                        {setlistDropdown.map(setlist => (
                            <option key={setlist.setlistId} value={setlist.setlistId}>
                                {setlist.setlistName}
                            </option>
                        ))}

                    </select>
                </label>

                <button
                    type="button"
                    className="edit-button"
                    onClick={updateData}>
                    Update Concert
                </button>

            </form>
        </div>
    )

}

export default ConcertUpdateForm;