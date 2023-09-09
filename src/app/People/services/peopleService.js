
const databaseProvider = require('../../db')
 
 class PeopleService{
    databaseService;
    dbTable = 'swPeople';

    constructor(databaseService){
        this.databaseService = databaseService;
    }


    async getCharacterById(id){
        const character = await this.databaseService.getById({id, table: this.dbTable});
        if(!character) throw new Error('character not exist')
        return character
    }
    
}

module.exports = new PeopleService(databaseProvider);