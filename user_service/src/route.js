const express = require('express');

const router = express.Router();
const Controller = require('./controller');


router.post('/', Controller.register)
router.post('/login', Controller.login)
router.put('/:id', Controller.update)

module.exports = router;