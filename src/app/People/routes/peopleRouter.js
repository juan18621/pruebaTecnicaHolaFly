
const peopleController = require('../controllers/peopleController')

const applyPeopleEndPoints = (server, app) => {
    server.get('/hfswapi/getPeople/:id', peopleController.getCharactherById );

}


module.exports = applyPeopleEndPoints;