
const peopleService = require('../services/peopleService')

class PeopleController{

    peopleService

    constructor(peopleService){
        this.peopleService = peopleService;
    }


    getCharacters = async (req, res) => {
        try {
            const result = await this.peopleService.getCharacters();
            res.json(result);
        } catch (error) {
            res.json(error)
        }
    }

    getCharacterById = async (req, res) => {
        const {id} = req.params;
        try {
            const result = await this.peopleService.getCharacterById(id);
            res.json(result);
        } catch (error) {
            res.json(error)
        }
    }


    createCharacter = async (req, res) => {
        const characterToSave = req.body;
        console.log(characterToSave,'ENNNTUUT')
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