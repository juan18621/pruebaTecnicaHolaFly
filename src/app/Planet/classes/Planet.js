class Planet {
    name;
    gravity;
    constructor(planet){
       this.setData(planet)
    }

    setData(planetData){
        Object.keys(planetData).forEach(key=> {
            if(this.hasOwnProperty(key)){
                this[key] = planetData[key];
            }
        })
    }

    getName() {
        return this.name;
    }

    getGravity() {
        return this.gravity;
    }
    
}

module.exports = Planet