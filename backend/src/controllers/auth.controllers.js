require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userDB = require("../models/user.models");

exports.login = async(req, res) => {
    try{
        const {email, password, role} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Fill all the details",
            });
        }

        const user = await userDB.findOne({email});
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
                message: "Password is incorrectd",
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


exports.createUser = async(req, res) => {
    try{
        const {email, password, role} = req.body;
        const userExists = await userDB.findOne({email});
        if(userExists){
            res.status(400).json({
                success: false,
                message: `User Already Exists`,
                data: userExists,
            });
        }

        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: `Error in hashing the password`
            });
        }

        const user = await userDB.create({email, password:hashedPassword, role});

        res.status(200).json({
            success: true,
            data: user,
            message: `User created successfully`
        });

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}