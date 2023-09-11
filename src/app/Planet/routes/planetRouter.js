
const planetController = require('../controllers/planetController')

const applyPlanetEndPoints = (server, app) => {
    server.get('/hfswapi/getPlanet/:id', planetController.getPlanetById );
}


module.exports = applyPlanetEndPoints;