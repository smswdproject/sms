require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userDB = require("../models/user.models");
const studentDB = require("../models/student.models");
const teacherDB = require("../models/teacher.models");
const { ISE } = require("../utils/errors.utils");

exports.login = async(req, res) => {
    try{
        const {email, password, role} = req.body;

        if(!email || !password || !role){
            return res.status(400).json({
                success: false,
                message: "Fill all the details",
            });
        }

        let user = await userDB.findOne({email, role});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "User does not exist",
            });
        }

        if(role === "student"){
            user = await studentDB.findById({_id: user.userId});
        }
        else if(role === "teacher"){
            user = await teacherDB.findById({_id: user.userId});
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        } 
        if(await bcrypt.compare(password, user.password)){
            const token = jwt.sign(payload,
                                process.env.JWT_SECRET,
                                {expiresIn: "1h",});

            user.token = token;
            user.password = undefined;
            const options = {
                expires: new Date(Date.now() + 3*24*60*1000),
                httpOnly: true,
            }
            return res.cookie("token", token, options).status(200).json({
                success: true,
                message: "Logged in successfully",
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
        return ISE(error);
    }
}