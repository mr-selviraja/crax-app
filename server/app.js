// Load environment variables from a .env file
require("dotenv").config();

// Require packages, libraries, files, constants, etc.
const express = require("express");
const {CLIENT_PATH} = require("./config/constants");

// Create an instance of express class(application)
const app = express();

// Middleware to serve static files
app.use(express.static(CLIENT_PATH));

// Set the views folder manually
app.set("views", `${CLIENT_PATH}/src/views`);

// Set the view/templating engine as EJS
app.set("view engine", "ejs");

// Specify a port number for the server to serve on
const port = process.env.PORT || 3005;

// Send index.html page for GET at route '/'
app.get("/", (req, res) => {
    res.render(`${CLIENT_PATH}/src/views/index.ejs`, { cardDetails: {
        title: "Some random title",
        description: "Some random descripton"
    }});
});

// Listen for client requests on the specified port
app.listen(port, (err) => {
    // In case error in connecting to the server
    if (err) {
      console.log('Error connecting to the server');
      return;
    }
  
    console.log(`Server running on port ${port}`);
  });