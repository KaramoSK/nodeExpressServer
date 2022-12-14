const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');


router.get('/users', controller.getAllUsers);
router.get('/users/:id',controller.getUserById);
router.post('/users', controller.postUser);
router.delete('/users/:id', controller.deleteUserById);
router.put('/users/:id', controller.updateUser);


module.exports = router;