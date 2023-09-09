
//1. In case you wan to use another database config just
// change the provider
const db = require('./providers/sqliteProvider');
const SequelizeService = require('./services/sequelizeService');
// 2. In case you want to change the database controller change the class

const databaseService = new SequelizeService(db)

module.exports = databaseService

