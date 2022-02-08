const express = require('express');
const cors = require('cors');

const {
    logger,
    handleNotFoundError,
    handleInternalServerError,
} = require('./src/middlewares');
const {routers, apiRouters} = require('./src/routers');

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());
server.use(logger);
server.use('/public', express.static(`${__dirname}/public`));
server.use('/api', Object.values(apiRouters));
server.use('/', Object.values(routers));
server.use(handleNotFoundError);
server.use(handleInternalServerError);

server.listen(process.env.PORT ?? 3000);