const { db } = require("../../app");
const applyLogEndPoints = require("../../app/Log/routes/logRouter");
const applyPeopleEndPoints = require("../../app/People/routes/peopleRouter");
const applyPlanetEndPoints = require("../../app/Planet/routes/planetRouter");

const _isWookieeFormat = (req) => {
    if(req.query.format && req.query.format == 'wookiee'){
        return true;
    }
    return false;
}


const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiService.getEndPoints('', true);
        res.send(data);
    });

    applyPeopleEndPoints(server, app);

    applyPlanetEndPoints(server, app);

    applyLogEndPoints(server, app);

}

module.exports = applySwapiEndpoints;