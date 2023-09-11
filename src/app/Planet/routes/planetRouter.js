
const validatorHandler = require('../../../server/middlewares/validatorHandler');
const planetController = require('../controllers/planetController');
const getCharacterWeigthSchema = require('../schemas/getCharacterWeigthSchema');
const planetSchema = require('../schemas/planetSchema');

const applyPlanetEndPoints = (server, app) => {
    server.get('/hfswapi/getPlanets', planetController.getPlanets );
    server.get('/hfswapi/getPlanet/:id', planetController.getPlanetById );
    server.get('/hfswapi/getWeightOnPlanetRandom', validatorHandler(getCharacterWeigthSchema, 'query'), planetController.getWeightOnPlanetRandom );
    server.post('/hfswapi/planet', validatorHandler(planetSchema, 'body') ,  planetController.createPlanet );
}


module.exports = applyPlanetEndPoints;