
const peopleController = require('../controllers/peopleController')

const applyPeopleEndPoints = (server, app) => {
    server.get('/hfswapi/getPeopleByName/:name', peopleController.getCharacterByName );
    server.get('/hfswapi/getPeople/:id', peopleController.getCharactherById );
    server.post('/hfswapi/people', peopleController.createCharacter );
}


module.exports = applyPeopleEndPoints;