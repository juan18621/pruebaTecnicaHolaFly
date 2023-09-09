const peopleService = require('../services/peopleService')

class PeopleController{

    peopleService

    constructor(peopleService){
        this.peopleService = peopleService;
    }


    getCharactherById = async (req, res) => {
        const {id} = req.params;
        try {
            const people = await this.peopleService.getCharacterById(id);
            res.send(people);
        } catch (error) {
            res.send(error.toString())
        }
    }

}

module.exports = new PeopleController(peopleService);