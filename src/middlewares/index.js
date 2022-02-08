const logger = require('./logger');
const fileHandler = require('./fileHandler');
const handleNotFoundError = require('./handleNotFoundError');
const handleInternalServerError = require('./handleInternalServerError');

module.exports = {
    logger,
    fileHandler,
    handleNotFoundError,
    handleInternalServerError,
};