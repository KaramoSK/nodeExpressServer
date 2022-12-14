const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');


router.get('/users', controller.getAllUsers);
/* router.get('/users/:userId',controller.gerUserById);
router.post('/users', controller.postUser);
router.delete('/users/:id', controller.deleteUserById);
router.put('/users/:id', controller.uppdateUser); */


module.exports = router;