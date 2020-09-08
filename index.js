//base level of the API - sets up the server to listen to a specific port

//often imports the server from a server.js file, which exports an instance of express
const server = require("./api/server");

//this will read the port from the runtime environment, or default to 3333 locally
const port = process.env.PORT || 3333;

server.listen(port, () => console.log("server up..."));