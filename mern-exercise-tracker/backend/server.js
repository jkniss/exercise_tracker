const express = require('express'); // express web framework
const cors = require('cors');    // cors middleware
const mongoose = require('mongoose'); // mongoose for mongodb


require('dotenv').config(); // allows us to have environment variables in the .env file

const app = express();  // create express server
const port = process.env.PORT || 5000;  // port the server will be on

app.use(cors()); // cors middleware
app.use(express.json()); // allows us to parse json

const uri = process.env.ATLAS_URI;  // uri for mongodb atlas database
mongoose.connect(uri);
const connection = mongoose.connection;  // create connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); // starts the server

