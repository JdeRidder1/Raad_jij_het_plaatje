class Game {

    private readonly _canvas : Canvas;
    private _Quiz: Quiz;
    private _person: Player;
    private PicInfo: String

    constructor() {
       const canvasElement : HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
       this._canvas = new Canvas(canvasElement);


            canvasElement.width = window.innerWidth
            canvasElement.height = window.innerHeight 
            

            
            console.log("Game Constructor")

            
            let txt
                  const person = prompt("Voer uw naam in!");

                  if (person == null || person == "") {
                     txt = "Vul gegevens in!";
                     location.reload();
                  } else {
                     this._person = new Player(person);
                     this._canvas.drawText("Welkom " + person + "!", + 80, 750, 100, "white", "center"  );
                     this._canvas.drawText("Kies het onderwerp uit dat jij wilt spelen!", 30, 750, 200, "white", "center")
                     this._canvas.drawText("Let wel op " + person + ", Je hebt per ronde maar " + this._person.getlives() + " levens!", 20, 750, 230, "white", "center")
                     this._canvas.drawImage(
                        "./assets/IMG/fake.png", 650, 320)
                  }

                  this._canvas.WriteSubjectbutton('Personages', `Personages`, this.HighScore,80, 700)
                  this._canvas.WriteSubjectbutton('Landschap', `Landschap`, this.Landscape ,420, 700)
                  this._canvas.WriteSubjectbutton('Steden', `Steden`, this.City ,740, 700)
                  this._canvas.WriteSubjectbutton('Kunst', `Art`, this.Art ,1080, 700)

  }


      /* Tell the user which choice he made, and send him to the chosen subject */
 



      public Art = (): void => {
         this._canvas.clear();
         this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
         this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
         this._canvas.drawText("Welkom bij het onderwerp Kunst! ", 40, 750, 100, "white", "center");
         this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
         this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
         this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
         console.log("art")

         this._Quiz = new Quiz();
         
         var ArrayScr = this._Quiz.GetArtQuiz()[0];
         console.log(this._Quiz.GetArtQuiz()[0])

         

         this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200)
         this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200)

         

         this._canvas.drawImageQuiz(ArrayScr,550, 250)
         
         
        
      }


      public Landscape = (): void => {
         this._canvas.clear();
         this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
         this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
         this._canvas.drawText("Welkom bij het onderwerp Landschap! ", 40, 750, 100, "white", "center");
         this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
         this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
         this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
         console.log("landscape")

         this._Quiz = new Quiz();
         
         var ArrayScr = this._Quiz.GetLandscapeQuiz()[0];
         console.log(this._Quiz.GetLandscapeQuiz()[0])

         

         this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200)
         this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200)

         

         this._canvas.drawImageQuiz(ArrayScr,550, 250)
         
         
        
      }



         public City = (): void => {
            this._canvas.clear();
            this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
            this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
            this._canvas.drawText("Welkom bij het onderwerp Steden! ", 40, 750, 100, "white", "center");
            this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
            this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
            this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
            console.log("city")

            this._Quiz = new Quiz();
            
            var ArrayScr = this._Quiz.GetCityQuiz()[0];
            console.log(this._Quiz.GetCityQuiz()[0])

            

            this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200)
            this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200)

            

            this._canvas.drawImageQuiz(ArrayScr,550, 250)
            
            
           
         }
         public Personages = (): void => {
            this._canvas.clear();
            this._canvas.drawText("Naam : " + this._person.getName(), 20, 150, 100, "white", "center");
            this._canvas.drawText("Aantal levens: " + this._person.wrongAnswer(), 20, 150, 120, "white", "center");
            this._canvas.drawText("Welkom bij het onderwerp Personages! ", 40, 750, 100, "white", "center");
            this._canvas.drawText("Is de onderstaande afbeelding echt of nep?", 20, 750, 150, "white", "center");
            this._canvas.drawText("N E P", 20, 346, 400, "white", "center");
            this._canvas.drawText("E C H T: ", 20, 1170, 400, "white", "center");
            console.log("personages")

            this._Quiz = new Quiz();
            
            var ArrayScr = this._Quiz.GetPersonagesQuiz()[0];
            console.log(this._Quiz.GetPersonagesQuiz()[0])

            

            this._canvas.WriteAnswerbutton("./assets/IMG/wrong.png", "right", this.CheckrightAnswer, 250, 200)
            this._canvas.WriteAnswerbutton("./assets/IMG/right.png", "wrong", this.CheckwrongAnswer, 1100, 200)

            

            this._canvas.drawImageQuiz(ArrayScr,550, 250)
            
            
           
         }

      


         public CheckrightAnswer = (): void =>{    
            if(this._Quiz.GetCityQuiz()[1] == "Real"){
               alert("Goed geantwoord!")
               this._person.goodAnswer();
            } else {
               alert("Helaas, fout geantwoord!")
               this._person.wrongAnswer();
            }          
            console.log(this._person.getscore());
            
            for(let j = 0; 0 > 2;){
               this.HighScore();
               j++
            }
            
            this.City();
         
         }


        public CheckwrongAnswer = (): void =>{
            if(this._Quiz.GetCityQuiz()[1] == "Fake"){
               alert("Goed geantwoord!")
               this._person.goodAnswer();
            } else {
               alert("Helaas, fout geantwoord!")
               this._person.wrongAnswer();
            }
            console.log(this._person.getlives())
            for(let j = 0; 0 > 2;){
               this.HighScore();
               
               j++
            }
            this.City();
         }



        






         public loop(){

         }






      public HighScore = (): void =>{
         this._canvas.clear();
         this._canvas.drawText("H I G H S C O R E ", 100, 750, 100, "white", "center");
         this._canvas.drawText(" NAAM ", 30, 400, 200, "white", "center");
         this._canvas.drawText(" LEVENS ", 30, 700, 200, "white", "center");
         this._canvas.drawText(" SCORE ", 30, 1000, 200, "white", "center");
         this._canvas.drawImage(
            "./assets/IMG/Border.png", 0, 0)
      
         // Return the user information

       
         this._canvas.drawText(" 1.   " + this._person.getName(), 20, 400, 300, "white", "center");
         this._canvas.drawText(" 2.   " + this._person.setName(), 20, 400, 400, "white", "center");
         this._canvas.drawText(" 3.   " + this._person.setName(), 20, 400, 500, "white", "center");





         if(this._person.getlives() == 3 ){
               this._canvas.drawImageLives(650, 270)
               this._canvas.drawImageLives(680, 270)
               this._canvas.drawImageLives(710, 270)
         } else if (this._person.getlives() == 2 ){
                  this._canvas.drawImageLives(650, 270)
                  this._canvas.drawImageLives(680, 270)
               } else if (this._person.getlives() == 1 ){
                  this._canvas.drawImageLives(650, 270)
                } else {
                  this._canvas.drawText(" YOU ARE DEAD  ", 30, 650, 270, "white", "center");
                }




            
         this._canvas.drawText(" "+ this._person.getscore(), 40, 1000, 300, "white", "center");
         this._canvas.drawText(" "+ this._person.setScore(), 40, 1000, 400, "white", "center");
         this._canvas.drawText(" "+ this._person.setScore(), 40, 1000, 500, "white", "center");
         }

     
}


   

window.addEventListener('load', init);

function init(): void {
   const Quiz = new Game();
   //window.setInterval(Quiz.draw, 1000 / 10)
}
