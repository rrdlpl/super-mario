
import { loadLevel } from './loaders.js';
import { loadBackgroundSprites } from './sprites.js';
import Compositor from './Compositor.js';
import { createBackgroundLayer, createSpriteLayer } from './layers.js';
import { createMario } from './entities.js';
import Timer from './Timer.js'
import Keyboard from './KeyboardStates.js'
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


Promise.all([
    createMario(),
    loadBackgroundSprites(),
    loadLevel('1-1')
]).then(([mario, backgroundSprites, level]) => {
    const comp = new Compositor();
    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);
    const gravity = 2000;
    mario.pos.set(64, 180);

    const input = new Keyboard();
    const SPACE = 32;
    
    input.addMapping(SPACE, keyState => {
        if (keyState) {
            mario.jump.start();
        } else {
            mario.jump.cancel();
        }
        console.log(keyState);
    })
    input.listenTo(window);
    const spriteLayer = createSpriteLayer(mario);
    comp.layers.push(spriteLayer);

    const timer = new Timer(1 / 60);

    timer.update = (deltaTime) => {
        mario.update(deltaTime);
        comp.draw(context);
        mario.vel.y += gravity * deltaTime;
    }
    timer.start();
})



