const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const pool = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post('/insert', (req, res) => {

});

// read
app.get('/getAll', (req, res) => {
    pool.query('select * from names', (err, rows) => { console.log('error: ', err) });
    res.json({ success: true });
});

// update

// delete

app.listen(process.env.PORT, () => console.log('app is running'));