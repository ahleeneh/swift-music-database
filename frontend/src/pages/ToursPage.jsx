import React, { useEffect, useState } from 'react';
import ToursTable from '../components/tours/ToursTable';
import Axios from 'axios';


function ToursPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

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


    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Tours</h2>
                    </div>

                    <div className="card-header-right">
                    </div>

                </div>

                <ToursTable data={data}/>

            </div>

        </div>
    );
}

export default ToursPage;