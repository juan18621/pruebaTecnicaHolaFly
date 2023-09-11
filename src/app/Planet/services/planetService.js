const databaseService = require('../../db');
const swapiService = require('../../services/swapiService');

class PlanetService{
    databaseService;
    swapiService;
    dbTable = 'swPlanet';
    swapiEntity = 'planets'

    constructor(databaseService, swapiService){
        this.databaseService = databaseService;
        this.swapiService = swapiService;
    }


    getPlanetById(planetId){
        return this.swapiService.getPlanetById(planetId)
    }

}


module.exports = new PlanetService(databaseService, swapiService)