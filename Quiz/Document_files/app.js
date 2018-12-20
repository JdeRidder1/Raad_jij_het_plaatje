class Canvas {
    constructor(aCanvas) {
        this.d_canvas = aCanvas;
        this.d_canvas.width = window.innerWidth;
        this.d_canvas.height = window.innerHeight;
        this.d_context = this.d_canvas.getContext('2d');
        console.log("canvas constructor");
    }
    drawText(aText, aFontSize, aXpos, aYpos, aColor = "white", aAlignment = "center") {
        this.d_context.font = `${aFontSize}px Minecraft`;
        this.d_context.fillStyle = aColor;
        this.d_context.textAlign = aAlignment;
        this.d_context.fillText(aText, aXpos, aYpos);
    }
    drawImage(aSrc, aXpos, aYpos, size) {
        let image = new Image();
        image.addEventListener('load', () => {
            this.d_context.drawImage(image, aXpos, aYpos);
        });
        image.src = aSrc;
    }
    Clear() {
        this.d_context.clearRect(0, 0, this.d_canvas.width, this.d_canvas.height);
    }
    GetCenter() {
        return { X: this.d_canvas.width / 2, Y: this.d_canvas.height / 2 };
    }
}
class Entiteit {
    constructor(aCanvas, imageSource, xCoor, yCoor, Size) {
        this._canvas = new Canvas(aCanvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._Size = Size;
    }
    draw() {
        this._canvas.drawImage(this._imageSrc, this._xPos, this._yPos, this._Size);
    }
}
class Game {
    constructor() {
        const canvasElement = document.getElementById('canvas');
        this.d_canvas = new Canvas(canvasElement);
        this._Player = new Player(canvasElement, `./assets/Hammer.png`, 200, 50, 20);
        let zombie = new Array();
        {
            zombie[0] = new Zombie(canvasElement, `./assets/zombie.png`, this.randomNumber(100, 500), this.randomNumber(100, 500), 20);
            zombie[1] = new Zombie(canvasElement, `./assets/zombie.png`, this.randomNumber(100, 500), this.randomNumber(100, 500), 20);
            zombie[2] = new Zombie(canvasElement, `./assets/zombie.png`, this.randomNumber(100, 500), this.randomNumber(100, 500), 20);
            zombie[3] = new Zombie(canvasElement, `./assets/zombie.png`, this.randomNumber(100, 500), this.randomNumber(100, 500), 20);
        }
        for (let i = 0; i < zombie.length; i++) {
            this._Zombie = zombie[0];
            console.log(zombie);
        }
        this.draw;
    }
    draw() {
        this._Player.draw();
        this._Zombie.draw();
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
window.addEventListener('load', init);
function init() {
    const ZombieGame = new Game();
}
class Player extends Entiteit {
    constructor(aCanvas, imageSource, xCoor, yCoor, Size) {
        super(aCanvas, imageSource, xCoor, yCoor, Size);
    }
}
class Zombie extends Entiteit {
    constructor(aCanvas, imageSource, xCoor, yCoor, Size) {
        super(aCanvas, imageSource, xCoor, yCoor, Size);
    }
}
//# sourceMappingURL=app.js.map