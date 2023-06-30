if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();
const cors = require('cors');
const authenticationRoutes = require('./routes/authenticationRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const passport = require('passport');

const database = require('./config/database');
database();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());

require('./config/passport')

app.use('/api', authenticationRoutes);
app.use('/api', protectedRoutes);

app.listen(process.env.PORT , (req, res) => {
    console.log(`Connected to port ${process.env.PORT}`);
});