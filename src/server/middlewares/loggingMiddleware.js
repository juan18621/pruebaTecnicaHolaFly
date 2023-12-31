const Log = require("../../app/Log/classes/log");
const logService = require("../../app/Log/services/logService");



const loggingMiddleware = (db) =>
   async (req, res, next) => {
        const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();
        const headers = JSON.stringify(req.headers);
        const originalUrl = req.originalUrl;
        // Persist this info on DB
        if(originalUrl && originalUrl[originalUrl.length - 1] && originalUrl[originalUrl.length - 1] === '/'){
            const log = new Log(originalUrl, headers, ip)
            await logService.createLog(log)
        }
        
        next();
    }

module.exports = loggingMiddleware;