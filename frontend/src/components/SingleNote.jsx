import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const SingleNote = ({note}) => {
  return (
    <div className='card mt-3 text-bg-light'>
        <div className='card-body'>
            <h5 className='card-title'>
                <Link to={`/note/${note._id}`} className='note-header'>{note.title}</Link>
            </h5>
            <p className='card-text'>{note.content}</p>
        </div>
    </div>
  )
}

export default SingleNote