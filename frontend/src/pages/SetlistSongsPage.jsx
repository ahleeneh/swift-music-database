import React, { useEffect, useState } from 'react';
import SetlistSongsTable from '../components/setlistSongs/SetlistSongsTable';
import Axios from 'axios';


function SetlistSongsPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

    // send a GET request to view all Items
    const getSetlistSongs = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/setlist-songs');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getSetlistSongs();
    }, [])


    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Setlist Songs</h2>
                    </div>

                    <div className="card-header-right">
                    </div>

                </div>

                <SetlistSongsTable data={data}/>

            </div>

        </div>
    );
}

export default SetlistSongsPage;