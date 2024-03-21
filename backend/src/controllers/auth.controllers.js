require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userDB = require("../models/user.models");
const studentDB = require("../models/student.models");
const teacherDB = require("../models/teacher.models");

exports.login = async(req, res) => {
    try{
        const {email, password, role} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Fill all the details",
            });
        }

        const user = await userDB.findOne({email, role});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User does not exists",
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        } 
        if(await bcrypt.compare(password, user.password)){
            let token = jwt.sign(payload,
                                process.env.JWT_SECRET,
                                {expiresIn: "1h",})

            user.token = token;
            user.password = undefined;
            const options = {
                expires: new Date(Date.now() + 3*24*60*1000),
                httpOnly: true,
            }
            return res.cookie("token", token, options).status(200).json({
                success: true,
                message: "User logged in successfully",
                token,
                user,
            });
        }
        else{
            return res.status(403).json({
                success: false,
                message: "Password is incorrect",
            }); 
        }
        
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}