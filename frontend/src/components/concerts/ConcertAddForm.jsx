import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function ConcertAddForm({ onAdd }) {
    // set state variables to add a Concert
    const [concertName, setConcertName] = useState('');
    const [concertVenue, setConcertVenue] = useState('');
    const [concertLocation, setConcertLocation] = useState('');
    const [concertDate, setConcertDate] = useState('');
    const [tourId, setTourId] = useState('');
    const [setlistId, setSetlistId] = useState('');

    const [tourDropdown, setTourDropdown] = useState([]);
    const [setlistDropdown, setSetlistDropdown] = useState([]);

    // send a GET request to view all Tours for the Tours drop-down
    const getTourDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/tours');
            setTourDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch Tours when the component is mounted
    useEffect(() => {
        getTourDropdown();
    }, []);

    // send a GET request to view all Setlists for the Setlists drop-down
    const getSetlistDropdown = async () => {
        try {
            const response = await Axios.get('http://localhost:1989/setlists');
            setSetlistDropdown(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    // fetch Setlists when the component is mounted
    useEffect(() => {
        getSetlistDropdown();
    }, []);

    // send a POST request to add a Concert
    const addData = async () => {
        try {
            const setlist = setlistId === '' ? null : setlistId;

            // send POST request
            const response = await Axios.post('http://localhost:1989/concerts', {
                "concertName": concertName,
                "concertVenue": concertVenue,
                "concertLocation": concertLocation,
                "concertDate": concertDate,
                "tourId": tourId,
                "setlistId": setlist
            });

            // trigger parent component add
            onAdd();

            // clear fields identifying the Item
            setConcertName('');
            setConcertVenue('');
            setConcertLocation('');
            setConcertDate('');
            setTourId('');
            setSetlistId('');

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="form">
            <legend>Add a Concert</legend>

            <form onSubmit={(e) => { e.preventDefault(); }}>

                <label htmlFor="concertName">Concert Name:
                    <input
                        type="text"
                        placeholder="Concert Name"
                        value={concertName}
                        onChange={(e) => setConcertName(e.target.value)}/>
                </label>

                <label htmlFor="concertVenue">Venue:
                    <input
                        type="text"
                        placeholder="Concert Venue"
                        value={concertVenue}
                        onChange={(e) => setConcertVenue(e.target.value)}/>
                </label>

                <label htmlFor="concertLocation">Location:
                    <input
                        type="text"
                        placeholder="Concert Location"
                        value={concertLocation}
                        onChange={(e) => setConcertLocation(e.target.value)}/>
                </label>

                <label htmlFor="concertDate">Concert Date:
                    <input
                        type="date"
                        value={concertDate}
                        onChange={(e) => setConcertDate(e.target.value)}/>
                </label>

                <label htmlFor="tourId">Tour:
                    <select
                        name="tourId"
                        id="tourId"
                        value={tourId}
                        onChange={(e) => setTourId(e.target.value)}>

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

                <label htmlFor="setlistId">Setlist:
                    <select
                        name="setlistId"
                        id="setlistId"
                        value={setlistId}
                        onChange={(e) => setSetlistId(e.target.value)}>

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
                    className="add-icon"
                    onClick={addData}>
                    Add Concert
                </button>

            </form>
        </div>
    )

}

export default ConcertAddForm;