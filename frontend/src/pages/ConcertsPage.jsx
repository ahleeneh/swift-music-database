import React, { useEffect, useState } from 'react';
import ConcertsTable from '../components/concerts/ConcertsTable';
import Axios from 'axios';


function ConcertsPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

    // send a GET request to view all Items
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


    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Concerts</h2>
                    </div>

                    <div className="card-header-right">
                    </div>

                </div>

                <ConcertsTable data={data}/>

            </div>

        </div>
    );
}

export default ConcertsPage;