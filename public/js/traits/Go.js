import Trait from "./Trait.js";
export class Go extends Trait {
    constructor() {
        super('go');
        this.dir = 0;
        this.speed = 6000;
    }

    start() {
        this.engageTime = this.duration;
    }

    cancel() {
        this.engageTime = 0;
    }
    update(entity, deltaTime) {
        entity.vel.x = this.speed * this.dir * deltaTime;

    }
}