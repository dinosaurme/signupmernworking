const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const usersRoute = require('./routes/users'); // Ensure this file exists and exports a router

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect('mongodb://0.0.0.0:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

// Log any errors on connection
connection.on('error', console.error.bind(console, 'MongoDB connection error:')); 

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

// Routes setup
app.use('/users', usersRoute);

// Server setup
app.listen(4000, function() {
    console.log("Server is running on Port: 4000");
});

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ', err);
});
