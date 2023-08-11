import React, { useEffect, useState } from 'react';
import LyricsTable from '../components/lyrics/LyricsTable';
import Axios from 'axios';


function LyricsPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

    // send a GET request to view all Items
    const getLyrics = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/lyrics');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getLyrics();
    }, [])


    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Lyrics</h2>
                    </div>

                    <div className="card-header-right">
                    </div>

                </div>

                <LyricsTable data={data}/>

            </div>

        </div>
    );
}

export default LyricsPage;