
const databaseProvider = require('../../db');
const { swapiRequest } = require('../../API/swapiService');

 
 class PeopleService{
    databaseService;
    dbTable = 'swPeople';
    swapiEntity = 'people'

    constructor(databaseService){
        this.databaseService = databaseService;
    }


    async getCharacterById(id){
        let character = await this.databaseService.getById({id, table: this.dbTable});
        if(!character){
            swapiRequest()
        }
        return character
    }
    
}

module.exports = new PeopleService(databaseProvider);