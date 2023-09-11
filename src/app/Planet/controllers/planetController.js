
const planetService = require('../services/planetService')

class PeopleController{

    planetService

    constructor(planetService){
        this.planetService = planetService;
    }


    getPlanetById = async (req, res) => {
        const {id} = req.params;
        console.log(id)
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
}

module.exports = new PeopleController(planetService);