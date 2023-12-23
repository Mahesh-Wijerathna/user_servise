const express = require('express');
const AppointmentController = require('../controllers/products')

const router = express.Router()

const verifyToken = require('../middlewears/verifyToken')

router.post('/', verifyToken, AppointmentController.create);
router.put('/:id', AppointmentController.update)
router.delete('/:id', AppointmentController.delete)

router.get('/all', verifyToken, AppointmentController.getAll)

router.get('/:id', AppointmentController.getOne)
router.get('searchResults', AppointmentController.search)



module.exports = router;