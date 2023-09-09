const httpClientService = require('../services/httpClientService')

class SwapiService{
    
    base_url = process.env.SWAPI_BASE;
    httpClientService;

    constructor(httpClientService){
     this.httpClientService = httpClientService;
    }

    getWeightOnPlanet = (mass, gravity) => {
        return mass * gravity;
    }

    getSwapiData = async (entity, logging = false) => {
        const endpoint = `${this.base_url}/${entity}`;
        const response = await this.httpClientService.get(endpoint)
        const data = await response.json();
        if(logging){
            console.log(data);
        }
        return data;
    }
}



module.exports = new SwapiService(httpClientService);