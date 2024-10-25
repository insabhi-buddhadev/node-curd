const User = require("../models/userModel");
const generateToken = require("../service/tokenGenerator");
class UserController{
    async editProfile(req, res){
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body);
            console.log(user);
            if (user) {
                res.status(200).json({ message: "User updated successfully", user });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(400).json({ error: "Error updating user", details: error.message });
        }
    }

    async createProfile(req, res){
        try {
            console.log(req.body);
            const user = await User.create(req.body);
            res.status(201).json({ message: "User created successfully", user });
            console.log(user);
        } catch (error) {
            res.status(400).json({ error: "Error creating user", details: error.message });
        }
    }

    async deleteProfile(req, res){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            if (user) {
                res.status(200).json({ message: "User deleted successfully", user });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error deleting user", details: error.message });
        }
    }

    async getProfiles(req, res){
        try{
            const users = await User.find({});
            res.status(200).json({users})
        } catch (error) {
            res.status(500).json({ error: "Error retrieving users", details: error.message });
        }
    }

    async getProfilebyId(req, res){
        try{
            const user = await User.findById(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error retrieving user", details: error.message });
        }
    }

    async loginUser(req, res){
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email, password });
            if (!user) {
                return res.status(404).json({ error: "User not found." });
            }

            const token = generateToken(user);
            console.log(token);

            res.status(200).json({
                message: "Login successful",
                auth_token: token,
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    jobTitle: user.jobTitle
                }
            });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    }

}

module.exports = new UserController();