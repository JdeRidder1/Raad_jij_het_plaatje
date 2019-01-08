class Canvas {

    private readonly d_canvas: HTMLCanvasElement;
    private readonly d_context: CanvasRenderingContext2D;

    private d_clickCommands: Map<string, ButtonAction> = new Map<string, ButtonAction>();
// 
 //   private d_currentScreen: ViewBase;  
//

    constructor(canvas:HTMLCanvasElement) {
        this.d_canvas = canvas;
        this.d_context = this.d_canvas.getContext('2d');
        
        
        console.log('in canvas constructor');

        document.addEventListener('click', (event: any) => {
            this.OnClick(event);
            
        });
    }


    private OnClick(Event: any) {
        let X = Event.x;
        let Y = Event.y;

        this.d_clickCommands.forEach((value: ButtonAction, key: string) => {
            value.ExecuteIfInArea(X, Y);
        });
    }


    public clear(): void {
        // clear the screen
        this.d_context.clearRect(0, 0, this.d_canvas.width, this.d_canvas.height);
    }


    public GetCenter(): { X: number, Y: number } {
        // return the center as a valid return
        return {X: this.GetWidth() / 2, Y: this.GetHeight() / 2};
    }

    
    public GetHeight(): number {
        // return the height of the canvas
        return this.d_canvas.height;
    }

    
    public GetWidth(): number {
        // return the width of the canvas
        return this.d_canvas.width;
    }




    public UnregisterClickListener(fnName: string): void {
        this.d_clickCommands.delete(fnName);
    }


    public drawText(aText: string,
        aFontSize: number,
        aXpos: number,
        aYpos: number,
        aColor: string = "white",
        aAlignment: CanvasTextAlign = "center") {

        this.d_context.font = `${aFontSize}px Arial`;
        this.d_context.fillStyle = aColor;
        this.d_context.textAlign = aAlignment;
        this.d_context.fillText(aText, aXpos, aYpos);
    }

 
    public drawImage(aSrc: string,
        aXpos: number,
        aYpos: number) {

        let image = new Image();
        // add the listener so the waiting will not affect the change
        image.addEventListener('load', () => {
            //this.d_context.clip();
            this.d_context.drawImage(image, aXpos, aYpos);
        });

        // load the source in the image.
        image.src = aSrc;
    }


        public writebuttonToCanvas(aCaption: string, fnName: string, fn: () => void, aXpos: number = -1, aYpos: number = -1) {
        let buttonImage = new Image();
        buttonImage.src = "./assets/IMG/buttonBlue.png";
        // Make sure the image is loaded first otherwise nothing will draw.

        buttonImage.addEventListener('load', (): void => {
            let dx = aXpos;
            let dy = aYpos;
            
            // if x axis is not set, lets center the button horizontally
            if (dx < 0) dx = (this.GetWidth() - buttonImage.width) / 2;
            // if y axis is not set, lets center the button vertically
            if (dy < 0) dy = this.GetHeight() / 2 + buttonImage.height;


            // center the text based upon the font
            let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2); // - 1/2 fontsize + buttonBorder
            let fontY = dy + (buttonImage.height - 12); // - 1/2 fontsize + buttonBorder
            this.d_context.drawImage(buttonImage, dx, dy);
            this.drawText(aCaption, 20, fontX, fontY, '#000');



            if (fn != null) {
                console.log("zover kom ik ")
                this.d_clickCommands.set(fnName, new ButtonAction(dx, dy, buttonImage.height, buttonImage.width, fn));
                console.log(this.d_clickCommands);
            }
        });

     }




}
