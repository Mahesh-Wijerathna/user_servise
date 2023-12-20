const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect('mongodb+srv://SoftwareProject:SoftwareProject@cluster0.r0hwfhg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
app.listen(4545,() =>{
    console.log("Server up and running - on 4545");
})
app.get("/",(req,res) => {
    res.send("This is our main end point");

})

