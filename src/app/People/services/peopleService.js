
const { peopleFactory } = require('..');
const databaseService = require('../../db');
const swapiService = require('../../services/swapiService');
const planetService = require('../../Planet/services/planetService');


 
 class PeopleService{
    databaseService;
    swapiService;
    dbTable = 'swPeople';
    swapiEntity = 'people'

    constructor(databaseService, swapiService, planetService){
        this.databaseService = databaseService;
        this.swapiService = swapiService;
        this.planetService = planetService;
    }

    async getCharacterById(id){
        try {
            //object for response
            const payload = {
                character: undefined,
                message: ''
            }
            let characterDB = await this.databaseService.getById({id, table: this.dbTable});
            if(characterDB){
                payload.character = peopleFactory(characterDB)
                payload.message = 'Character found';
            }else{
                // if character not exits in database, searchs in swapi and sets planet name
                characterDB = await  this.getCharacterByIdFromSwapi(id);
                payload.character = peopleFactory(characterDB)
                const planetName = await  this.getCharacterHomeWorldName(payload.character.getHomeworlId().replace('/planets/', ''))
                payload.character.setHomeworldName(planetName)
                payload.message = 'Character found at swapi, to register it at database send the character attributes at the body to /hfswapi/people endpoint';
            }
            return payload;
        } catch (error) {
            throw error
        }
    }

    async getCharacterByIdFromSwapi(id){
        const character = await this.swapiService.getCharacterById(id)
        if(!character){
            throw (
                {   
                    code: 404,
                    error:"Star wars character not stored in database",
            
                })
        }
        return character;
    }

    async createCharacter(character){
        const characterDB = await this.databaseService.create({entity: character, table: this.dbTable});
        return characterDB
    }

    async getCharacterHomeWorldName(planetId){
        console.log(planetId)
        return (await this.planetService.getPlanetByIdFromSwapi(planetId)).name;
    }
}

module.exports = new PeopleService(databaseService, swapiService, planetService);