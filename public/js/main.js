
import { loadLevel } from './loaders.js';
import { setupKeyboard} from './input.js'

import { createMario } from './entities.js';
import Timer from './Timer.js'
import { createCollisionLayer } from './layers.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


Promise.all([
    createMario(),
    loadLevel('1-1')
]).then(([mario, level]) => {
 
    mario.pos.set(64, 64);
    level.comp.layers.push(createCollisionLayer(level));
    level.entities.add(mario);


    const input = setupKeyboard(mario)
   
    input.listenTo(window);
 
    const timer = new Timer(1 / 60);

    timer.update = (deltaTime) => {
        level.update(deltaTime);
        mario.update(deltaTime);
        level.comp.draw(context);
    }
    timer.start();
})



