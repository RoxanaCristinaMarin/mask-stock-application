const express = require('express');
const router = express.Router();
const passport = require('passport');
const Hospital = require('../models/hospitalModel');

router.get('/protected/hospitals', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
    try {
        const hospitals = await Hospital.find({});
        return res.status(200).json(hospitals);
    } catch (err) {
        return next(err);
    }
})

module.exports = router