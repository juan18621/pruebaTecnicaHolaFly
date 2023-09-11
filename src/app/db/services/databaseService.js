class DatabaseService {
    provider
    constructor(provider) {
        if (this.constructor == DatabaseService) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.provider = provider;
    }

    async init(){
        throw new Error('To be implemented');
    }

    async getAll(){
        throw new Error('To be implemented');
    
    }
    async getCharacterById(){
        throw new Error('To be implemented');
    
    }
    async create(){
        throw new Error('To be implemented');
    
    }
}

module.exports = DatabaseService