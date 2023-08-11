import React, { useEffect, useState } from 'react';
import SongGenresTable from '../components/songGenres/SongGenresTable';
import Axios from 'axios';


function SongGenresPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

    // send a GET request to view all Items
    const getSongGenres = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/song-genres');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getSongGenres();
    }, [])


    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Song Genres</h2>
                    </div>

                    <div className="card-header-right">
                    </div>

                </div>

                <SongGenresTable data={data}/>

            </div>

        </div>
    );
}

export default SongGenresPage;