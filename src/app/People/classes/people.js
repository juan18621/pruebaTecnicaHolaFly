class People {
    name
    mass
    height
    homeworld_name
    homeworld_id
    constructor(characterData) {
        if (this.constructor == People) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.setData(characterData)
    }

    setData(characterData){
        Object.keys(characterData).forEach(key=> {
            if(this.hasOwnProperty(key)){
                this[key] = characterData[key];
            }
            if(key === 'homeworld'){
                this.setHomeworldId(characterData[key])
            }
        })
    }


    setHomeworldId(homeWorldUrl){
        const urlParams = homeWorldUrl.match(/.*\/(.*)\/(.*)$/);
        this.homeworld_id = `/planets/${urlParams[urlParams.length-2]}`
        console.log(this.homeworld_id)
    }
    setHomeworldName(planetName){
        this.homeworld_name = planetName;
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
        return this.homeworld_name;
    }

    getHomeworlId() {
        return this.homeworld_id;
    }

    getWeightOnPlanet(planetId){
        throw new Error('To be implemented');
    }
}


module.exports = People;