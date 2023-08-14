import './App.css';
import Navigation from './components/Navigation'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import ConcertsPage from './pages/ConcertsPage';
import GenresPage from './pages/GenresPage';
import LyricsPage from './pages/LyricsPage';
import SetlistSongsPage from './pages/SetlistSongsPage';
import SetlistsPage from './pages/SetlistsPage';
import SongGenresPage from './pages/SongGenresPage';
import SongsPage from './pages/SongsPage';
import ToursPage from './pages/ToursPage';


function App() {
  return (
      <div className="App">
        <Router>
          <div className="App-container">

            <aside className="App-sidebar">
              <Navigation />
            </aside>

            <main className="App-main">
              <header className="App-header">
                <h1>Swift Music Database</h1>
              </header>

              <div className="App-content">
                <Routes>
                  <Route path='/' element={<HomePage />}></Route>
                  <Route path='/albums' element={<AlbumsPage />}></Route>
                  <Route path='/concerts' element={<ConcertsPage />}></Route>
                  <Route path='/genres' element={<GenresPage />}></Route>
                  <Route path='/lyrics' element={<LyricsPage />}></Route>
                  <Route path='/setlist-songs' element={<SetlistSongsPage />}></Route>
                  <Route path='/setlists' element={<SetlistsPage />}></Route>
                  <Route path='/song-genres' element={<SongGenresPage />}></Route>
                  <Route path='/songs' element={<SongsPage />}></Route>
                  <Route path='/tours' element={<ToursPage />}></Route>
                </Routes>
              </div>

              <footer>
                <p>&copy; 2023 Aline Murillo | <a href="https://github.com/ahleeneh">GitHub</a></p>
              </footer>
            </main>

          </div>
        </Router>
      </div>
  );
}

export default App;