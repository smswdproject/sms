const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userDB = require("../models/user.models");
const studentDB = require("../models/student.models");
const teacherDB = require("../models/teacher.models");

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
        if(role === "student"){
            await studentDB.create({email, password:hashedPassword});
        }
        else if(role === "teacher"){
            await teacherDB.create({email, password:hashedPassword});
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

exports.updateStudent = async(req, res) => {
    try {
        const {email, role} = req.body;
        // const userExists = await userDB.findOne({email, role});
        const studentExists = await studentDB.findOne({email});
        if(!studentExists){
            return res.status(400).json({
                success: false,
                message: `Student does not exist`,
            });
        }

        const image = req.files.image;
        const {name, rollNo, contactNo, DOB, gender, fatherName, motherName, address, city, pinCode, state} = req.body;

        const extensions = ["jpeg", "jpg", "png"];
        const imageExt = image.name.split(".")[1].toLowerCase();

        if(!extensions.includes(imageExt)){
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }

        const path = __dirname + "/../../public/profilePics/" + Date.now() + `.${imageExt}`;
        image.mv(path);

        const student = await studentDB.findOneAndUpdate({email: email}, {image:`${path}`, name, rollNo, contactNo, DOB, gender, fatherName, motherName, address, city, pinCode, state, updatedAt: Date.now()});

        return res.status(200).json({
            success: true,
            message: "Details updated successfully",
            data: student
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}