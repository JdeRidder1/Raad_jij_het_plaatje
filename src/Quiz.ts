 class Quiz {
  
    // private readonly player: string = "Player1";
    public City: Array<any>;
    public Art: Array<any>;
    public Landscape: Array<any>;
    public Personages: Array<any>

    private readonly _canvas : Canvas;
    private readonly _player : Player;
    
    


    public constructor() {
    
        



          
     
    }
                 public GetCityQuiz() {                    

                          /* Pictures City Array */
            this.City = [{
                index : 0,
                Title :  "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/1_Fake.jpg',   
            },{
                index : 1,
                Title :  "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/2_Fake.jpg',   
            },{
                index : 2,
                Title :  "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/3_Fake.jpg',   
            },{
                index : 3,
                Title :  "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/4_Fake.jpg',   
            },{
                index : 4,
                Title :  "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/5_Fake.jpg',   
            },{
                index : 5,
                Title :  "Fake",
                PictureSrc: './assets/IMG/QuizPictures/City/6_Fake.jpg',   
            },{
                index : 6,
                Title :  "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/1_Real.jpg',   
            },{
                index : 7,
                Title :  "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/2_Real.jpg',   
            },{
                index : 8,
                Title :  "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/3_Real.jpg',   
            },{
                index : 9,
                Title :  "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/4_Real.jpg',   
            },{
                index : 10,
                Title :  "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/5_Real.jpg',   
            },{
                index : 11,
                Title :  "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/6_Real.jpg',   
            },{
                index : 12,
                Title :  "Real",
                PictureSrc: './assets/IMG/QuizPictures/City/7_Real.jpg',   
            }
         ];


         /* WARNING: Put not the length of the Array, normal the index value of the array is 0, but array.length will begin with 1 instead of 0 */
                         let i =  this.randomNumber(0, 12);          

                   console.log(i)
                      return [this.City[i].PictureSrc, this.City[i].Title];    
                        
                 }
  




                public randomNumber(min: number, max: number): number {
                    return Math.round(Math.random() * (max - min) + min);
                }




                public GetArtQuiz() {
                    

                     /* Pictures Art Array */
       this.Art = [{
           index : 0,
           Title :  "Fake",
           PictureSrc: './assets/IMG/QuizPictures/Art/1_Fake.jpg',   
       },{
           index : 1,
           Title :  "Fake",
           PictureSrc: './assets/IMG/QuizPictures/Art/2_Fake.jpg',   
       },{
           index : 2,
           Title :  "Fake",
           PictureSrc: './assets/IMG/QuizPictures/Art/3_Fake.jpg',   
       },{
           index : 3,
           Title :  "Fake",
           PictureSrc: './assets/IMG/QuizPictures/Art/4_Fake.jpg',   
       },{
           index : 4,
           Title :  "Fake",
           PictureSrc: './assets/IMG/QuizPictures/Art/5_Fake.jpg',   
       },{
           index : 5,
           Title :  "Real",
           PictureSrc: './assets/IMG/QuizPictures/Art/1_Real.jpg',   
       },{
           index : 6,
           Title :  "Real",
           PictureSrc: './assets/IMG/QuizPictures/Art/2_Real.jpg',   
       },{
           index : 7,
           Title :  "Real",
           PictureSrc: './assets/IMG/QuizPictures/Art/3_Real.jpg',   
       },{
           index : 8,
           Title :  "Real",
           PictureSrc: './assets/IMG/QuizPictures/Art/4_Real.jpg',   
       },{
           index : 9,
           Title :  "Real",
           PictureSrc: './assets/IMG/QuizPictures/Art/5_Real.jpg',
           
        }
       ];


    /* WARNING: Put not the length of the Array, normal the index value of the array is 0, but array.length will begin with 1 instead of 0 */
                    let i =  this.randomNumber(0, 9);          

              console.log(i)
                 return [this.Art[i].PictureSrc, this.Art[i].Title];    
                   
            }
                    
            public GetLandscapeQuiz() {                    

                /* Pictures Landscape Array */
  this.Landscape = [{
      index : 0,
      Title :  "Fake",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/1_Fake.jpg',   
  },{
      index : 1,
      Title :  "Fake",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/2_Fake.jpg',   
  },{
      index : 2,
      Title :  "Fake",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/3_FAKE.jpg',   
  },{
      index : 3,
      Title :  "Fake",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/4_Fake.jpg',   
  },{
      index : 4,
      Title :  "Fake",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/5_FAKE.jpg',    
  },{
      index : 5,
      Title :  "Real",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/1_Real.jpg',   
  },{
      index : 6,
      Title :  "Real",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/2_Real.jpg',   
  },{
      index : 7,
      Title :  "Real",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/3_Real.jpg',   
  },{
      index : 8,
      Title :  "Real",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/4_Real.jpg',   
  },{
      index : 9,
      Title :  "Real",
      PictureSrc: './assets/IMG/QuizPictures/Landscape/5_Real.jpg',      
  }
];


/* WARNING: Put not the length of the Array, normal the index value of the array is 0, but array.length will begin with 1 instead of 0 */
               let i =  this.randomNumber(0, 12);          

         console.log(i)
            return [this.Landscape[i].PictureSrc, this.Landscape[i].Title];    
              
       }

       public GetPersonagesQuiz() {                    

        /* Pictures Personages Array */
this.Personages = [{
index : 0,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/1_Fake.jpg',   
},{
index : 1,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/2_Fake.jpg',   
},{
index : 2,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/3_Fake.jpg',   
},{
index : 3,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/4_Fake.jpg',   
},{
index : 4,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/5_Fake.jpg',   
},{
index : 5,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/6_Fake.jpg',   
},{
index : 6,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/7_Fake.jpg',   
},{
index : 7,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/8_Fake.jpg',   
},{
index : 8,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/9_Fake.jpg',   
},{
index : 9,
Title :  "Fake",
PictureSrc: './assets/IMG/QuizPictures/Personages/10_Fake.jpg',   
},{
index : 10,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/1_Real.jpg',   
},{
index : 11,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/2_Real.jpg',   
},{
index : 12,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/3_Real.jpg', 
},{  
index : 13,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/4_Real.jpg',   
},{
index : 14,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/5_Real.jpg',   
},{
index : 15,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/6_Real.jpg',   
},{
index : 16,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/7_Real.jpg',   
},{
index : 17,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/8_Real.jpg',   
},{
index : 18,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/9_Real.jpg',   
},{
index : 19,
Title :  "Real",
PictureSrc: './assets/IMG/QuizPictures/Personages/10_Real.jpg',
}
];



/* WARNING: Put not the length of the Array, normal the index value of the array is 0, but array.length will begin with 1 instead of 0 */
       let i =  this.randomNumber(0, 12);          

 console.log(i)
    return [this.Personages[i].PictureSrc, this.Personages[i].Title];    
      
}








 

    

    /**
     * Cleanup
     * @AccessModifier {protected}
     * handles the cleanup and deregistration of created method callbacks
     */
  //  protected Cleanup(): void {
        //
    }
