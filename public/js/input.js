import Keyboard from './KeyboardStates.js'
 

export const setupKeyboard = (entity) => {
    const input = new Keyboard();
    input.addMapping('Space', keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });
    input.addMapping('ArrowRight', keyState => {
        entity.go.dir = keyState;
    });
    input.addMapping('ArrowLeft', keyState => {
        entity.go.dir = -keyState;
    });
    return input;
}
