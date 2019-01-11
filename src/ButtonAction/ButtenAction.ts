/**
 * Class containing the callback for the button
 * or area where the click is handled.
 */
class ButtonAction {

    // list of private data members
    private readonly x: number; // << x position
    private readonly y: number; // << y position
    private readonly h: number; // << height
    private readonly w: number; // << width
    private readonly fn: () => void; // << Callback method

    /**
     * Constructor
     * @param x - X position
     * @param y - Y position
     * @param h - Height of the area
     * @param w - Width of the area
     * @param fn - Callback function
     */
    public constructor(x: number, y: number, h: number, w: number, fn: () => void) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.fn = fn;
    }

    /**
     * ExecuteIfInArea
     * @param x - X position clicked
     * @param y - Y position clicked
     */
    public ExecuteIfInArea(x: number, y: number): void {
        if (x > this.x && x < this.x + this.w &&
            y > this.y && y < this.y + this.h) {
            // if the clicked X and Y are in the range ..
            // call the callback method
            
            this.fn();
            
        }
    }
}