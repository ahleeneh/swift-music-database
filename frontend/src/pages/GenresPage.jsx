import React, { useEffect, useState } from 'react';
import GenresTable from '../components/genres/GenresTable';
import Axios from 'axios';


function GenresPage() {
    // store data fetched from ba ckend
    const [data, setData] = useState([])

    // send a GET request to view all Items
    const getGenres = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989/genres');

            // store Items data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getGenres();
    }, [])


    // return a div/card component that displays the Items table
    return (
        <div>

            <div className="card">

                <div className="card-header">
                    <div className="card-header-left">
                        <h2>Genres</h2>
                    </div>

                    <div className="card-header-right">
                    </div>

                </div>

                <GenresTable data={data}/>

            </div>

        </div>
    );
}

export default GenresPage;