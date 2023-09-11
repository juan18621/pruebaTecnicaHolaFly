const httpClientService = require('../../services/httpClientService')

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

    getCharacters = async (entity, logging = false) => {
        const data = await this.httpClientService.get(`${this.base_url}/${entity}`)
        if(logging){
            console.log(data);
        }
        return data.results;
    }
}



module.exports = new SwapiService(httpClientService);