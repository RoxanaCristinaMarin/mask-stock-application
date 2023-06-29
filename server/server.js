if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})
app.listen(process.env.PORT, (req, res) => {
    console.log(`Connected to port ${process.env.PORT}`);
})