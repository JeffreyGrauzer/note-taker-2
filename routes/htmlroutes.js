// create routes for two html files, different route for each one
const { notStrictEqual, notEqual } = require("assert");
const fs = require("fs");
const { start } = require("repl");
const db = require("../../db/db.json");

module.exports = (app) => {
    app.get('/html/notes', (req, res) => {
        res.json(db);
    });

app.post('/html/notes', (req, res) => {
    let newNote = req.body;
    notes.push(newNote);
});
}
