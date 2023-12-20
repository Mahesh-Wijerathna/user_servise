require('dotenv').config();
const mongoose = require('mongoose');
const port = 4000 // process.env.PORT;
const app = require('./app');


mongoose.connect(
    "mongodb+srv://SoftwareProject:SoftwareProject@cluster0.r0hwfhg.mongodb.net/?retryWrites=true&w=majority",
    {}).then(result => {
        console.log("db conntected for user service")
        app.listen(port, () => {
            console.log(`User service listening on port  ${port}`)
        })
    }
    ).catch(err => console.log(err))