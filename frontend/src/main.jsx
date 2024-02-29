import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CreateNote from './components/CreateNote'
import UpdateNote from './components/UpdateNote.jsx';
import ShowNoteDetails from './components/ShowNoteDetails.jsx';
import SingleNote from './components/SingleNote.jsx';
import ShowNoteList from './components/ShowNoteList.jsx';


const router = createBrowserRouter([
  { path: '/', element: <ShowNoteList /> },
  { path: '/create', element: <CreateNote /> },
  { path: '/note/:id', element: <ShowNoteDetails /> },
  { path: '/note/:id/edit', element: <UpdateNote /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
