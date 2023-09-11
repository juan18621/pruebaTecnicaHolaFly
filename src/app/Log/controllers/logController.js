const logService = require("../services/logService");


class LogController{

    logsService

    constructor(logsService){
        this.logsService = logsService;
    }


    getLogs = async (req, res) => {
        try {
            const result = await this.logsService.getLogs();
            res.json(result);
        } catch (error) {
            res.status(400).json(error)
        }
    }

}

module.exports = new LogController(logService);