abstract class Entiteit {

    protected _xPos: number;
    protected _yPos: number;
    protected readonly _height: number;
    protected readonly _width: number;
    private readonly _imageSrc: string;
    private readonly _canvas: Canvas;

    public constructor(
      aCanvas: HTMLCanvasElement,
      imageSource: string,
      xCoor: number,
      yCoor: number,
      width: number,
      height: number
      ){

        this._canvas = new Canvas(aCanvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;

        
     }



     public draw(){
        this._canvas.drawImage(this._imageSrc, this._xPos, this._yPos);
     }

     public getX(): number
     {
         return this._xPos;
     }
 
     public getY(): number
     {
         return this._yPos;
     }
     public getWidth(): number
     {
         return this._width;
     }
 
     public getHeight(): number
     {
         return this._height;
     }
}


