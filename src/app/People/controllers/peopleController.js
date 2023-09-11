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
            const character = await this.peopleService.getCharacterById(id);
            res.json(character);
        } catch (error) {
            res.json(error)
        }
    }

    getCharacterByName = async (req, res) => {
        const {name} = req.params;
        try {
            const character = await this.peopleService.getCharacterByName(name);
            res.send({
                character,
                message: 'To register this person in the database please send the character attribute payload attribute to  ',
            });
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