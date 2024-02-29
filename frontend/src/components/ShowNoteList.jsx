import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import SingleNote from './SingleNote'

const ShowNoteList = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:4000/api/notes/')
        .then((res) => {
            setNotes(res.data);
        })
        .catch((err) => {
            console.log('Error in ShowNoteList!')
        })
    }, [])

    const noteList = notes.length === 0 ? 'No notes available!' : notes.map((note, k) => <SingleNote note={note} key={k} />);

    return (
        <div className='ShowNoteList'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <br />
                        <h2 className='display-4 text-center'>Note-it</h2>
                    </div>

                    <div className='col-md-12'>
                        <Link to='/create' className='btn btn-outline-success float-left'>
                            Add New Note
                        </Link>

                        <br />
                        <br />
                        <hr />
                    </div>
                </div>

                <div className='row'>
                    {noteList}
                </div>
            </div>
        </div>
    )
}

export default ShowNoteList