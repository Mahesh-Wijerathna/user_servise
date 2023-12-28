const MedicalCenter = require('./medicalCenter'); // Import the MedicalCenter model
const mongoose = require('mongoose');
const createHttpError = require('http-errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const controller = {}; // Create an object to hold the controller functions

// Login functionality
exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw createHttpError(400, 'Missing required parameters');
    }

    const medicalCenter = await MedicalCenter.findOne({ username });

    if (!medicalCenter) {
      throw createHttpError(400, 'User does not exist');
    }

    const isPasswordValid = await bcrypt.compare(password, medicalCenter.password);

    if (!isPasswordValid) {
      throw createHttpError(400, 'Invalid credentials');
    }

    const token = jwt.sign(
      {
        user_id: medicalCenter._id,
        username: medicalCenter.username,
      },
      process.env.JWT_TOKEN_KEY,
      { expiresIn: '4h' }
    );

    medicalCenter.token = token;

    await medicalCenter.save();

    res.status(200).send(medicalCenter);
  } catch (error) {
    next(error); // Pass errors to error handling middleware
  }
};

// Register functionality
exports.register = async (req, res, next) => {
  try {
    const {
      name,
      ownerName,
      address,
      email,
      telephone,
      username,
      password,
      nearestDestination,
      medicalCenterMedia,
    } = req.body;

    if (!name || !ownerName || !address || !email || !telephone || !username || !password || !nearestDestination || !medicalCenterMedia) {
      throw createHttpError(400, 'Missing required parameters');
    }

    const isUserAvailable = await MedicalCenter.findOne({ username });

    if (isUserAvailable) {
      throw createHttpError(400, 'User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newMedicalCenter = new MedicalCenter({
      name,
      ownerName,
      address,
      email,
      telephone,
      username,
      password: hashedPassword,
      nearestDestination,
      medicalCenterMedia,
    });

    const result = await newMedicalCenter.save();

    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

// get one functionality

exports.getOne = async (req, res, next) => {
  const centerId = req.params.id;

  try {

      if (!mongoose.isValidObjectId(centerId)) {
          throw createHttpError(400, "Invalid Id")
      }

      const medicalCenter = await MedicalCenter.findById(centerId).exec();

      if (!medicalCenter) {
          throw createHttpError(404, 'Medical Center not found');
      }

      res.status(200).send(medicalCenter);

  } catch (error) {
      next(error)
  }
}


//update functionality
exports.update = async (req, res, next) => {
  try {
    const medicalCenterId = req.params.id;

    if (!mongoose.isValidObjectId(medicalCenterId)) {
      throw createHttpError(400, 'Invalid Id');
    }

    const {
      name,
      ownerName,
      address,
      email,
      telephone,
      username,
      password,
      nearestDestination,
      medicalCenterMedia,
    } = req.body;

    if (!name || !ownerName || !address || !email || !telephone || !username || !password || !nearestDestination || !medicalCenterMedia) {
      throw createHttpError(400, 'Missing required parameters');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const medicalCenter = await MedicalCenter.findById(medicalCenterId).exec();

    if (!medicalCenter) {
      throw createHttpError(404, 'Medical Center not found');
    }

    medicalCenter.name = name;
    medicalCenter.ownerName = ownerName;
    medicalCenter.address = address;
    medicalCenter.email = email;
    medicalCenter.telephone = telephone;
    medicalCenter.username = username;
    medicalCenter.password = hashedPassword;
    medicalCenter.nearestDestination = nearestDestination;
    medicalCenter.medicalCenterMedia = medicalCenterMedia;

    const result = await medicalCenter.save();

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// delete functionality
exports.delete = async (req, res, next) => {
  try {
    const medicalCenterId = req.params.id;

    if (!mongoose.isValidObjectId(medicalCenterId)) {
      throw createHttpError(400, 'Invalid Id');
    }

    const result = await MedicalCenter.findByIdAndDelete(medicalCenterId);

    if (!result) {
      throw createHttpError(404, 'Medical Center not found');
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
