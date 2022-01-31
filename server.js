const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const port = process.env.port || 3001;
//app.use(require('./htmlRoutes'));
//app.use(require('./apiRoutes'));
//const apiRoutes = require("../../routes/apiRoutes");
//const htmlRoutes = require("../../routes/htmlRoutes");
//app.use(require(htmlRoutes));
//app.use(require(apiRoutes));

//app.use(require('./apiRoutes'));
//app.use(require('./htmlRoutes'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.use('/api', apiRoutes.js);
//app.use('/', htmlRoutes.js);

app.listen(port, () => {
  console.log(`Connected on port ${port}...`);
});
//get request and post request, something that retrieve all notes ie the get route
//the post route wwill create the new note
