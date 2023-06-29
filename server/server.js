if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();

const database = require('./config/database');
database();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(process.env.PORT , (req, res) => {
    console.log(`Connected to port ${process.env.PORT}`);
});