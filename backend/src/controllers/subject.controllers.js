const subjectDB = require("../models/subject.models");
const teacherDB = require("../models/teacher.models");
const deptDB = require("../models/dept.models");
const { ISE } = require("../utils/errors.utils");

exports.createSubject = async(req, res) => {
    try {
        const {name, description, dept, teacher} = req.body;
        const subjectExists = await subjectDB.findOne({name});

        if(subjectExists){
            return res.status(400).json({
                success: false,
                message: "Subject already exists"
            });
        }

        const teacherRes = await teacherDB.findOne({name:teacher});
        const deptRes = await deptDB.findOne({name:dept});
        const subject = await subjectDB.create({name, description, dept:deptRes._id, teacher:teacherRes._id});

        return res.status(200).json({
            success: true,
            message: "Subject created successfully",
            data: subject
        });
        
    } catch (error) {
        // return res.status(500).json({
        //     success: false,
        //     message: "Internal server error"
        // });
        return ISE(error);
    }
}