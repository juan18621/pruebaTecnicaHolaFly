const fetch = require('node-fetch');

const getWeightOnPlanet = (mass, gravity) => {
    return mass * gravity;
}

const base_url = process.env.SWAPI_BASE;

const swapiRequest = async (entity, method, body, logging = false) => {
    let options = {
        method: method
    }
    if(body){
        options.body = body;
    }
    const response = await fetch(`${base_url}/${entity}`, options);
    const data = await response.json();
    if(logging){
        console.log(data);
    }
    return data;
}

module.exports = {
    getWeightOnPlanet,
    swapiRequest
}