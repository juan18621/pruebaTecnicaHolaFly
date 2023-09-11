const fetch = require('node-fetch');

// this class avoids tight coupling with http libraries
class HttpClientService{
    async get(url){
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options);
        return response.json()
    }
}

module.exports = new HttpClientService()




