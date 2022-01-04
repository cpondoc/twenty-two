// Setting up fetch and express
import fetch from "node-fetch";
import express from "express";

// Express initialization and port number
const app = express();
const port = process.env.PORT || 5000;

// Running and listening to specific port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// Create a GET route
app.get('/blog', (req, res) => { 
    // Grab data from Google sheet and display
    let url = 'https://api.sheety.co/751c84b27e51cd2b85e8401267fbce1c/personalBlogSheet/blog';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            res.send({ express: json['blog'] });
    });
});