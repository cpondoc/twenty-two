# twenty two
my own form of social media. made with react, node, express, and sheety

## Set-Up
I've honestly always been a big fan of using Google Sheets, so I made a Google Sheet to track all of my daily posts. I also added the image ID for each image into the Google Sheet, which I was then able to access using a specific format of URL and making sure the image is viewable to anyone with the link.

The Express backend fetches the Sheety API endpoint made from the Google Sheet, sends the JSON response back to the React front-end, where the React front-end does its magic. I've done a similar project before using just React, but I found it clunky to make an API call directly within my React project as opposed to making it outside in the backend. Now, everything is more uniform.

## To Run
To start up the server, run
```
node server.js
```

To start up the front-end client, run
```
cd client
npm start
```