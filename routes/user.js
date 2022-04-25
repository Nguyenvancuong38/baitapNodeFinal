const router = require('express').Router();
const userController = require("../controllers/userController")

// ADD a user
router.post('/', userController.addUser);

// GET ALL USER
router.get('/', userController.getAllUser);

// DELETE A USER
router.delete('/:id', userController.deleteUser);

// Update a user 
router.put('/:id', userController.updateUser);

module.exports = router;