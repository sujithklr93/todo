const ErrorHandler = (error, req, res, next) => {
console.log(error)
    res.status(res.statusCode ? res.statusCode : 500).json({
        message: error.message
    });
    return
}

module.exports = {
    ErrorHandler
}