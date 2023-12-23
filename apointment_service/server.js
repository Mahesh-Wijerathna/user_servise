require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT ;
const app = require('./app');


mongoose.connect(
    process.env.MONGO_URI,
    {}).then(result => {
        console.log("appointment service part of database conntected")
        app.listen(port, () => {
            console.log(`Appointment service part listening on port  ${port}`)
        })
    }
    ).catch(err => console.log(err))