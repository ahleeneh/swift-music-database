-- DDL for TaylorSwift database
-- Date: 08-10-2023

SET SQL_MODE 		   = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone 		   = "+00:00";
SET foreign_key_checks = 0;
SET AUTOCOMMIT 		   = 0;

/* --------------------------------------------------
    ENTITIES THAT ARE INDEPENDENT OF ANY OTHER TABLE
   -------------------------------------------------- */

CREATE TABLE Albums (
  albumId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  albumTitle VARCHAR(45) NOT NULL,
  releaseDate DATE NOT NULL,
  description TEXT,
  CONSTRAINT albumId_unique UNIQUE (albumId)
);

CREATE TABLE Genres (
  genreId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  genreName VARCHAR(45) NOT NULL,
  CONSTRAINT genreId_unique UNIQUE (genreId)
);

CREATE TABLE Tours (
    tourId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tourName VARCHAR(45) NOT NULL,
    tourStartDate DATE NOT NULL,
    tourEndDate DATE,
    tourDescription TEXT,
    CONSTRAINT tourId_unique UNIQUE (tourId)
);

CREATE TABLE Setlists (
    setlistId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    setlistName VARCHAR(100) NOT NULL,
    CONSTRAINT setlistId_unique UNIQUE (setlistId)
);

/* ----------------------------------------------
    ENTITIES THAT ARE DEPENDENT ON 1 OTHER TABLE
   ---------------------------------------------- */

CREATE TABLE Songs (
  songId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  songTitle VARCHAR(45) NOT NULL,
  songDuration TIME NOT NULL,
  albumId INT NOT NULL,
  featuredArtist VARCHAR(45),
  CONSTRAINT songId_unique UNIQUE (songId),
  FOREIGN KEY (albumId) REFERENCES Albums (albumId) ON DELETE CASCADE
);


CREATE TABLE Lyrics (
    lyricId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    songId INT NOT NULL,
    lyricsText TEXT NOT NULL,
    CONSTRAINT lyricId_unique UNIQUE (lyricId),
    FOREIGN KEY (songId) REFERENCES Songs (songId) ON DELETE CASCADE
);

/* -----------------------------------------------
    ENTITIES THAT ARE DEPENDENT ON 2 OTHER TABLES
   ----------------------------------------------- */

CREATE TABLE Concerts (
    concertId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    concertName VARCHAR(100) NOT NULL,
    concertVenue VARCHAR(100) NOT NULL,
    concertLocation VARCHAR(100) NOT NULL,
    concertDateTime DATETIME NOT NULL,
    tourId INT NOT NULL,
    setlistId INT,
    CONSTRAINT concertId_unique UNIQUE (concertId),
    FOREIGN KEY (tourId) REFERENCES Tours (tourId) ON DELETE CASCADE,
    FOREIGN KEY (setlistId) REFERENCES Setlists (setlistId) ON DELETE SET NULL
);

CREATE TABLE SongGenres (
  songGenreId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  songId INT NOT NULL,
  genreId INT NOT NULL,
  CONSTRAINT songGenreId_unique UNIQUE (songGenreId),
  FOREIGN KEY (songId) REFERENCES Songs (songId) ON DELETE CASCADE,
  FOREIGN KEY (genreId) REFERENCES Genres (genreId) ON DELETE CASCADE
);


CREATE TABLE SetlistSongs (
    setlistSongId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    setlistId INT NOT NULL,
    songId INT NOT NULL,
    CONSTRAINT setlistSongId_unique UNIQUE (setlistSongId),
    FOREIGN KEY (setlistId) REFERENCES Setlists (setlistId) ON DELETE CASCADE,
    FOREIGN KEY (songId) REFERENCES Songs (songId) ON DELETE CASCADE
);

/* -------------------------------------------------
    Re-enable foreign key checks and commit changes
    to the database.
   ------------------------------------------------- */

SET foreign_key_checks = 1;
COMMIT;