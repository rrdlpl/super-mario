import { Entity } from './Entity.js';
import { loadMarioSprite } from './sprites.js';

export const createMario = () => {
    return loadMarioSprite().then(sprite => {
        const mario = new Entity();
  
        mario.draw = (context) => {
            sprite.draw('idle', context, mario.pos.x, mario.pos.y);
        };
        mario.update = (deltaTime) => {
            mario.pos.x += mario.vel.x * deltaTime;
            mario.pos.y += mario.vel.y * deltaTime;
        };
        return mario;
    });
  
}