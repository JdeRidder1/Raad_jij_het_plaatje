class Game {

    private readonly _canvas : Canvas;
    private readonly _player : Player;
    

    constructor() {
       const canvasElement : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
       this._canvas = new Canvas(canvasElement);
       canvasElement.width = window.innerWidth;
       canvasElement.height = window.innerHeight;;
       console.log("test")

    this.start_screen();
  }



    public start_screen()
    {
        //BeginScreen of the page
        console.log("startscreen")
        this._canvas.drawText("Raad het Plaatje", 50, 720, 40, `white`, `center`);
        this._canvas.drawImage("./assets/IMG/Beginpic.png", 500, 100);
        this._canvas.writebuttonToCanvas('Play', `PlayGame`, this.StartGame ,620, 600);
        
    }




    public Subject_screen(){

      this._canvas.clear();
      console.log("startscreen")
      this._canvas.drawText("Raad het hahahahahhPlaatje", 50, 720, 40, `white`, `center`);
      this._canvas.drawImage("./assets/IMG/HorseCartSquirrel.jpg", 620, 100);
      this._canvas.writebuttonToCanvas('Play', `PlayGame`, this.StartGame ,620, 600);

    }



    


    private StartGame = (): void => {
      // get the centerCoordinate
      const center = this._canvas.GetCenter();
      console.log("test111")
      this.Subject_screen();
  }





}




window.addEventListener('load', init);

function init(): void {
   const Quiz = new Game();
   //window.setInterval(Quiz.draw, 1000 / 10)
}
