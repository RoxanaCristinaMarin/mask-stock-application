const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/auth/register', async (req, res) => {
   
    const { name, email, password, hospitals } = req.body
    
    if (!name || !email || !password || !hospitals) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(404)
        throw new Error('User allready created')
    }

    const user = await User.create({
        name, 
        email, 
        password,
        hospitals
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            hospitals: user.hospitals
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
});

router.post('/auth/login', async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })
    
    const payload = {
        email: user.email,
        id: user._id
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1d"});
    
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
             _id: user.id,
            name: user.name,
            email: user.email,
            hospitals: user.hospitals,
            token: "Bearer " + token
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

});

module.exports = router