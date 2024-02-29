import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


const ShowNoteDetails = ({props}) => {

  const [note, setNote] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`http://localhost:4000/api/notes/${id}`)
    .then((res) => {
      setNote(res.data);
    })
    .catch((err) => {
      console.log('Error in ShowNoteDetails!');
    })
  })

  const onDeleteClick = (id) => {
    axios
    .delete(`http://localhost:4000/api/note/${id}`)
    .then((res) => {
      navigate('/')
    })
    .catch((err) => {
      console.log('Error in ShowNoteDetails!');
    })
  } 

  const Note = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Title</td>
            <td>{note.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Content</td>
            <td>{note.content}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>Date</td>
            <td>{note.date}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );


  return (
    <div className='ShowNoteDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Note List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Note's Record</h1>
            <p className='lead text-center'>View Note's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{Note}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(note._id);
              }}
            >
              Delete Note
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/note/${note._id}/edit`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Note
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default ShowNoteDetails