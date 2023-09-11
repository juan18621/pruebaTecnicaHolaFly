
const planetController = require('../controllers/planetController')

const applyPlanetEndPoints = (server, app) => {
    server.get('/hfswapi/getPlanet/:id', planetController.getPlanetById );
    server.post('/hfswapi/planet', planetController.createPlanet );
}


module.exports = applyPlanetEndPoints;