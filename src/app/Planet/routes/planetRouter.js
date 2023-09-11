
const validatorHandler = require('../../../server/middlewares/validatorHandler');
const planetController = require('../controllers/planetController');
const getCharacterWeigthSchema = require('../schemas/getCharacterWeigthSchema');
const planetSchema = require('../schemas/planetSchema');

const planetRouter = require('express').Router()



planetRouter.get('/hfswapi/getPlanets', planetController.getPlanets );
planetRouter.get('/hfswapi/getPlanet/:id', planetController.getPlanetById );
planetRouter.get('/hfswapi/getWeightOnPlanetRandom', validatorHandler(getCharacterWeigthSchema, 'query'), planetController.getWeightOnPlanetRandom );
planetRouter.post('/hfswapi/planet', validatorHandler(planetSchema, 'body') ,  planetController.createPlanet );



module.exports = planetRouter;