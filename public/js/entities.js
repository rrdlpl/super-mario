import { Entity } from './Entity.js';
import { loadMarioSprite } from './sprites.js';
import { Velocity } from './traits/Velocity.js';
import { Jump } from './traits/Jump.js';
import { Go } from './traits/Go.js';

export const createMario = () => {
    return loadMarioSprite().then(sprite => {
        const mario = new Entity();
        mario.addTrait(new Go());
        mario.addTrait(new Jump());
        //mario.addTrait(new Velocity());
        mario.size.set(14, 16);


        mario.draw = (context) => {
            sprite.draw('idle', context, mario.pos.x, mario.pos.y);
        };

        return mario;
    });
  
}