import { Entity } from './Entity.js';
import { loadMarioSprite } from './sprites.js';
import { Velocity } from './traits/Velocity.js';
import { Jump } from './traits/Jump.js';

export const createMario = () => {
    return loadMarioSprite().then(sprite => {
        const mario = new Entity();
        mario.addTrait(new Velocity());
        mario.addTrait(new Jump());

        mario.draw = (context) => {
            sprite.draw('idle', context, mario.pos.x, mario.pos.y);
        };

        return mario;
    });
  
}