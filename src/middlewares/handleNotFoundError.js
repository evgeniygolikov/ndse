const {HttpStatusCode} = require('../constants');

const handleNotFoundError = (req, res) => {
    res.status(HttpStatusCode.NOT_FOUND).json('404 | not_found');
};

module.exports = handleNotFoundError;