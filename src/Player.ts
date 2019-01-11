
class Player {

    private  Name: string 
    private  score: number;
    private  lives: number;
    private  highscores: Array<String>; //TODO: do not use 'any': write an interface!
    

    public constructor(naam : string, ) {
        
        this.Name = naam;
        this.score = 400;
        this.lives = 4;
        // this.highscores = 0;
    }

    public getName(){
        return this.Name;
    }

    public getscore(){
        return this.score;
    }

    public getlives(){
        return this.lives;
    }


    // Default 

    public setName(){
        this.Name = "DEFAULT";
        return this.Name;
    }

    public setScore(){
        this.score = 0;
        return this.score;
    }


    public wrongAnswer(){
        return this.lives = this.lives - 1;     
    }

    public goodAnswer(){
        return this.score = this.score + 400; 
    }

    
}
