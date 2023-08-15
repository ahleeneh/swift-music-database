# 🖥️ Swift Music Database
This project was created by Aline Murillo after drawing inspiration from the skills acquired during the Summer 2023 term in an Intro to Databases course. The Swift Music Database blends technology and music and focuses on the captivating evolution of Taylor Swift's musical history.

## 📄 Project Overview
Crafted using JavaScript, Node.js, Express.js, and React, the Swift Music Database was designed to provide administrators an intuitive and user-friendly interface. This project seamlessly merges the backend and frontend components, and empowers administrators to manage content across key sections such as Albums, Songs, Genres, Tours, Concerts, Setlists, and Lyrics. 

## 🔧 Installation and Usage
To set up and run the Swift Music Database on your local machine, follow these steps:

1. Clone the Repository: Begin by cloning the repository to your local machine using the following command:
    - ```git clone git@github.com:ahleeneh/swift-music-database.git```
2. Install Dependencies: Navigate to the project directory and install the necessary dependencies using npm:
   - ```cd swift-music-database/backend```
   - ```npm install```
   - ```cd ../frontend```
   - ```npm install```
4. Database Configuration: In the db-connector.js file located in the backend directory, configure the database connection settings to match your own database setup.
5. Populate Database: Execute the DDL.sql and DML.sql files provided in the backend directory to set up the database schema and initial data.
6. Start the Backend: In the backend directory, start the Express.js server.
   - ```cd backend```
   - ```npm start```
7. Start the Frontend: In the frontend directory, start the React frontend.
   - ```cd frontend```
   - ```npm start```
8. Access the Application: Open your web browser and visit http://localhost:9891 to access the Swift Music Database user interface.

## 💾 Database Schema
![Screenshot 2023-08-10 at 6 53 37 PM](https://github.com/ahleeneh/swift-music-database/assets/107948221/29781e53-52ee-4fe6-a98c-bdf4de769dda)

## 📸 Screenshots
Home Page: Entry point into Taylor Swift's musical history
![Screenshot 2023-08-15 at 12 24 29 PM](https://github.com/ahleeneh/swift-music-database/assets/107948221/f336b6d8-e38d-4c82-9884-d961d9bad6cf)

Albums Page:
![Albums](https://github.com/ahleeneh/swift-music-database/assets/107948221/c3551ee8-a561-4ceb-bf89-c1532d54f59a)

Songs Page: Add Demonstrated
![Songs ADD](https://github.com/ahleeneh/swift-music-database/assets/107948221/5f0d7a3b-e680-47f0-b740-2f98623443a8)

Genres Page:
![Screenshot 2023-08-15 at 12 24 49 PM](https://github.com/ahleeneh/swift-music-database/assets/107948221/b8157335-cfe5-4709-846f-533fbeba4d8a)

Song Genres Page: M:N relationship between Songs and Genres
![Screenshot 2023-08-15 at 12 25 00 PM](https://github.com/ahleeneh/swift-music-database/assets/107948221/5dc434ff-6413-413d-83e8-212cde7c8039)

Tours Page: Delete Demonstrated
![Delete Tours](https://github.com/ahleeneh/swift-music-database/assets/107948221/ad47ad3b-e40b-4473-83d3-416394c7e6e4)

Concerts Page: Update Demonstrated
![concerts update](https://github.com/ahleeneh/swift-music-database/assets/107948221/806b0c44-65d6-45b9-a60d-dfb34f5390fe)

Setlists Page:
![Screenshot 2023-08-15 at 12 25 16 PM](https://github.com/ahleeneh/swift-music-database/assets/107948221/7707fc42-69dc-45b5-ac7b-7567b09126e3)

Setlist Songs Page: M:N relationship between Setlists and Songs
![Screenshot 2023-08-15 at 12 25 30 PM](https://github.com/ahleeneh/swift-music-database/assets/107948221/1fdd5fbc-1c6e-4a32-99fd-df483861f0a1)

Lyrics Page:
![Screenshot 2023-08-15 at 12 25 39 PM](https://github.com/ahleeneh/swift-music-database/assets/107948221/94d9c3dd-93ee-4c1f-bd45-3a8711004dd4)
