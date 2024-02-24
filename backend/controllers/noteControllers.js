const mongoose = require('mongoose')
const Note = require('../models/noteModels')

// get all notes
const getNotes = async (req, res) => {
    // const notes = await Note.find({}).sort({createdAt: -1})
    // res.status(200).json(notes)
    res.send('get all notes')
}

// get a single note
const getNote = async (req, res) => {
    // const { id } = req.params;

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error: 'Note note found'})
    // }
    // const note = await Note.findById(id)

    // if(!note){
    //     return res.status(404).json({error: 'Note not found'})
    // }

    // res.status(200).json(note)
    res.send('get single note')
}


// create a note
const createNote = async (req, res) => {
    // const {title, content} = req.body;

    // try{
    //     const note = await Note.create({title, content})
    //     res.status(200).json(note)
    // }
    // catch(error){
    //     res.status(400).send({error: error.message})
    // }
    res.send('create single note')
}

// delete a note
const deleteNote = async (req, res) => {
    // const { id } = req.params;

    // if(!mongoose.Types.ObjectId.isValid(id)){
    //     return res.status(404).json({error: 'Note note found'})
    // }

    // const note = await Note.findByIdAndDelete({_id: id})

    // if(!note){
    //     return res.status(404).json({error: 'Note not found'})
    // }

    // res.status(200).json({message: 'Note deleted successfully'})
    res.send('delete single note')
}

// update a note
const updateNote = async (req, res) => {
    // const { id } = req.params;
    
    // if(!mongoose.Types.ObjectId.isValid({_id: id})){
    //     return res.status(404).json({error: 'Note note found'})
    // }

    // const note = await Note.findByIdAndUpdate({_id: id}, {
    //     ...req.body,
    // })

    // if(!note){
    //     return res.status(404).json({error: 'Note not found'})
    // }

    // res.status(200).json({error: 'Note updated successfully'})
    res.send('update single note')
}


module.exports = {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote
}
