exports.ISE = (error) =>{
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message
    })
} 