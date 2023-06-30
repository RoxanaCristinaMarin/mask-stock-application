const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    hospitals: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Hospital'
    }
},
    {
        timestamps: true
    })

userSchema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) {
        return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports = mongoose.model('User', userSchema)