const csvtojson = require("csvtojson");
const studentDB = require("../models/student.models");
const teacherDB = require("../models/teacher.models");
const deptDB = require("../models/dept.models");
const { ISE } = require("../utils/errors.utils");

exports.importResult = async(req, res) => {
    try {
        if(!req.file){
            return res.status(400).json({
                success: false,
                message: "No file selected"
            });
        }
        
        const teacherId = req.user.id;
        const teacher = await teacherDB.findById({_id: teacherId}).populate("subject");
        if(!teacher){
            return res.status(400).json({
                success: false,
                message: "Teacher not found"
            });
        }
        
        const subjectId = teacher.subject._id;
        
        const { semesterNo } = req.body;
        if(!semesterNo){
            return res.status(400).json({
                success: false,
                message: "No semester selected"
            })
        }
        const studentData = [];

        const csvData = await csvtojson().fromFile(req.file.path);

        for (const row of csvData) {
            const student = await studentDB.findOne({rollNo: row.rollNo});
            if(!student){
                continue;
            }

            const selectedSemester = student.semesters.find(semester => semester.semesterNo === semesterNo);
            if(!selectedSemester){
                continue;
            }

            const selectedSubject = selectedSemester.subjects.find(subject => subject.subject === subjectId);

            selectedSubject.midSemMarks = row.midSemMarks;
            selectedSubject.fullSemMarks = row.fullSemMarks;
            selectedSubject = row.midSemMarks + row.fullSemMarks;

            await student.save();
        }
        

    } catch (error) {
        return ISE(error);
    }
};

exports.showResult = async(req, res) => {
    try {
        const teacherId = req.user.id;
        const {semesterNo} = req.body;

        const teacher = await teacherDB.findById({_id: teacherId}).populate("subject");
        if(!teacher){
            return res.status(400).json({
                success: false,
                message: "Teacher not found"
            });
        }

        const subjectId = teacher.subject._id;

        const studentData = [];

        let count = teacher.studentCount;
        while(count != 0){
            const student = await studentDB.find({})

            count--;
        }
        
    } catch (error) {
        return ISE(error);
    }
};
