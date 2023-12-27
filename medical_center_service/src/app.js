require('dotenv').config()
const express = require('express')
const app = express()
const createHttpError = require('http-errors')
const Router = require('./route')
const jwt = require('jsonwebtoken');
// cors
const cors = require('cors');




app.use(express.json())

app.use(cors());
app.use('/api/v1/medical_center', Router);
app.use('/api/v1/mc/auth', (req,res) => {
    


    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).send('Token not provided');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);
        req.user = decoded;
    } catch (error) {
        res.status(400).send('Invalid token');
    }
    return true;

   

}
);

//app.use('/api/v1/companies', CompanyRouter);
//app.use('/api/v1/products', ProductRouter)
//app.use('/api/v1/orders', OrderRouter)

app.use((err, req, res, next) => {
    if (createHttpError.isHttpError(err)) {
        res.status(err.status).send({ message: err.message })
    } else {
        res.status(500).send({ message: err.message })
    }
    //error unknown
    res.status(500).send({ message: "Error Unknown" })
})

module.exports = app;