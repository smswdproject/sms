const pdfkit = require("pdfkit");
const fs = require("fs-extra");
const json2csv = require("json2csv").Parser;
const userDB = require("../models/user.models");
const studentDB = require("../models/student.models");
const { ISE } = require("../utils/errors.utils");

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

        const j2c = new json2csv({csvFields});
        const csvData = j2c.parse(students);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attatchment: student_data.csv");

        res.status(200).end(csvData);

    } catch (error) {
        return ISE(error);
    }
}

exports.studentResult = async(req, res) => {
    try {
        // const {studentId} = req.user.id;
        const {email, semesterNo} = req.body;

        // const student = await studentDB.findById({studentId});
        const student = await studentDB.findOne({email:email});

        const {image, name, rollNo, DOB, gender, fatherName, motherName, dept, semesters} = student;

        const selectedSemester = semesters.find(semester => semester.semesterNo === semesterNo);

        const doc = new pdfkit();
        const filePath = "result_card.pdf";

        doc.pipe(fs.createWriteStream(file));
        doc.image(image, {width: 200});
        doc.fontSize(16).text(`Name : ${name}`);
        doc.fontSize(16).text(`Roll No. : ${rollNo}`);
        doc.fontSize(16).text(`Date Of Birth : ${DOB}`);
        doc.fontSize(16).text(`Gender : ${gender}`);
        doc.fontSize(16).text(`Father's Name : ${fatherName}`);
        doc.fontSize(16).text(`Mother's Name : ${motherName}`);
        doc.fontSize(16).text(`Department : ${dept}`);
        doc.fontSize(16).text(`Semester : ${semesterNo}`);

        selectedSemester.subjects.forEach(subject => {
            subject.populate("subject");
            doc.fontSize(16).text(`Subject: ${subject.subject.name}`);
            doc.fontSize(16).text(`Mid Semester Marks: ${subject.subject.midSemMarks}`);
            doc.fontSize(16).text(`Full Semester Marks: ${subject.subject.fullSemMarks}`);
            doc.fontSize(16).text(`Total Marks: ${subject.subject.totalMarks}`);
            doc.moveDown();
        })

        doc.end();

        res.download(file);
    } catch (error) {
        return ISE(error);
    }
}

exports.updateProfile = async(req, res) => {
    try {
        // const {studentId} = req.user.id;
        const {email} = req.body;

        if(!email){
            return res.status(400).json({
                success: false,
                message: "Enter all the details"
            });
        }

        // const studentExists = await studentDB.findById({studentId});
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

        const path = __dirname + "/../../public/profilePics/" + `${studentExists._id}` + `.${imageExt}`;
        image.mv(path);

        const student = await studentDB.findOneAndUpdate({email: email}, {image:`${path}`, name, rollNo, contactNo, DOB, gender, fatherName, motherName, address, city, pinCode, state, updatedAt: Date.now()});

        return res.status(200).json({
            success: true,
            message: "Details updated successfully",
            data: student
        });

    } catch (error) {
        console.error(error);
        return ISE(error);
    }
}