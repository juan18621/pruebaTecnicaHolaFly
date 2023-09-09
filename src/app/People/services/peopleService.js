
const databaseProvider = require('../../db');
const { genericRequest } = require('../../swapiFunctions');
 
 class PeopleService{
    databaseService;
    dbTable = 'swPeople';
    endPoint

    constructor(databaseService){
        this.databaseService = databaseService;
    }


    async getCharacterById(id){
        let character = await this.databaseService.getById({id, table: this.dbTable});
        if(!character){
            genericRequest()
        }
        return character
    }
    
}

module.exports = new PeopleService(databaseProvider);