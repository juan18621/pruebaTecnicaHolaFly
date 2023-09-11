
const peopleController = require('../controllers/peopleController')

const applyPeopleEndPoints = (server, app) => {
    server.get('/hfswapi/getPeople', peopleController.getCharacters );
    server.get('/hfswapi/getPeople/:id', peopleController.getCharacterById );
    server.post('/hfswapi/people', peopleController.createCharacter );
}


module.exports = applyPeopleEndPoints;