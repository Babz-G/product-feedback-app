// ✨✨✨ Boilerplate Code to Set Up Server ✨✨✨

// importing our Node modules
import express from "express"; // the framework that lets us build a web server
import pg from "pg"; // pg stands for PostgreSQL, for connecting to the database
import config from "./config.js"; // importing our database connection string

// connect to our PostgreSQL database, or db for short
const db = new pg.Pool({
  connectionString: config.databaseUrl, // this contains credentials to access the database. Keep this private!!!
  ssl: true, // use SSL encryption when connecting to the database
});

const app = express(); // creating an instance of the express module

app.use(express.json()); // This server will receive and respond in JSON format

const port = 3000; // Setting which port to listen to to receive requests

// defining our port, then turning on our server to listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// ✨✨✨ Helper Functions ✨✨✨

// ✨✨✨ API Endpoints ✨✨✨
