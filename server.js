const express = require("express");
const app = express();
const port = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Connected on port ${port}...`);
});
//get request and post request, something that retrieve all notes ie the get route
//the post route wwill create the new note
