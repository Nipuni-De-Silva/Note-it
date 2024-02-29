import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateNote = (props) => {

    const navigate = useNavigate()

    const [note, setNote] = useState({
        title: "",
        content: "",
        date: "",
    })

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/notes/', note)
        .then((res) => {
            setNote({
                title: "",
                content: "",
                date: "",
            });
            navigate('/')
        })
        .catch((err) => {
            console.log('Error in CreateNote!');
        })
    }

    return (
        <div className='CreateNote'>
            <div className="container">
                <div className="row">
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/' className='btn btn-outline-success float-left'>
                            Show Book List
                        </Link>
                    </div>

                    <div className='col-md-10 m-auto'>
                        <h1 className='display-4 text-center'>Add Note</h1>
                        <p className='lead text-center'>Create new Note</p>
                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input 
                                    type="text"
                                    placeholder='Note Title'
                                    name='title'
                                    className='form-control'
                                    value={note.title}
                                    onChange={onChange}
                                />
                            </div>

                            <br />

                            <div className='form-group'>
                                <input 
                                    type="text"
                                    placeholder='Note Content'
                                    name='content'
                                    className='form-control'
                                    value={note.content}
                                    onChange={onChange}
                                />
                            </div>

                            <br />

                            <div className='form-group'>
                                <input 
                                    type="date"
                                    placeholder='Note Date'
                                    name='date'
                                    className='form-control'
                                    value={note.date}
                                    onChange={onChange}
                                />
                            </div>

                            <button type='submit' className='btn btn-outline-success btn-block mt-4 mb-4 w-100'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNote