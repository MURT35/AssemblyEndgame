import React from "react"

import Header from "./Header"
import {languages} from "./languages.js"

export default function AssemblyEndgame() {
    const langEle=languages.map(
        lang => {
        const styles={
            backgroundColor:lang.backgroundColor,
            color:lang.color
        }
          return(
            <span 
            key={lang.name}
            style={styles}
            className="chip"
            >{lang.name}</span>
          )
        }
    )

 const [currentWord,setcurrentWord]=React.useState("React")
const  currentWordArr=[...currentWord]
const currentletter=currentWordArr.map(
    (letter,index)=>(
        <span key={index}>{letter.toUpperCase()}</span>
    )
)
   const alphabet = "abcdefghijklmnopqrstuvwxyz"
   const alphabetArr=[...alphabet]
   const keyboard=alphabetArr.map(
    (letter,index)=>(
        <button key={index}
         onClick={()=>addGuessedLetter(letter)}>{letter.toUpperCase()}</button>
    )
   )

 const [guessedLetters,setGuessedLetters]=React.useState([])
 function addGuessedLetter(letter){
    setGuessedLetters(

        prevletter=>
        prevletter.includes(letter)?prevletter
        :[...prevletter,letter]
    )

 }
 console.log(guessedLetters)

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
