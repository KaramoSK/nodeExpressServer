const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');


router.get('/', controller.getAllUsers);
router.get('/:id',controller.getUserById);
router.post('/', controller.postUser);
router.delete('/:id', controller.deleteUserById);
router.put('/:id', controller.updateUser);


module.exports = router;