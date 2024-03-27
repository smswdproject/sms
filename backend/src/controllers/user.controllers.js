const bcrypt = require("bcrypt");
const userDB = require("../models/user.models");
const studentDB = require("../models/student.models");
const teacherDB = require("../models/teacher.models");
const { ISE } = require("../utils/errors.utils");

exports.createUser = async(req, res) => {
    try{
        const {name, email, password, role} = req.body;
        const userExists = await userDB.findOne({email});
        if(userExists){
            return res.status(400).json({
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
            return res.status(500).json({
                success: false,
                message: `Error in hashing the password`
            });
        }

        const user = await userDB.create({email, password:hashedPassword, role});
        if(role === "student"){
            await studentDB.create({name, email, password:hashedPassword});
        }
        else if(role === "teacher"){
            await teacherDB.create({name, email, password:hashedPassword});
        }

        user.password = undefined;
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