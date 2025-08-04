const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode) {
        case 400:
            res.json({title: "Validation Error" ,message: error.message, stackTrace:error.stack});
            break;
        case 404:
            res.json({title: "Not found" ,message: error.message, stackTrace:error.stack});
            break;
        case 401:
            res.json({title: "Unauthorized" ,message: error.message, stackTrace:error.stack});
            break;
        case 403:
            res.json({title: "Forbidden" ,message: error.message, stackTrace:error.stack});
            break;
        case 500:
            res.json({title: "Server Error" ,message: error.message, stackTrace:error.stack});
            break;
        default:
            console.log("No Error, All Good :)")
            break;
    }
};

module.exports = {errorHandler}