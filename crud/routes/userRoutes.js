const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const generateToken = require('../service/tokenGenerator');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// router.post('/create_user', async (req, res) => {
//     try {
//         console.log(req.body);
//         const user = await User.create(req.body);
//         res.status(201).json({ message: "User created successfully", user });
//         console.log(user);
//     } catch (error) {
//         res.status(400).json({ error: "Error creating user", details: error.message });
//     }
// });

// router.get('/users/view', async (req, res) => {
//     try {
//         const users = await User.find({});
//         const html = `<ul>
//             ${users.map((user) => `<li>${user.firstName}</li>`).join("")}
//         </ul>`;
//         res.send(html);
//     } catch (error) {
//         console.error("Error retrieving users:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// router.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Error retrieving users", details: error.message });
//     }
// });

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email, password });
//         if (!user) {
//             return res.status(404).json({ error: "User not found." });
//         }

//         const token = generateToken(user);
//         console.log(token);

//         res.status(200).json({
//             message: "Login successful",
//             auth_token: token,
//             user: {
//                 id: user._id,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 jobTitle: user.jobTitle
//             }
//         });
//     } catch (error) {
//         res.status(500).json({ error: "Internal Server Error", details: error.message });
//     }
// });

// router.route('/users/:id')
//     .get(async (req, res) => {
//         try {
//             console.log(req.params.id);
//             const user = await User.findById(req.params.id);
//             if (user) {
//                 res.status(200).json(user);
//             } else {
//                 res.status(404).json({ message: "User not found" });
//             }
//         } catch (error) {
//             res.status(500).json({ error: "Error retrieving user", details: error.message });
//         }
//     })
//     .delete(async (req, res) => {
//         try {
//             const user = await User.findByIdAndDelete(req.params.id);
//             if (user) {
//                 res.status(200).json({ message: "User deleted successfully", user });
//             } else {
//                 res.status(404).json({ message: "User not found" });
//             }
//         } catch (error) {
//             res.status(500).json({ error: "Error deleting user", details: error.message });
//         }
//     })
//     .patch(async (req, res) => {
//         try {
//             const user = await User.findByIdAndUpdate(req.params.id, req.body);
//             if (user) {
//                 res.status(200).json({ message: "User updated successfully", user });
//             } else {
//                 res.status(404).json({ message: "User not found" });
//             }
//         } catch (error) {
//             res.status(400).json({ error: "Error updating user", details: error.message });
//         }
//     });

    router.post('/create_user', userController.createProfile);
    // router.patch('/users/:id', userController.editProfile);
    router.patch('/update/:id', userController.editProfile);
    // router.patch('/update/:id', [authMiddleware], userController.editProfile);
    // router.delete('/delete/:id', [authMiddleware], userController.deleteProfile);
    router.delete('/delete/:id', userController.deleteProfile);
    router.get('/users', userController.getProfiles);
    router.get('/user/profile/:id', userController.getProfilebyId);
    router.post('/login', userController.loginUser);

    module.exports = router;