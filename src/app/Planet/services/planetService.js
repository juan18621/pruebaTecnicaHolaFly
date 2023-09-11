const databaseService = require('../../db');
const swapiService = require('../../services/swapiService');
const Planet = require('../classes/Planet');

class PlanetService{
    databaseService;
    swapiService;
    dbTable = 'swPlanet';
    swapiEntity = 'planets'

    constructor(databaseService, swapiService){
        this.databaseService = databaseService;
        this.swapiService = swapiService;
    }

    async getPlanetById(id){
        try {
            const response = {
                planet: undefined,
                message: 'Planet found at this galaxy',
            }
            let planetDB = await this.databaseService.getById({id, table: this.dbTable});
            // if planet not exist in the database sends the request to the swapi API
            if(!planetDB){
                planetDB = await this.getPlanetByIdFromSwapi(id)
                console.log(planetDB)
                response.message = 'Planet found at swapi, to register it at database send the planet attributes at the body to POST /hfswapi/planet endpoint';
            }
            

            response.planet = new Planet(planetDB)
            
            return response;
        } catch (error) {
            throw error
        }
    }


    getPlanetByIdFromSwapi(planetId){
        try {
            const planet = this.swapiService.getPlanetById(planetId)
            if(!planet){
               throw this.throwPlanetNotFoundError()
            }
            return planet
        } catch (error) {
            throw this.throwPlanetNotFoundError()
        }
    }

    planetNotFoundError(){
        return {   
                code: 404,
                error:"Planet not found",
                payload:{
                    id
                }
            }
    }

}


module.exports = new PlanetService(databaseService, swapiService)