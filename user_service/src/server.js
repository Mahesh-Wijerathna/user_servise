require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const app = require('./app');


mongoose.connect(
    process.env.MONGO_URI,
    {}).then(result => {
        console.log("user service part of database conntected")
        app.listen(port, () => {
            console.log(`User service part listening on port  ${port}`)
        })
    }
    ).catch(err => console.log(err))