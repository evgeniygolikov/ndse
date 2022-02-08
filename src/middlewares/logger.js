const fs = require('fs');
const os = require('os');

const getCurrentTime = () => {
    const now = new Date();
    const hours = `${now.getHours()}`.padStart(2, '0');
    const minutes = `${now.getMinutes()}`.padStart(2, '0');
    const seconds = `${now.getSeconds()}`.padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
};

const logger = (req, res, next) => {
    const data = `${getCurrentTime()} ${req.method}: ${req.url} user-agent: ${req.get('user-agent')}`;

    fs.appendFile('server.log', data + os.EOL, err => {
        if (err) {
            throw err;
        }
    });

    next();
};

module.exports = logger;