import React, {useState, useEffect} from "react";
import Axios from 'axios';

function HomePage() {
    // store data fetched from backend
    const [data, setData] = useState(null);

    // send a GET request to view all Dashboard items
    const getDashboard = async () => {
        try {
            // send GET request
            const response = await Axios.get('http://localhost:1989');

            // store Dashboard data
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    // fetch data when the component is mounted
    useEffect(() => {
        getDashboard();
    }, []);


    return (
        <div>
            <div className="card">
                <h2>Home Page</h2>
                <p>Hello Admin! Welcome to the Swift Music Database Interface.
                    This is the central hub where you can manage all things Taylor Swift music-related.
                    We've got everything neatly organized for you – albums, songs, tours, and genres – all at your fingertips.</p>
                <p>Consider this your backstage pass to Taylor's musical world.
                    You're in control here. Whether you're tweaking a tour, putting together a setlist, or diving into the different musical styles she's covered, it's all here for you to explore.</p>
                <p>No need for any fancy stuff – just you, your computer, and the music.
                    So, go ahead and dive in. This is where you can work your magic with Taylor Swift's tunes, and the stage is all yours.</p>
            </div>

            {/*<div className="card">*/}
                {data && (
                    <div className="small-card-container">
                        <div className="small-card small-card-yellow">
                            <p>{data.albumCount[0].albumCount}</p><br/>
                            <h3>Albums</h3>
                        </div>

                        <div className="small-card small-card-blue">
                            <p>{data.songCount[0].songCount}</p><br/>
                            <h3>Songs</h3>
                        </div>

                        <div className="small-card small-card-pink">
                            <p>{data.tourCount[0].tourCount}</p><br/>
                            <h3>Tours</h3>
                        </div>

                        <div className="small-card small-card-green">
                            <p>{data.genreCount[0].genreCount}</p><br/>
                            <h3>Genres</h3>
                        </div>
                    </div>
                )}
            {/*</div>*/}

        </div>
    )
}

export default HomePage;