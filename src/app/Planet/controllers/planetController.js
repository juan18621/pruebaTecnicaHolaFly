
const planetService = require('../services/planetService')

class PeopleController{

    planetService

    constructor(planetService){
        this.planetService = planetService;
    }

    getPlanets = async (req, res) => {
        try {
            const result = await this.planetService.getPlanets();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error)
        }
    }


    getPlanetById = async (req, res) => {
        const {id} = req.params;
        try {
            const planet = await this.planetService.getPlanetById(id);
            res.status(200).json(planet);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    createPlanet = async (req, res) => {
        const planetToSave = req.body;
        try {
            const planet = await this.planetService.createPlanet(planetToSave);
            res.status(200).json({
                planet,
                message: 'planet created'
            });
        } catch (error) {
            res.status(400).json(error)
        }
    }


    getWeightOnPlanetRandom = async (req, res) => {
        const {planetId, characterId} = req.query;
        try {
            const result = await this.planetService.calculateWeightOnPlanet(planetId, characterId);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error)
        }
    }
}

module.exports = new PeopleController(planetService);