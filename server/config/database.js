const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const connectDB = () => {
    mongoose.connect(process.env.DATA_BASE, {useNewUrlParser: true})
    const db = mongoose.connection
    
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Successfully connected to Database'))
}

module.exports = connectDB