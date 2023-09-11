const Log = require("../../app/Log/classes/log");
const logService = require("../../app/Log/services/logService");



const loggingMiddleware = (db) =>
   async (req, res, next) => {
        const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        const headers = JSON.stringify(req.headers);
        const originalUrl = req.originalUrl;
        // Persist this info on DB
        const log = new Log(originalUrl, headers, ip)

        console.log(log)

        await logService.createLog({entity: log, table: 'logging'})
        
        next();
    }

module.exports = loggingMiddleware;