const People = require('../classes/people');
const peopleService = require('../services/peopleService')

class PeopleController{

    peopleService

    constructor(peopleService){
        this.peopleService = peopleService;
    }


    getCharactherById = async (req, res) => {
        const {id} = req.params;
        try {
            const result = await this.peopleService.getCharacterById(id);
            res.json(result);
        } catch (error) {
            res.json(error)
        }
    }


    createCharacter = async (req, res) => {
        console.log(req, 'asdasd')
        const characterToSave = req.body;
        try {
            const character = await this.peopleService.createCharacter(characterToSave);
            res.json({
                character,
                message: 'character created'
            });
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new PeopleController(peopleService);