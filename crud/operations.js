const User = require('./user');

const createUser = async (userData) => {
    try{
        const result = await User.create(userData);
        console.log("User created successfully:", result);
    }
    catch (error){
        console.error("Error creating user:", error);
    }

    // try {
    //     const user = new User(userData);
    //     await user.save();
    //     console.log("User created successfully:", user);
    // } catch (error) {
    //     console.error("Error creating user:", error);
    // }
    
};

const deleteUser = async (userId) => {
    try {
        const user = await User.findByIdAndDelete(userId);
        if (user) {
            console.log("User deleted successfully:", user);
        } else {
            console.log("User not found");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find({});
        console.log("All users:", users);
    } catch (error) {
        console.error("Error retrieving users:", error);
    }
};

const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (user) {
            console.log("User found:", user);
        } else {
            console.log("User not found");
        }
    } catch (error) {
        console.error("Error retrieving user:", error);
    }
};

const updateUser = async (userId, updateData) => {
    try {
        const user = await User.findByIdAndUpdate(userId, updateData);
        if (user) {
            console.log("User updated successfully:", user);
        } else {
            console.log("User not found");
        }
    } catch (error) {
        console.error("Error updating user:", error);
    }
};


module.exports = {createUser, getAllUsers, deleteUser, getUserById, updateUser}