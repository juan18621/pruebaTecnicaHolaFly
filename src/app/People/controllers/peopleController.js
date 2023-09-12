
const peopleService = require('../services/peopleService')

class PeopleController{

    peopleService

    constructor(peopleService){
        this.peopleService = peopleService;
    }


    getCharacters = async (req, res) => {
        try {
            const result = await this.peopleService.getCharacters();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    getCharacterById = async (req, res) => {
        const {id} = req.params;
        const {format} = req.query
        try {
            const result = await this.peopleService.getCharacterById(id, format);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error)
        }
    }


    createCharacter = async (req, res) => {
        const characterToSave = req.body;
        try {
            const character = await this.peopleService.createCharacter(characterToSave);
            res.status(200).json({
                character,
                message: 'character created'
            });
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

module.exports = new PeopleController(peopleService);