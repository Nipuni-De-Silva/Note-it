const express = require('express');
const noteModels = require('../models/noteModels');

const {createNote, getNotes, getNote, deleteNote, updateNote} = require('../controllers/noteControllers')

//require express router for routing
const router = express.Router();

// get all notes
router.get('/', getNotes);

// get a single note
router.get('/:id', getNote);

// create a new note
router.post('/', createNote);

// delete note
router.delete('/:id', deleteNote);

// update note
router.patch('/:id', updateNote);


module.exports = router;

