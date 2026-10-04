import React from "react"
import clsx from "clsx";
import Header from "./Header"
import {languages} from "./languages.js"

export default function AssemblyEndgame() {
 

const [currentWord,setcurrentWord]=React.useState("React")

const [guessedLetters,setGuessedLetters]=React.useState([])
const  currentWordArr=[...currentWord]
const currentletter=currentWordArr.map(
    (letter,index)=>(
        <span key={index}>{
           guessedLetters.includes(letter)?letter.toUpperCase():""}</span>
    )
)
const wrongGuessCount = 
        guessedLetters.filter(letter => !currentWord.includes(letter)).length

  
   const alphabet = "abcdefghijklmnopqrstuvwxyz"
   const alphabetArr=[...alphabet]
   const keyboard=alphabetArr.map(
    (letter,index)=>
        {
        const isGuessed= guessedLetters.includes(letter)
        const isCorrect= isGuessed && currentWord.includes(letter)
        const isWrong= isGuessed && !currentWord.includes(letter)
        const className=clsx(
            {
                correct:isCorrect
                ,wrong:isWrong
            }
        )  
     return(
   <button
   className={className}
   key={index}
    onClick={()=>addGuessedLetter(letter)}>
    {letter.toUpperCase()}</button>
    
        )})
     
   


 function addGuessedLetter(letter){
    setGuessedLetters(

        prevletter=>
        prevletter.includes(letter)?prevletter
        :[...prevletter,letter]
    )

 }



    // const languageElements = languages.map((lang, index) => {
    //     const isLanguageLost = index < wrongGuessCount
    //     const styles = {
    //         backgroundColor: lang.backgroundColor,
    //         color: lang.color
    //     }
    //     const className = clsx("chip", isLanguageLost && "lost")
    //     return (
    //         <span
    //             className={`chip ${isLanguageLost ? "lost" : ""}`}
    //             style={styles}
    //             key={lang.name}
    //         >
    //             {lang.name}
    //         </span>
    //     )
    // })
  const langEle=languages.map(
       (lang,index) => {
        const styles={
            backgroundColor:lang.backgroundColor,
            color:lang.color
        }
        const isLanguageLost=index < wrongGuessCount
        const className=clsx("chip",isLanguageLost && "lost")
          return(
            <span 
            key={lang.name}
            style={styles}
            className={className}
            >{lang.name}</span>
          )
        }
    )

    return (
        <main>
          <Header/>   
             <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>   

               <section className="language-chips">
             {langEle}
          
            </section> 
            
           <section className="word">
             {currentletter}
            </section> 

         <section className="keyboard">
             {keyboard}
            </section> 
             <button className="new-game"
            
             >New Game</button>

        </main>
    )
}
