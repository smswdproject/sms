const express = require("express");
const cors = require("cors")
const fileupload = require("express-fileupload");
const annRoutes = require("./routes/ann.routes");
const authRoutes = require("./routes/auth.routes");
const createUserRoutes = require("./routes/createuser.routes");
const studentExportRoutes = require("./routes/studentExport.routes");

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
app.use("/createuser", createUserRoutes);



// EXPORTING THE USER DATA FROM DATABASE TO CSV FILE
app.use("/export", studentExportRoutes);



module.exports = app;