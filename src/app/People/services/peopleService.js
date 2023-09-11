
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
            const characterDB = await this.databaseService.getById({id, table: this.dbTable});
            // if character not exit in database, it shows an error to search by name as the swapi end point can not search character by id
            if(!characterDB){
              throw (
                {   
                    code: 404,
                    error:"Star wars character not stored in database, please search by character name",
                    payload:{
                        id,
                        solution: 'send the character name to this endpoint /hfswapi/getPeopleByName/:character_name'
                    }
                })
            }
            const character = peopleFactory(characterDB)
            return character;
        } catch (error) {
            throw error
        }
    }
    
    async getCharacterByName(name){
        try {
            const characters = await this.getCharactersFromApi();
            const characterDB =  characters.find(characterAPI => characterAPI.name === name ) 
            if(!characterDB){
                throw ({
                    code: 404,
                    error:"Star wars character not stored in database, please search by character name",
                  })
              }
            const character = peopleFactory(characterDB)
            const planetName = await  this.getCharacterHomeWorldName(character.getHomeworlId())
            character.setHomeworldName(planetName)
            return character;
        } catch (error) {
            throw error
        }
    }


    async createCharacter(character){
        console.log(character)
        const characterDB = await this.databaseService.create({entity: character, table: this.dbTable});
        return characterDB
    }



    async getCharactersFromApi(){
        return await this.swapiService.getCharacters(this.swapiEntity)
    }


    async getCharacterHomeWorldName(planetId){
        return (await this.planetService.getPlanetById(planetId)).name;
    }
}

module.exports = new PeopleService(databaseService, swapiService, planetService);