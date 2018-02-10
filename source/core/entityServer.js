module.exports = class entityServer {
    constructor(config) {
        this.trees = [];
    }

    addEntity(type, entity) {
        if(!this[type]) return console.log(`${type} is not a valid entity type.`)
        this[type].push(entity)
    }

    removeEntity(type, entity) {
        if(!this[type]) return console.log(`${type} is not a valid entity type.`)
        this[type].splice(this[type].indexOf(entity));
    }
};
