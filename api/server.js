//this file is used to set up top-level middleware & server settings, and instantiate the server

//imports
const express = require("express");
const helmet = require("helmet");

//import router(s)
const carsRouter = require("../cars/cars-router");

//invokes an instance of an Express server
const server = express();

//setup top-level middleware that applies to the entire server
//make sure to invoke if needed!
server.use(helmet());
server.use(express.json()); //very important - makes the server able to communicate using JSON

//can set up what is returned from the base url
server.get("/", (req, res) => {
    res.status(200).send("<h1>DB Schema Design Practice!</h1>");
});

//set up routes using the imported routers
server.use("/cars", carsRouter);

//exporting the server to be imported by index.js
module.exports = server;