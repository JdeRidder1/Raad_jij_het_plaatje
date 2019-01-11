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
    drawBackground(aXpos, aYpos) {
        let image = document.createElement("img");
        image.src = "./assets/IMG/White.png";
        image.setAttribute("Background", "img");
        image.style.margin = `1000px`;
        image.addEventListener('load', () => {
            this.d_context.drawImage(image, aXpos, aYpos);
        });
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
                this.d_clickCommands.set(fnName, new ButtonAction(dx, dy, buttonImage.height, buttonImage.width, fn));
                console.log(this.d_clickCommands);
            }
        });
    }
    WriteSubjectbutton(aCaption, fnName, fn, aXpos = -1, aYpos = -1) {
        let buttonImage = new Image();
        buttonImage.src = "./assets/IMG/buttonsubject.png";
        buttonImage.addEventListener('load', () => {
            let dx = aXpos;
            let dy = aYpos;
            if (dx < 0)
                dx = (this.GetWidth() - buttonImage.width) / 2;
            if (dy < 0)
                dy = this.GetHeight() / 2 + buttonImage.height;
            let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2);
            let fontY = dy + (buttonImage.height - 25);
            this.d_context.drawImage(buttonImage, dx, dy);
            this.drawText(aCaption, 20, fontX, fontY, '#000');
            if (fn != null) {
                this.d_clickCommands.set(fnName, new ButtonAction(dx, dy, buttonImage.height, buttonImage.width, fn));
                console.log(this.d_clickCommands);
            }
        });
    }
    drawImageLives(aXpos, aYpos) {
        let aSrc = "./assets/IMG/LifeImage/star_gold.png";
        let image = new Image();
        image.addEventListener('load', () => {
            this.d_context.drawImage(image, aXpos, aYpos);
        });
        image.src = aSrc;
    }
    WriteAnswerbutton(src, fnName, fn, aXpos = -1, aYpos = -1) {
        let buttonImage = new Image();
        buttonImage.src = src;
        buttonImage.addEventListener('load', () => {
            let dx = aXpos;
            let dy = aYpos;
            this.d_context.drawImage(buttonImage, dx, dy);
            if (fn != null) {
                this.d_clickCommands.set(fnName, new ButtonAction(dx, dy, buttonImage.height, buttonImage.width, fn));
                console.log(this.d_clickCommands);
            }
        });
    }
    drawImageQuiz(aSrc, aXpos, aYpos) {
        let image = new Image();
        image.addEventListener('load', () => {
            let dw = 400;
            let dh = 400;
            let dx = aXpos;
            let dy = aYpos;
            let radius = 10;
            this.d_context.beginPath();
            this.d_context.moveTo(dx + radius, dy);
            this.d_context.lineTo(dx + dw - radius, dy);
            this.d_context.quadraticCurveTo(dx + dw, dy, dx + dw, dy + radius);
            this.d_context.lineTo(dx + dw, dy + dh - radius);
            this.d_context.quadraticCurveTo(dx + dw, dy + dh, dx + dw - radius, dy + dh);
            this.d_context.lineTo(dx + radius, dy + dh);
            this.d_context.quadraticCurveTo(dx, dy + dh, dx, dy + dh - radius);
            this.d_context.lineTo(dx, dy + radius);
            this.d_context.quadraticCurveTo(dx, dy, dx + radius, dy);
            this.d_context.closePath();
            this.d_context.clip();
            this.d_context.drawImage(image, aXpos, aYpos, dw, dh);
        });
        image.src = aSrc;
    }
}
class Game {
    constructor() {
        this.Art = () => {
            this._canvas.clear();
            this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
            this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
            this._canvas.drawText("Welkom bij het onderwerp Kunst! ", 40, 750, 100, "white", "center");
            this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
            this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
            this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
            console.log("art");
            this._Quiz = new Quiz();
            var ArrayScr = this._Quiz.GetArtQuiz()[0];
            console.log(this._Quiz.GetArtQuiz()[0]);
            this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200);
            this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200);
            this._canvas.drawImageQuiz(ArrayScr, 550, 250);
        };
        this.Landscape = () => {
            this._canvas.clear();
            this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
            this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
            this._canvas.drawText("Welkom bij het onderwerp Landschap! ", 40, 750, 100, "white", "center");
            this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
            this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
            this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
            console.log("landscape");
            this._Quiz = new Quiz();
            var ArrayScr = this._Quiz.GetLandscapeQuiz()[0];
            console.log(this._Quiz.GetLandscapeQuiz()[0]);
            this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200);
            this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200);
            this._canvas.drawImageQuiz(ArrayScr, 550, 250);
        };
        this.City = () => {
            this._canvas.clear();
            this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
            this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
            this._canvas.drawText("Welkom bij het onderwerp Steden! ", 40, 750, 100, "white", "center");
            this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
            this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
            this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
            console.log("city");
            this._Quiz = new Quiz();
            var ArrayScr = this._Quiz.GetCityQuiz()[0];
            console.log(this._Quiz.GetCityQuiz()[0]);
            this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200);
            this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200);
            this._canvas.drawImageQuiz(ArrayScr, 550, 250);
        };
        this.Personages = () => {
            this._canvas.clear();
            this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
            this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
            this._canvas.drawText("Welkom bij het onderwerp Personages! ", 40, 750, 100, "white", "center");
            this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
            this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
            this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
            console.log("personages");
            this._Quiz = new Quiz();
            var ArrayScr = this._Quiz.GetPersonagesQuiz()[0];
            console.log(this._Quiz.GetPersonagesQuiz()[0]);
            this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200);
            this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200);
            this._canvas.drawImageQuiz(ArrayScr, 550, 250);
        };
        this.CheckrightAnswer = () => {
            if (this._Quiz.GetCityQuiz()[1] == "Real") {
                alert("Goed geantwoord!");
                this._person.goodAnswer();
            }
            else {
                alert("Helaas, fout geantwoord!");
                this._person.wrongAnswer();
            }
            console.log(this._person.getscore());
            for (let j = 0; 0 > 2;) {
                this.HighScore();
                j++;
            }
            this.City();
        };
        this.CheckwrongAnswer = () => {
            if (this._Quiz.GetCityQuiz()[1] == "Fake") {
                alert("Goed geantwoord!");
                this._person.goodAnswer();
            }
            else {
                alert("Helaas, fout geantwoord!");
                this._person.wrongAnswer();
            }
            console.log(this._person.getlives());
            for (let j = 0; 0 > 2;) {
                this.HighScore();
                j++;
            }
            this.City();
        };
        this.HighScore = () => {
            this._canvas.clear();
            this._canvas.drawText("H I G H S C O R E ", 100, 750, 100, "white", "center");
            this._canvas.drawText(" NAAM ", 30, 400, 200, "white", "center");
            this._canvas.drawText(" LEVENS ", 30, 700, 200, "white", "center");
            this._canvas.drawText(" SCORE ", 30, 1000, 200, "white", "center");
            this._canvas.drawImage("./assets/IMG/Border.png", 0, 0);
            this._canvas.drawText(" 1.   " + this._person.getName(), 20, 400, 300, "white", "center");
            this._canvas.drawText(" 2.   " + this._person.setName(), 20, 400, 400, "white", "center");
            this._canvas.drawText(" 3.   " + this._person.setName(), 20, 400, 500, "white", "center");
            if (this._person.getlives() == 3) {
                this._canvas.drawImageLives(650, 270);
                this._canvas.drawImageLives(680, 270);
                this._canvas.drawImageLives(710, 270);
            }
            else if (this._person.getlives() == 2) {
                this._canvas.drawImageLives(650, 270);
                this._canvas.drawImageLives(680, 270);
            }
            else if (this._person.getlives() == 1) {
                this._canvas.drawImageLives(650, 270);
            }
            else {
                this._canvas.drawText(" YOU ARE DEAD  ", 30, 650, 270, "white", "center");
            }
            this._canvas.drawText(" " + this._person.getscore(), 40, 1000, 300, "white", "center");
            this._canvas.drawText(" " + this._person.setScore(), 40, 1000, 400, "white", "center");
            this._canvas.drawText(" " + this._person.setScore(), 40, 1000, 500, "white", "center");
        };
        const canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
        console.log("Game Constructor");
        let txt;
        const person = prompt("Voer uw naam in!");
        if (person == null || person == "") {
            txt = "Vul gegevens in!";
            location.reload();
        }
        else {
            this._person = new Player(person);
            this._canvas.drawText("Welkom " + person + "!", +80, 750, 100, "white", "center");
            this._canvas.drawText("Kies het onderwerp uit dat jij wilt spelen!", 30, 750, 200, "white", "center");
            this._canvas.drawText("Let wel op " + person + ", Je hebt per ronde maar " + this._person.getlives() + " levens!", 20, 750, 230, "white", "center");
            this._canvas.drawImage("./assets/IMG/fake.png", 650, 320);
        }
        this._canvas.WriteSubjectbutton('Personages', `Personages`, this.HighScore, 80, 700);
        this._canvas.WriteSubjectbutton('Landschap', `Landschap`, this.Landscape, 420, 700);
        this._canvas.WriteSubjectbutton('Steden', `Steden`, this.City, 740, 700);
        this._canvas.WriteSubjectbutton('Kunst', `Art`, this.Art, 1080, 700);
    }
    loop() {
    }
}
window.addEventListener('load', init);
function init() {
    const Quiz = new Game();
}
class MathHelper {
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class Player {
    constructor(naam) {
        this.Name = naam;
        this.score = 400;
        this.lives = 4;
    }
    getName() {
        return this.Name;
    }
    getscore() {
        return this.score;
    }
    getlives() {
        return this.lives;
    }
    setName() {
        this.Name = "DEFAULT";
        return this.Name;
    }
    setScore() {
        this.score = 0;
        return this.score;
    }
    wrongAnswer() {
        return this.lives = this.lives - 1;
    }
    goodAnswer() {
        return this.score = this.score + 400;
    }
}
class Quiz {
    constructor() {
    }
    GetCityQuiz() {
        this.City = [{
                index: 0,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/1_Fake.jpg',
            }, {
                index: 1,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/2_Fake.jpg',
            }, {
                index: 2,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/3_Fake.jpg',
            }, {
                index: 3,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/4_Fake.jpg',
            }, {
                index: 4,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/5_Fake.jpg',
            }, {
                index: 5,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/6_Fake.jpg',
            }, {
                index: 6,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/1_Real.jpg',
            }, {
                index: 7,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/2_Real.jpg',
            }, {
                index: 8,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/3_Real.jpg',
            }, {
                index: 9,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/4_Real.jpg',
            }, {
                index: 10,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/5_Real.jpg',
            }, {
                index: 11,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/6_Real.jpg',
            }, {
                index: 12,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/7_Real.jpg',
            }
        ];
        let i = this.randomNumber(0, 12);
        console.log(i);
        return [this.City[i].PictureSrc, this.City[i].Title];
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    GetArtQuiz() {
        this.Art = [{
                index: 0,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Art/1_Fake.jpg',
            }, {
                index: 1,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Art/2_Fake.jpg',
            }, {
                index: 2,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Art/3_Fake.jpg',
            }, {
                index: 3,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Art/4_Fake.jpg',
            }, {
                index: 4,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Art/5_Fake.jpg',
            }, {
                index: 5,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Art/1_Real.jpg',
            }, {
                index: 6,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Art/2_Real.jpg',
            }, {
                index: 7,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Art/3_Real.jpg',
            }, {
                index: 8,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Art/4_Real.jpg',
            }, {
                index: 9,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Art/5_Real.jpg',
            }
        ];
        let i = this.randomNumber(0, 9);
        console.log(i);
        return [this.Art[i].PictureSrc, this.Art[i].Title];
    }
    GetLandscapeQuiz() {
        this.Landscape = [{
                index: 0,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/1_Fake.jpg',
            }, {
                index: 1,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/2_Fake.jpg',
            }, {
                index: 2,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/3_FAKE.jpg',
            }, {
                index: 3,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/4_Fake.jpg',
            }, {
                index: 4,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/5_FAKE.jpg',
            }, {
                index: 5,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/1_Real.jpg',
            }, {
                index: 6,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/2_Real.jpg',
            }, {
                index: 7,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/3_Real.jpg',
            }, {
                index: 8,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/4_Real.jpg',
            }, {
                index: 9,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Landscape/5_Real.jpg',
            }
        ];
        let i = this.randomNumber(0, 12);
        console.log(i);
        return [this.Landscape[i].PictureSrc, this.Landscape[i].Title];
    }
    GetPersonagesQuiz() {
        this.Personages = [{
                index: 0,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/1_Fake.jpg',
            }, {
                index: 1,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/2_Fake.jpg',
            }, {
                index: 2,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/3_Fake.jpg',
            }, {
                index: 3,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/4_Fake.jpg',
            }, {
                index: 4,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/5_Fake.jpg',
            }, {
                index: 5,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/6_Fake.jpg',
            }, {
                index: 6,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/7_Fake.jpg',
            }, {
                index: 7,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/8_Fake.jpg',
            }, {
                index: 8,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/9_Fake.jpg',
            }, {
                index: 9,
                Title: "Fake",
                PictureSrc: './assets/IMG/QuizPictures/Personages/10_Fake.jpg',
            }, {
                index: 10,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/1_Real.jpg',
            }, {
                index: 11,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/2_Real.jpg',
            }, {
                index: 12,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/3_Real.jpg',
            }, {
                index: 13,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/4_Real.jpg',
            }, {
                index: 14,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/5_Real.jpg',
            }, {
                index: 15,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/6_Real.jpg',
            }, {
                index: 16,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/7_Real.jpg',
            }, {
                index: 17,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/8_Real.jpg',
            }, {
                index: 18,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/9_Real.jpg',
            }, {
                index: 19,
                Title: "Real",
                PictureSrc: './assets/IMG/QuizPictures/Personages/10_Real.jpg',
            }
        ];
        let i = this.randomNumber(0, 12);
        console.log(i);
        return [this.Personages[i].PictureSrc, this.Personages[i].Title];
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