
const mongoose = require('mongoose');
const operation = require("./operations");
require('dotenv').config();

const uri = process.env.DB_CONNECTION_URL;
mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const crudOperations = async () => {
    // await operation.createUser({
    //     firstName: "Raja",
    //     lastName: "Mondal",
    //     email: "email@insabhi.com",
    //     jobTitle: "Software Engineer"
    // });

    // await operation.getAllUsers();

    const userId = "6718d5d0e9bfbb89c6d6c5d4";
    // await operation.getUserById(userId);

    // await operation.updateUser(userId, { jobTitle: "Senior Software Engineer" });

    await operation.deleteUser(userId);
}

crudOperations();
