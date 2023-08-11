import React, { useEffect, useState } from 'react';
import SongsTable from '../components/songs/SongsTable';
import Axios from 'axios';


function SongsPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

    // send a GET request to view all Items
    const getSongs = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/songs');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getSongs();
    }, [])


    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Songs</h2>
                    </div>

                    <div className="card-header-right">
                    </div>

                </div>

                <SongsTable data={data}/>

            </div>

        </div>
    );
}

export default SongsPage;