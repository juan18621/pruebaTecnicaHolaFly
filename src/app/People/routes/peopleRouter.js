
const validatorHandler = require('../../../server/middlewares/validatorHandler');
const peopleController = require('../controllers/peopleController');
const peopleSchema = require('../schemas/peopleSchema');

const applyPeopleEndPoints = (server, app) => {
    server.get('/hfswapi/getPeople', peopleController.getCharacters );
    server.get('/hfswapi/getPeople/:id', peopleController.getCharacterById );
    server.post('/hfswapi/people', validatorHandler(peopleSchema, 'body'), peopleController.createCharacter );
}


module.exports = applyPeopleEndPoints;