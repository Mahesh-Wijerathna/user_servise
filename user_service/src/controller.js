const TouristModel = require('./tourist')
const mongoose = require('mongoose')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.login = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    



    try {
        if (!username || !password) {
            throw createHttpError(400, 'Missing required parameters');
        }

        const tourist = await TouristModel.findOne({ username: username }).exec();

        if (!tourist) {
            throw createHttpError(400, 'User does not exist');
        }

        const isPasswordValid = await bcrypt.compare(password, tourist.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials');
        }

        const user = await TouristModel.findOne({ username: username }).exec();

        const token = jwt.sign(
            {
                user_id: user._id,
                username: user.username,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "4h",
            }
        );

        user.token = token;

        const result = await user.save();

        res.status(200).send(result);
        console.log("login successful from server side  =" + username);
        console.log(result);

    } catch (error) {
        console.log("error in login in server side =" );
        //next(error); 
    }
};


exports.register = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    const phoneNumber = req.body.phoneNumber
    const country = req.body.country
    const username = req.body.username

    console.log(req.body);

    try {
        if (!email || !password || !name || !phoneNumber  || !country || !username) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const isUserAvailable = await TouristModel.findOne({ email: email }).exec();

        if (isUserAvailable) {
            throw createHttpError(400, 'User already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

       
        // tourist model
        const tourist = new TouristModel({
            name: name,
            email: email,
            country: country,
            phoneNumber: phoneNumber,
            username: username,
            password: hashedPassword
        })

        const result = await tourist.save();

        res.status(201).send(result);


    } catch (error) {
        console.log("error in register in server side");
        //next(error)

    }


}

exports.update = async (req, res, next) => {

    const userId = req.params.id;

    const {
        name,
        email,
        country,
        phoneNumber,
        username,
        password
        

    } = req.body;


    try {

        if (!mongoose.isValidObjectId(userId)) {
            throw createHttpError(400, "Invalid Id")
        }


        if (!name || !email || !country || !phoneNumber || !username || !password) {
            throw createHttpError(400, 'Please provide all the required fields');
        }

        // const { image } = req.files;
        // let filepath
        // let filepathtoUplaod;

        // if (image) {
        //     if (!image.mimetype.startsWith('image')) {
        //         throw createHttpError(400, 'Only images are allowed');
        //     }
        //     filepath = __dirname + '../../../public/products/' + image.name
        //     image.mv(filepath);
        //     filepathtoUplaod = '/public/products/' + image.name
        // };

        const tourist = await TouristModel.findById(userId).exec();

        if (!tourist) {
            throw createHttpError(404, 'Tourist not found');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        tourist.name = name;
        tourist.email = email;
        tourist.country = country;
        tourist.phoneNumber = phoneNumber;
        tourist.username = username;
        tourist.password = hashedPassword;

        
        
        const result = await tourist.save();

        res.status(200).send(result);


    } catch (error) {
        //next(error)
    }
}

exports.getOne = async (req, res, next) => {
    const userId = req.params.id;

    try {

        if (!mongoose.isValidObjectId(userId)) {
            throw createHttpError(400, "Invalid Id")
        }

        const tourist = await TouristModel.findById(userId).exec();

        if (!tourist) {
            throw createHttpError(404, 'Tourist not found');
        }

        res.status(200).send(tourist);

    } catch (error) {
        //next(error)
    }
}

exports.delete = async (req, res, next) => {

    const touristId = req.params.id;
    

    try {
        if (!mongoose.isValidObjectId(touristId)) {
            throw createHttpError(400, "Invalid Id")
        }

        //const result = await TouristModel.findByIdAndDelete(touristId).exec();
        //find by id
        const result = await TouristModel.findById(touristId).exec();
        console.log("result to delete = "    + result);


        if (!result) {
            throw createHttpError(404, 'Product not found');
        }

        res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}


