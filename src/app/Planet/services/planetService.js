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

    async getPlanetById(id){
        try {
            let planetDB = await this.databaseService.getById({id, table: this.dbTable});
            // if character not exit in database, it shows an error to search by name as the swapi end point can not search character by id
            if(!planetDB){
               planetDB = this.getPlanetByIdFromSwapi(id)
            }
            return planetDB;
        } catch (error) {
            throw error
        }
    }


    getPlanetByIdFromSwapi(planetId){
        console.log(planetId)
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