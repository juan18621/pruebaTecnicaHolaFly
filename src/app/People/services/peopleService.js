
const { peopleFactory } = require('..');
const databaseService = require('../../db');
const swapiService = require('../../services/swapiService');


 
 class PeopleService{
    databaseService;
    swapiService;
    dbTable = 'swPeople';
    swapiEntity = 'people'

    constructor(databaseService, swapiService){
        this.databaseService = databaseService;
        this.swapiService = swapiService;
    }

    //GET

    async getCharacters(){
        return await this.databaseService.getAll({table: this.dbTable})
    }
    async getCharacterById(id, format){
        try {
            //object for response
            const response = {
                character: undefined,
                message: '',
            }
            let characterDB = await this.databaseService.getById({id, table: this.dbTable});
           
            if(characterDB){
                response.character = peopleFactory(characterDB)
                response.message = 'Character found at this galaxy';
            }else{
                // if character not exits in database, searchs in swapi and sets planet name
                characterDB = await  this.getCharacterByIdFromSwapi(id, format);

                response.character = peopleFactory(characterDB, format)
                if(format !== 'wookiee'){
                    const planetName = await  this.getCharacterHomeWorldName(response.character.getHomeworlId().replace('/planets/', ''))
                    response.character.setHomeworldName(planetName)
                }else{
                    response.wookieeFormat = true
                }
                response.message = 'Character found at swapi, to register it at database send the character attributes at the body to POST /hfswapi/people endpoint';
                response.foundAtSwapi = true
            }
            return response;
        } catch (error) {
            throw error
        }
    }

    async getCharacterHomeWorldName(planetId){
        return (await this.swapiService.getPlanetById(planetId)).name;
    }

    async getCharacterByIdFromSwapi(id, format){
        const character = await this.swapiService.getCharacterById(id, format)
        if(!character){
            throw (
                {   
                    code: 404,
                    error:"Star wars character not stored in database",
            
                })
        }
        return character;
    }

    //POST
    async createCharacter(character){
        const characterDB = await this.databaseService.create({entity: character, table: this.dbTable});
        return characterDB
    }
}

module.exports = new PeopleService(databaseService, swapiService);