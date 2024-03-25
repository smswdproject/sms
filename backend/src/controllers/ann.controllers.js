const annDB = require("../models/ann.models");
const { ISE } = require("../utils/errors.utils");

exports.createAnn = async(req, res) => {
    try{
        const file = req.files.file;
        const {title, content} = req.body;

        const image = ["jpeg", "jpg", "png"];
        const video = ["mp4", "mov", "wmv"];
        const fileExt = file.name.split(".")[1].toLowerCase();
        
        if(!image.includes(fileExt) && !video.includes(fileExt)){
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }
        
        let fileType;
        if(image.includes(fileExt)){
            fileType = `image`
        }
        else if(video.includes(fileExt)){
            fileType = `video`;
        }

        const path = __dirname + "/../../public/files/" + Date.now() + `.${fileExt}`;
        file.mv(path);

        const annData = await annDB.create({title, content, url:`${path}`});

        res.status(200).json({
            success: true,
            message: `Announcement created successfully and media file type is ${fileType}`,
            data: annData,
        });

    }
    catch(error){
        console.error(error);
        return ISE(error);
    }
}