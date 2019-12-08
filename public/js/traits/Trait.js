// Caracteristica
export default class Trait {
    constructor(name) {
        this.NAME = name;
    }
    update() {
        console.warn('unhandled update call in trait');
    }
}