
const validatorHandler = require('../../../server/middlewares/validatorHandler');
const peopleController = require('../controllers/peopleController');
const peopleSchema = require('../schemas/peopleSchema');

const peopleRouter = require('express').Router()

peopleRouter.get('/hfswapi/getPeople', peopleController.getCharacters );
peopleRouter.get('/hfswapi/getPeople/:id', peopleController.getCharacterById );
peopleRouter.post('/hfswapi/people', validatorHandler(peopleSchema, 'body'), peopleController.createCharacter );



module.exports = peopleRouter;