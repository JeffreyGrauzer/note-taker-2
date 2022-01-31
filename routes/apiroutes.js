//create routes that use data create routes for actual notes
//const express = require('express');
//const router = express.Router();

const fs = require('fs');
const db = require('../../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.json(db);
     });

    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        notes.push(newNote);
    });
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 2))
        }
    })

     
       



}

// got get, make post and delete if I have//
