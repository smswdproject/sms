const mongoose = require("mongoose");
const json2csv = require("json2csv").Parser;
const studentDB = require("../models/student.models");
const userDB = require("../models/user.models");


exports.studentExport = async(req, res) => {
    try {
        let students = [];

        // const studentData = await studentDB.find({});
        const studentData = await userDB.find({});

        studentData.forEach((student) => {
            // const {SID, name, email, contactNo, gender, DOB, fatherName, motherName, parentContactNo, address, city, pinCode, state} = student;
            // students.push({SID, name, email, contactNo, gender, DOB, fatherName, motherName, parentContactNo, address, city, pinCode, state});
            
            const {name, email, role} = student;
            students.push({name, email, role});
        });

        // const csvFields = ["SID", "Name", "Email", "Contact No.", "Gender", "Date Of Birth", "Father's Name", "Mother's Name", "Parent's Contact No.", "Address", "City", "PIN Code", "State"];
        const csvFields = ["Name", "Email Address", "Role"];

        const csvParser = new json2csv({csvFields});
        const csvData = csvParser.parse(students);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attatchment: student_data.csv");

        res.status(200).end(csvData);

    } catch (error) {
        
    }
}