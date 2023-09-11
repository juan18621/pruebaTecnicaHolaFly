const applySwapiEndpoints = require('./swapiEndpoints');
const peopleRouter = require('../../app/People/routes/peopleRouter')
const applyEndpoints = (server, app) => {
	applySwapiEndpoints(server, app);
	
	return server;
};

module.exports = applyEndpoints;