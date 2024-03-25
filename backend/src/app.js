const express = require("express");
const cors = require("cors")
const fileupload = require("express-fileupload");
const annRoutes = require("./routes/ann.routes");
const authRoutes = require("./routes/login.routes");
const studentRoutes = require("./routes/student.routes");
const userRoutes = require("./routes/user.routes")

const app = express();


// ADDING MIDDLEWARE FOR PARSING THE JSON REQUEST BODY
app.use(express.json());


// ADDING THE CORS
app.use(cors());

// ADDING MIDDLEWARE FOR HANDLING THE MEDIA FILES IN THE REQUEST BODY
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
}));


// MOUNTING THE ANNOUNCEMENT ROUTES
app.use("/api/v1/announcements", annRoutes);


// MOUTING THE AUTHENTICATION AND AUTHORIZATION ROUTES
app.use("/login", authRoutes);


// MOUNTING THE CREATE USER ROUTES
app.use("/createuser", userRoutes);


// MOUNTING THE UPDATE STUDENT DETAILS ROUTES
app.use("/api/v1/student", userRoutes);


// MOUNTING THE EXPORT STUDENT DATA ROUTES
app.use("/student", studentRoutes);





module.exports = app;