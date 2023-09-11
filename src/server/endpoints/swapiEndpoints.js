const { db } = require("../../app");
const logRouter = require("../../app/Log/routes/logRouter");
const applyLogEndPoints = require("../../app/Log/routes/logRouter");
const peopleRouter = require("../../app/People/routes/peopleRouter");
const applyPeopleEndPoints = require("../../app/People/routes/peopleRouter");
const planetRouter = require("../../app/Planet/routes/planetRouter");
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
    
    server.use(peopleRouter)

    server.use(planetRouter);

    server.use(logRouter)

}

module.exports = applySwapiEndpoints;