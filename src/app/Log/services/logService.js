
const databaseService = require('../../db');


class LogService{
    databaseService;
    dbTable = 'logging';

    constructor(databaseService){
        this.databaseService = databaseService;
    }   

    async getLogs(){
        return await databaseService.getAll({table: 'logging'})
    }

    async createLog(log){

        await this.databaseService.create({entity: log, table: 'logging'})
    }

}


module.exports = new LogService(databaseService)