const DatabaseService = require("./databaseService");

class SequelizeService extends DatabaseService{
    constructor(provider){
        super(provider);
    }


    async init(){
        await this.provider.initDB()
        await this.provider.populateDB()
    }

    async getAll({table}){
        try {
            const result = await this.provider[table].findAll({})
            return result;
        } catch (error) {
            throw new Error(error)
        }
       
    }
    async getById({id, table}){
        try {
            const result = await this.provider[table].findOne({
                where: {
                    id
                  }
            })
            return result?.dataValues;
        } catch (error) {
            throw new Error(error)
        }
       
    }

    async create({entity, table}){
        try {
            const result = await this.provider[table].create(entity)
            console.log(result)

            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = SequelizeService