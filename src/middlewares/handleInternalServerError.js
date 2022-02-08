const {HttpStatusCode} = require('../constants');

const handleInternalServerError = (err, req, res, next) => {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        error: err.toString(),
    });
};

module.exports = handleInternalServerError;