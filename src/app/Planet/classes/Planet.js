class Planet {
    name;
    gravity;
    constructor(planet, wookieeFormat){
       this.setData(planet, wookieeFormat)
    }

    setData(planetData, wookieFormat){
        Object.keys(planetData).forEach(key=> {
            if(!wookieFormat){
                if(this.hasOwnProperty(key)){
                    this[key] = planetData[key];
                }
            }else{
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