const jwt = require("jsonwebtoken"); 
require("dotenv").config();


exports.auth = (req, res, next) => {
    try{
        const token = req.body.token;

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token missing"
            })
        }

        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);

            req.user = payload;
        } 
        catch(error){
            res.status(401).json({
                success: false,
                message: "Token is invalid",
            })
        }

        next();
    }
    catch(error){
        console.error(error);
        res.status(401).json({
            success: false,
            message: "Something went wrong"
        })
    }
}


exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role !== "admin"){
            return res.status(401).json({
                success: false,
                message: "This route is unaccessible"
            });
        }
        next();
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.isTeacher = (req, res, next) => {
    try{
        if(req.user.role !== "teacher"){
            return res.status(401).json({
                success: false,
                message: "This route is unaccessible"
            });
        }
        next();
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

exports.isStudent = (req, res, next) => {
    try{
        if(req.user.role !== "student"){
            return res.status(401).json({
                success: false,
                message: "This route is unaccessible"
            });
        }
        next();
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}