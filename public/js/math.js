
export class Matrix {
    constructor() {
        this.grid = [];
    }
    set(x, y, value) {
        if(!this.grid[x]) {
            this.grid[x] = []
        }
        this.grid[x][y] = value;
    }

    forEach(callback) {
        this.grid.forEach((column, x) => {
            column.forEach((value, y) => {
                callback(value, x, y)
            })
        })
    }

    get(x, y) {
        if(this.grid[x] && this.grid[x][y]) {
            return this.grid[x][y]
        }
        return undefined;
    }
}

window.Matrix = Matrix;
export class Vec2 {
    constructor(x, y) {
        this.set(x, y);
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}