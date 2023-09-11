const httpClientService = require('./httpClientService')

class SwapiService{
    
    base_url = 'https://swapi.dev/api/';
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

    getCharacterById = async (id) => {
        const data = await this.httpClientService.get(`${this.base_url}/people/${id}`)
        return data;
    }

     getPlanetById = async (planetId) => {
        return await this.httpClientService.get(`${this.base_url}/planets/${planetId}`)
    }
}



module.exports = new SwapiService(httpClientService);