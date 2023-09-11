class People {
    constructor(characterData) {
        if (this.constructor == People) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.setData(characterData)
    }

    setData(characterData){
        Object.keys(characterData).forEach(key=> {
            this[key] = characterData[key];
        })
    }

    getId() {
       return this.id;
    }

    getName() {
        return this.name;
    }

    getMass() {
        return this.mass;
    }

    getHeight() {
        return this.height;
    }

    getHomeworldName() {
        return this.homeworldName;
    }

    getHomeworlId() {
        return this.homeworlId;
    }

    getWeightOnPlanet(planetId){
        throw new Error('To be implemented');
    }
}


module.exports = People;