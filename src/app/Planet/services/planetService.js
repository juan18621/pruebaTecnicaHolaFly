const peopleService = require('../../People/services/peopleService');
const databaseService = require('../../db');
const swapiService = require('../../services/swapiService');
const Planet = require('../classes/Planet');
const People = require('../../People/classes/people');

class PlanetService{
    databaseService;
    swapiService;
    peopleService;
    dbTable = 'swPlanet';
    swapiEntity = 'planets'

    constructor(databaseService, swapiService, peopleService){
        this.databaseService = databaseService;
        this.swapiService = swapiService;
        this.peopleService = peopleService;
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
                response.message = 'Planet found at swapi, to register it at database send the planet attributes at the body to POST /hfswapi/planet endpoint';
            }
            

            response.planet = new Planet(planetDB)
            
            return response;
        } catch (error) {
            throw error
        }
    }

    


    async getPlanetByIdFromSwapi(planetId){
        try {
            const planet = await this.swapiService.getPlanetById(planetId)
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


    async calculateWeightOnPlanet(planetId, characterId){
        const {character} = await this.peopleService.getCharacterById(characterId);
        const {planet} = await this.getPlanetById(planetId);
        if(character.getHomeworlId().replace('/planets/', '') === planetId){
            throw ({error:"It is prohibited by the Jedi Council to calculate weight with the character's home planet"})
        }
        const characterWeight = character.calculateWeightOnPlanet(parseFloat(planet.getGravity()))
        return {
               characterWeight,
               character: character.getName(),
               planet: planet.getGravity(),
            }
    }


    //POST
    async createPlanet(planet){
        const planetDB = await this.databaseService.create({entity: planet, table: this.dbTable});
        return planetDB
    }

}


module.exports = new PlanetService(databaseService, swapiService, peopleService)