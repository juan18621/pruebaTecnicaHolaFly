const express = require('express');
const applyEndpoints = require('./endpoints');
const applyMiddlewares = require('./middlewares');
const path = require('path')

const createExpressServer = async app => {
	const server = express();
	server.use(express.json());
	server.use(express.static('public'))

	applyMiddlewares(server, app);
	applyEndpoints(server, app);

	server.get('/', express.static(path.join(__dirname, 'public')))
    
    await app.databaseService.init();

	return server;
};

module.exports = createExpressServer;