import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


function Navigation() {
    return (
        <nav className="App-nav">
            {/*<Link to="/">*/}
            {/*    <img src={tradeExpressCircle} alt="Trade Express Logo" style={{ width: '100%' }} />*/}
            {/*</Link>*/}

            <ul className="nav-list">
                <li className="active-link">
                    <NavLink to="/" className="nav-link">
                        <div className="icon-container">
                            <GridViewOutlinedIcon />
                            <h3>Home</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/albums" className="nav-link">
                        <div className="icon-container">
                            <h3>Albums</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/songs" className="nav-link">
                        <div className="icon-container">
                            <h3>Songs</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/lyrics" className="nav-link">
                        <div className="icon-container">
                            <h3>Lyrics</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/tours" className="nav-link">
                        <div className="icon-container">
                            <h3>Tours</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/concerts" className="nav-link">
                        <div className="icon-container">
                            <h3>Concerts</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/setlists" className="nav-link">
                        <div className="icon-container">
                            <h3>Setlists</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/setlist-songs" className="nav-link">
                        <div className="icon-container">
                            <h3>Setlist Songs</h3>
                        </div>
                    </NavLink>
                </li>

                <li className="active-link">
                    <NavLink to="/genres" className="nav-link">
                        <div className="icon-container">
                            <h3>Genres</h3>
                        </div>
                    </NavLink>
                </li>
                <li className="active-link">
                    <NavLink to="/song-genres" className="nav-link">
                        <div className="icon-container">
                            <h3>Song Genres</h3>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;