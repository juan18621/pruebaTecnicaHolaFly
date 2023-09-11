
const planetController = require('../controllers/planetController')

const applyPlanetEndPoints = (server, app) => {
    server.get('/hfswapi/getPlanets', planetController.getPlanets );
    server.get('/hfswapi/getPlanet/:id', planetController.getPlanetById );
    server.get('/hfswapi/getWeightOnPlanetRandom', planetController.getWeightOnPlanetRandom );
    server.post('/hfswapi/planet', planetController.createPlanet );
}


module.exports = applyPlanetEndPoints;