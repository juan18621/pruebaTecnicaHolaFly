

const bodyParser = require('body-parser');

const createServer = require('./server');

const express = require('express');


const app = require('./app');

const path = require('path')


async function start() {
  const server = await createServer(app);


  server.use('/', express.static(path.join(__dirname, 'public')))

	// Start the GraphQL server
  const port = process.env.PORT || 4567;
	server.listen(port , () => {
		// eslint-disable-next-line no-console
		console.log(`Server is running on port: ${port}`);
	});

}

start();