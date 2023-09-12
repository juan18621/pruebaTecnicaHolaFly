const People = require('./people')


class WookiPeople extends People {
    constructor(characterData){
        super(characterData);
        this.setData(characterData)
    }

    setData(characterData){
        Object.keys(characterData).forEach(key=> {
                this[key] = characterData[key];
        })
    }
}

module.exports = WookiPeople;