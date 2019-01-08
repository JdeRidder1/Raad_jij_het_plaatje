class Canvas {
    constructor(canvas) {
        this.d_clickCommands = new Map();
        this.d_canvas = canvas;
        this.d_context = this.d_canvas.getContext('2d');
        console.log('in canvas constructor');
        document.addEventListener('click', (event) => {
            this.OnClick(event);
        });
    }
    OnClick(Event) {
        let X = Event.x;
        let Y = Event.y;
        this.d_clickCommands.forEach((value, key) => {
            value.ExecuteIfInArea(X, Y);
        });
    }
    clear() {
        this.d_context.clearRect(0, 0, this.d_canvas.width, this.d_canvas.height);
    }
    GetCenter() {
        return { X: this.GetWidth() / 2, Y: this.GetHeight() / 2 };
    }
    GetHeight() {
        return this.d_canvas.height;
    }
    GetWidth() {
        return this.d_canvas.width;
    }
    UnregisterClickListener(fnName) {
        this.d_clickCommands.delete(fnName);
    }
    drawText(aText, aFontSize, aXpos, aYpos, aColor = "white", aAlignment = "center") {
        this.d_context.font = `${aFontSize}px Arial`;
        this.d_context.fillStyle = aColor;
        this.d_context.textAlign = aAlignment;
        this.d_context.fillText(aText, aXpos, aYpos);
    }
    drawImage(aSrc, aXpos, aYpos) {
        let image = new Image();
        image.addEventListener('load', () => {
            this.d_context.drawImage(image, aXpos, aYpos);
        });
        image.src = aSrc;
    }
    writebuttonToCanvas(aCaption, fnName, fn, aXpos = -1, aYpos = -1) {
        let buttonImage = new Image();
        buttonImage.src = "./assets/IMG/buttonBlue.png";
        buttonImage.addEventListener('load', () => {
            let dx = aXpos;
            let dy = aYpos;
            if (dx < 0)
                dx = (this.GetWidth() - buttonImage.width) / 2;
            if (dy < 0)
                dy = this.GetHeight() / 2 + buttonImage.height;
            let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2);
            let fontY = dy + (buttonImage.height - 12);
            this.d_context.drawImage(buttonImage, dx, dy);
            this.drawText(aCaption, 20, fontX, fontY, '#000');
            if (fn != null) {
                console.log("zover kom ik ");
                this.d_clickCommands.set(fnName, new ButtonAction(dx, dy, buttonImage.height, buttonImage.width, fn));
                console.log(this.d_clickCommands);
            }
        });
    }
}
class Entiteit {
    constructor(aCanvas, imageSource, xCoor, yCoor, width, height) {
        this._canvas = new Canvas(aCanvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
    }
    draw() {
        this._canvas.drawImage(this._imageSrc, this._xPos, this._yPos);
    }
    getX() {
        return this._xPos;
    }
    getY() {
        return this._yPos;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
}
class Game {
    constructor() {
        this.StartGame = () => {
            const center = this._canvas.GetCenter();
            console.log("test111");
            this.Subject_screen();
        };
        const canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
        ;
        console.log("test");
        this.start_screen();
    }
    start_screen() {
        console.log("startscreen");
        this._canvas.drawText("Raad het Plaatje", 50, 720, 40, `white`, `center`);
        this._canvas.drawImage("./assets/IMG/Beginpic.png", 500, 100);
        this._canvas.writebuttonToCanvas('Play', `PlayGame`, this.StartGame, 620, 600);
    }
    Subject_screen() {
        this._canvas.clear();
        console.log("startscreen");
        this._canvas.drawText("Raad het hahahahahhPlaatje", 50, 720, 40, `white`, `center`);
        this._canvas.drawImage("./assets/IMG/HorseCartSquirrel.jpg", 620, 100);
        this._canvas.writebuttonToCanvas('Play', `PlayGame`, this.StartGame, 620, 600);
    }
}
window.addEventListener('load', init);
function init() {
    const Quiz = new Game();
}
class Player extends Entiteit {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        super(canvas, imageSource, xCoor, yCoor, width, height);
        this.player = "Player1";
        this.score = 400;
        this.lives = 3;
    }
}
class StartScreen {
    constructor() {
    }
}
class SubjectScreen {
    constructor() {
        this.score = 400;
    }
}
class ButtonAction {
    constructor(x, y, h, w, fn) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.fn = fn;
    }
    ExecuteIfInArea(x, y) {
        if (x > this.x && x < this.x + this.w &&
            y > this.y && y < this.y + this.h) {
            this.fn();
        }
    }
}
//# sourceMappingURL=app.js.map