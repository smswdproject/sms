const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const fileupload = require("express-fileupload");
const annRoutes = require("./routes/ann.routes");
const authRoutes = require("./routes/auth.routes");
const studentRoutes = require("./routes/student.routes");
const teacherRoutes = require("./routes/teacher.routes");
const userRoutes = require("./routes/user.routes")


// CREATING THE APP
const app = express();


// ADDING THE CORS
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


// ADDING MIDDLEWARE FOR PARSING THE JSON REQUEST BODY
app.use(express.json({limit: "16kb"}));

// ADDING MIDDLEWARE FOR PARSING THE URL
app.use(express.urlencoded({extended: true, limit:"16kb"}));

// ADDING MIDDLEWARE FOR STORING THE FILES TO THE PUBLIC FOLDER
app.use(express.static("public"));

// ADDING MIDDLEWARE FOR PARSING THE COOKIES
app.use(cookieParser());


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


// MOUNTING THE STUDENT ROUTES
app.use("/student", studentRoutes);


// MOUNTING THE TEACHER ROUTES
app.use("/teacher", teacherRoutes);


module.exports = app;