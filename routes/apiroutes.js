//create routes that use data create routes for actual notes
//const express = require('express');
//const router = express.Router();
const fs = require('fs');
const db = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
     });

    //app.post('/notes', (req, res) => {
       



}

// got get, make post and delete if I have time
