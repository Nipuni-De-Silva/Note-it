import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//import components
import CreateNote from './components/CreateNote';
import ShowNoteList from './components/ShowNoteList';
import ShowNoteDetails from './components/ShowNoteDetails';
import UpdateNote from './components/UpdateNote';


const router = createBrowserRouter([
  {path: '/', element: <ShowNoteList />},
  {path: '/create-note', element: <CreateNote />},
  {path: '/show-note/:id', element: <ShowNoteDetails />},
  {path: '/edit-note/:id', element: <UpdateNote />}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
