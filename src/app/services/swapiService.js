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

    getCharacterById = async (id, format) => {
        const data = await this.httpClientService.get(`${this.base_url}/people/${id}${format ? '?format=wookiee':''}`)
        return data;
    }

     getPlanetById = async (planetId, wookieeFormat) => {
        return await this.httpClientService.get(`${this.base_url}/planets/${planetId}${wookieeFormat ? '?format=wookiee':''}`)
    }
}



module.exports = new SwapiService(httpClientService);