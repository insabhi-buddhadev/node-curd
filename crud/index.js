const express = require('express');
const mongoose = require('mongoose');
// const User = require('./user');
const fs = require('fs');
const userRoutes = require('./routes/userRoutes');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
console.log(port);
const cors = require('cors');

// middle ware plugin 
// app.use(express.urlencoded({extended: false}));
app.use(express.json({}));
app.use(cors());

const uri = process.env.DB_CONNECTION_URL;
console.log(uri);

mongoose.connect(uri)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });


// app.use((req, res, next) => {
//     fs.appendFile('log.txt', `\n${Date.now()}: ${req.method}: ${req.path} Headers: ${JSON.stringify(req.headers)}
//     Body: ${JSON.stringify(req.body)}`, (err, data) => {
//         if (err) {
//             console.error('Error writing to log file:', err);
//         }
//         next();
//     });
// });

// app.use((req, res, next) => {
//     console.log(req);
//     next();
// })


// app.post('/create_user', async (req, res) => {
//     try {
//         console.log(req.body);
//         const user = await User.create(req.body);
//         res.status(201).json({ message: "User created successfully", user });
//         console.log(user);
//     } catch (error) {
//         res.status(400).json({ error: "Error creating user", details: error.message });
//     }
// });

// app.get('/users/view', async (req, res) => {
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

// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({ error: "Error retrieving users", details: error.message });
//     }
// });

// app.get('/login', async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(404).json({ error: "You are not registered", details: error.mesage});
//     }
// });

// app.route('/users/:id')
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


app.use('/api', userRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
