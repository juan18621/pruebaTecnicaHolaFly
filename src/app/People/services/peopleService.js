
const databaseProvider = require('../../db');
const swapiService = require('./swapiService');
const { peopleFactory } = require('..');

 
 class PeopleService{
    databaseService;
    dbTable = 'swPeople';
    swapiEntity = 'people'

    constructor(databaseService){
        this.databaseService = databaseService;
    }


    async getCharacterById(id){
        try {
            let character = await this.databaseService.getById({id, table: this.dbTable});
            if(!character){
              const characters = await swapiService.getCharacters(this.swapiEntity, true);
              //if not found in database search in swapi by name, because swapi do not provide ids
              const name = id;
              character = characters.find(characterDB => characterDB.name.toLowerCase() === name.toLowerCase());
              if(!character){
                throw new Error("Star wars character not stored in database, please search by character name")
              }
            }

            const characterFound = peopleFactory(character)
            return characterFound;
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = new PeopleService(databaseProvider);