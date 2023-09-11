const logController = require("../controllers/logController");


const applyLogEndPoints = (server, app) => {
    server.get('/hfswapi/getLogs', logController.getLogs );
}


module.exports = applyLogEndPoints;