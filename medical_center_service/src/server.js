require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT ;
const app = require('./app');
//const express = require('express');
//const app = express();

mongoose.connect(
    process.env.MONGO_URI,
    {}).then(result => {
        console.log("Medical center service part of database conntected")
        app.listen(port, () => {
            console.log(`Medical center service part listening on port  ${port}`)
        })
    }
    ).catch(err => console.log(err));