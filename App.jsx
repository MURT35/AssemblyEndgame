import React from "react"
import clsx from "clsx";
import Header from "./Header"
import {languages} from "./languages.js"
import { getFarewellText , getRandomWord } from "./utils"
import Confetti from "react-confetti"
export default function AssemblyEndgame() {
 
// main state
const [currentWord,setcurrentWord]=React.useState(()=>getRandomWord())
const [guessedLetters,setGuessedLetters]=React.useState([])
const  currentWordArr=[...currentWord]



//derived values
const wrongGuessCount = 
guessedLetters.filter(letter => !currentWord.includes(letter)).length

const isGameWon= currentWordArr.every(letter=>guessedLetters.includes(letter))
const isGameLost=wrongGuessCount >=languages.length-1
const isGameOver=isGameWon || isGameLost
const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)


//staic values
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const alphabetArr=[...alphabet]

const currentletter=currentWordArr.map(
    (letter,index)=>{
        const shouldRevealLetter=isGameLost||guessedLetters.includes(letter)
        const letterClassName=clsx(
            isGameLost&&!guessedLetters.includes(letter)&&"missed-letter"
        )
        return(
        <span key={index} className={letterClassName}>{
          shouldRevealLetter ?letter.toUpperCase():""}</span>
    )}
)


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
     
   
const classNameStatus=clsx(
    "game-status",{
        won:isGameWon
        ,lost:isGameLost
        ,farewell:!isGameOver && isLastGuessIncorrect
    }
   
)

 function addGuessedLetter(letter){
    setGuessedLetters(
        prevletter=>
        prevletter.includes(letter)?prevletter
        :[...prevletter,letter]
    )

 }


function StartnewGame(){
    setcurrentWord(getRandomWord())
    setGuessedLetters([])
}
  function renderGameStatus() {
       if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
        }
        if (!isGameOver) {
            return null
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } if(isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        else{
            return null
        }
    }


    return (
        <main>
                {
                isGameWon && 
                    <Confetti
                        recycle={false}
                        numberOfPieces={1000}
                    />
            }
          <Header/>   
             <section className={classNameStatus}>

             {renderGameStatus()}
             
              
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
        {isGameOver&&  <button
        onClick={StartnewGame}
        className="new-game">New Game</button>}   

        </main>
    )
}
