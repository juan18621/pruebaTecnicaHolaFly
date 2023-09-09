const DatabaseService = require("./databaseService");

class SequelizeService extends DatabaseService{
    constructor(provider){
        super(provider);
    }


    async init(){
        await this.provider.initDB()
        await this.provider.populateDB()
    }

    async getById({id, table}){
        try {
            const character = await this.provider[table].findOne({
                where: {
                    id
                  }
            })
            return character?.dataValues;
        } catch (error) {
            throw new Error(error)
        }
       
    }
}

module.exports = SequelizeService