import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import vinylLogo from '../img/vinyl-logo-2.png';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AlbumRoundedIcon from '@mui/icons-material/AlbumRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
import LyricsRoundedIcon from '@mui/icons-material/LyricsRounded';
import TourRoundedIcon from '@mui/icons-material/TourRounded';
import StadiumRoundedIcon from '@mui/icons-material/StadiumRounded';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';

function Navigation() {

    return (

        <nav className="App-nav">
            <Link to="/">
                <img src={vinylLogo} alt="Taylor Swift Database Logo" style={{ width: '30%' , padding: '1rem'}} />
            </Link>

            <ul className="nav-list">

                <li className="active-link">
                    <NavLink to="/" className="nav-link">
                        <div className="icon-container">
                            <HomeRoundedIcon />
                            <h3>Home</h3>
                        </div>
                    </NavLink>
                </li>

                <li className="active-link">
                    <NavLink to="/albums" className="nav-link">
                        <div className="icon-container">
                            <AlbumRoundedIcon />
                            <h3>Albums</h3>
                        </div>
                    </NavLink>
                </li>

                <li className="active-link">
                    <NavLink to="/songs" className="nav-link">
                        <div className="icon-container">
                            <MusicNoteRoundedIcon />
                            <h3>Songs</h3>
                        </div>
                    </NavLink>
                </li>

                <li className="active-link">
                    <NavLink to="/tours" className="nav-link">
                        <div className="icon-container">
                            <TourRoundedIcon />
                            <h3>Tours</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/concerts" className="nav-link">
                        <div className="icon-container">
                            <StadiumRoundedIcon />
                            <h3>Concerts</h3>
                        </div>
                    </NavLink>
                </li>

                <li className="active-link">
                    <NavLink to="/setlists" className="nav-link">
                        <div className="icon-container">
                            <QueueMusicRoundedIcon />
                            <h3>Setlists</h3>
                        </div>
                    </NavLink>
                </li>

                <li className="active-link">
                    <NavLink to="/lyrics" className="nav-link">
                        <div className="icon-container">
                            <LyricsRoundedIcon />
                            <h3>Lyrics</h3>
                        </div>
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;