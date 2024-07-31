const router = require('express').Router();
const fs = require('fs');
const {v4: uuidv4 } = require('uuid');

router.get('../notes', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading notes, Server Error' });
        }
        const notes = JSON.parse(data);
        res.json(notes);
    });
});

router.post('../notes', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading notes, Server Error' });
        }
        const notes = JSON.parse(data);
        const newNotes = {
            ... req.body,
            id: uuidv4(),
        };
        notes.push(newNotes);
        fs.writeFile('../db/db.json', JSON.stringify(notes), err => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error writing notes, Server Error' });
            }
            return res.json(notes);
        });
    });
});

router.delete('../notes/:id', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error reading notes, Server Error' });
        }
        const notes = JSON.parse(data);
        const newNotesFiltered = notes.filter((note) => note.id != req.params.id);
        fs.writeFile('../db/db.json', JSON.stringify(newNotesFiltered), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error writing notes, Server Error' });
            }
            return res.json(newNotesFiltered);
        });
    });
});

module.exports = router;