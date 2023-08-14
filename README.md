# 🖥️ Personal Database Project: Swift Music Database
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
![Screenshot 2023-08-10 at 6 53 37 PM](https://github.com/ahleeneh/taylor-swift/assets/107948221/c8f0911d-c80a-44c4-9739-c5ad56729454)

## 📸 Screenshots
Home Page: Entry point into Taylor Swift's musical history
![Screenshot 2023-08-14 at 11 57 09 AM](https://github.com/ahleeneh/taylor-swift/assets/107948221/444f91b4-631e-4aa6-b155-e976ff9b8536)

Albums Page:
![Albums](https://github.com/ahleeneh/taylor-swift/assets/107948221/469fb6dd-bd6a-418d-9a60-dc177dc5fc24)

Songs Page: Add Demonstrated
![Songs ADD](https://github.com/ahleeneh/taylor-swift/assets/107948221/d9d029ad-d3a7-4362-9a5f-fd897e77fbb0)

Genres Page:
![Screenshot 2023-08-14 at 12 20 34 PM](https://github.com/ahleeneh/taylor-swift/assets/107948221/a2e15f2a-482f-434d-89d4-4947fcf8b5ee)

Song Genres Page: M:N relationship between Songs and Genres
![Screenshot 2023-08-14 at 12 20 51 PM](https://github.com/ahleeneh/taylor-swift/assets/107948221/6071bc25-e6a4-4808-99ba-f9436ea9dd23)

Tours Page: Delete Demonstrated
![Delete Tours](https://github.com/ahleeneh/taylor-swift/assets/107948221/ec5829ce-8704-4382-8737-bb08d1561d1d)

Concerts Page: Update Demonstrated
![concerts update](https://github.com/ahleeneh/taylor-swift/assets/107948221/93e45f18-7ec9-4b9e-99a3-0afea674fda9)

Setlists Page:
![Screenshot 2023-08-14 at 12 19 31 PM](https://github.com/ahleeneh/taylor-swift/assets/107948221/f5cdb3d1-ba48-4c75-bacc-7c4bc95a76b4)

Setlist Songs Page: M:N relationship between Setlists and Songs
![Screenshot 2023-08-14 at 12 20 02 PM](https://github.com/ahleeneh/taylor-swift/assets/107948221/df1eead8-2ff7-49b3-9fc5-b6c81e7a3ddc)

Lyrics Page:
![Screenshot 2023-08-14 at 12 19 23 PM](https://github.com/ahleeneh/taylor-swift/assets/107948221/5488f1dc-afed-4a09-9a00-67c0e1cd673a)

