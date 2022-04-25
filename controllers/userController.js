const User = require("../model/model");

const userController = {
  // Add a user
  addUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Get all user
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Update one user
  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Delete user
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

// deleteUser: catchAsync(async (req, res, next) => {
//   const users = await User.findByIdAndDelete(req.params.id);
//   res.status(200).json(users);
// }),

// const catchAsync = (callback) => async (req, res, next) => {
//   try {
//     await callback(req, res, next);
//   } catch (err) {
//     next(err);
//   }
// };

module.exports = userController;
