const fetch = require('node-fetch');


class HttpClientService{
    get(url){
        const options = {
            method: 'GET'
        }
        return fetch(url, options);
    }
}

module.exports = new HttpClientService()




