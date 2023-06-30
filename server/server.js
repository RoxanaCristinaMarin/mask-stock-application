if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const cors = require('cors');
const authenticationRoutes = require('./routes/authenticationRoutes');

const database = require('./config/database');
database();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api', authenticationRoutes);

app.listen(process.env.PORT , (req, res) => {
    console.log(`Connected to port ${process.env.PORT}`);
});