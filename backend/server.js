require('dotenv').config();

const express = require('express')
const noteRoutes = require('./routes/noteRoutes')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors({ origin: true, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
    res.send('Test server');
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })


