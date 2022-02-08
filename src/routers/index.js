const indexRouter = require('./index.router');
const tasksRouter = require('./tasks.router');

module.exports = {
    routers: {
        indexRouter,
    },
    apiRouters: {
        tasksRouter,
    },
};