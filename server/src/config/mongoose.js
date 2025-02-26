const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");
// dotenv config
dotenv.config();

mongoose.connect(
    process.env.MONGO_DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => {
        console.log("Connected to Database");
    }
);


// async function createAdmin() {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         const hashedPassword = await bcrypt.hash("admin123", 10); // Change password as needed

//         const admin = new Admin({
//             email: "admin@example.com",
//             password: hashedPassword,
//             firstname: "Admin",
//             middlename: "",
//             lastname: "User",
//             role: "Admin",
//             isEmailVerified: true
//         });

//         await admin.save();
//         console.log("Admin user created successfully!");
//         mongoose.connection.close();
//     } catch (error) {
//         console.error("Error creating admin:", error);
//         mongoose.connection.close();
//     }
// }

// createAdmin();