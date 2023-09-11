const httpClientService = require('./httpClientService')

class SwapiService{
    
    base_url = process.env.SWAPI_BASE;
    httpClientService;

    constructor(httpClientService){
     this.httpClientService = httpClientService;
    }

    getWeightOnPlanet = (mass, gravity) => {
        return mass * gravity;
    }


    async getEndPoints(end){
        return await this.httpClientService.get(this.base_url)
    }

    getCharacters = async () => {
        const data = await this.httpClientService.get(`${this.base_url}/people`)
        return data.results;
    }

     getPlanetById = async (planetId) => {
        return await this.httpClientService.get(`${this.base_url}/planets/${planetId}`)
    }
}



module.exports = new SwapiService(httpClientService);