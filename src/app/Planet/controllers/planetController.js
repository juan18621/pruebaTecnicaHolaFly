
const planetService = require('../services/planetService')

class PeopleController{

    planetService

    constructor(planetService){
        this.planetService = planetService;
    }


    getPlanetById = async (req, res) => {
        const {id} = req.params;
        try {
            const planet = await this.planetService.getPlanetById(id);
            res.json(planet);
        } catch (error) {
            res.json(error)
        }
    }

    createPlanet = async (req, res) => {
        const planetToSave = req.body;
        try {
            const planet = await this.planetService.createPlanet(planetToSave);
            res.json({
                planet,
                message: 'planet created'
            });
        } catch (error) {
            res.json(error)
        }
    }


    getWeightOnPlanetRandom = async (req, res) => {
        const {planetId, characterId} = req.query;
        try {
            const result = await this.planetService.calculateWeightOnPlanet(planetId, characterId);
            res.json(result);
        } catch (error) {
            res.json(error)
        }
    }
}

module.exports = new PeopleController(planetService);