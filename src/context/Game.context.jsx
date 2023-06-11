import { createContext, useEffect, useState } from "react";
import winnervoice from "../assets/winner.mp3"
import laddervoice from "../assets/ladder.mp3"
import snake from "../assets/snake.mp3"
import move from "../assets/move.mp3"

export const gameContext = createContext({
    player1:1,
    player2:1,
    isPlayer1:true,
    setIsPlayer1:()=>{},
    setIsPlayer2:()=>{},
    winner:null,
    generateRandom:()=>{}
})

export const snakes ={
    99:72,
    89:66,
    76:51,
    97:78,
    62:23,
    54:31,
    40:3,
    27:5
  
}

export const ladder = {
    74:92,
    65:81,
    42:65,
    13:46,
    4:25,
    33:49,
    80:100
}




import React from 'react'

const GameProvider = ({children}) => {
const [player1,setplayer1] = useState(1)
const [player2,setplayer2] = useState(1)
const [isPlayer1,setIsPlayer1] = useState(true)
const [val,setVal] = useState(6)
const [moving,setMoving] = useState(false)
const [winner,setWinner]= useState(null)


const resetGame = () =>{
    setplayer1(1)
    setplayer2(1)
    setIsPlayer1(true)
    setWinner(null)
    setMoving(false)
    setVal(6)

}
const playSound = (voice) => {
    let audio = new Audio(voice);
    audio.play();
  };


const generateRandom = () =>{
    const val = Math.ceil(Math.random() * 6);
    setVal(val)
const Max_Val = 100;
console.log(isPlayer1,val)
if (isPlayer1) {
  let updatedValue = player1 + val;
  if (updatedValue <= Max_Val) {
    let count = 0;
    setMoving(true)
    const interval = setInterval(() => {
      setplayer1((prevPlayer1) => prevPlayer1 + 1);
      count++;
      
      if (count === val) {
        clearInterval(interval);
        
        setMoving(false)
      }
    }, 100);
    playSound(move)
  }
  
}

    else{
        let updatedValue = player2 + val;
  if (updatedValue <= Max_Val) {
    let count = 0;
    setMoving(true)
    const interval = setInterval(() => {
      setplayer2((prevPlayer2) => prevPlayer2 + 1);
      count++;
      
      if (count === val) {
        clearInterval(interval);
        
        setMoving(false)
      }
    }, 100);
    playSound(move)
  }
    }
    setIsPlayer1(!isPlayer1);
    
}
const checkSnake = ()=>{
    if (snakes.hasOwnProperty(player1)) {
        setTimeout(()=>{
            setplayer1(snakes[player1]);
        },1000)
      playSound(snake)
      }
      if (snakes.hasOwnProperty(player2)) {
        setTimeout(()=>{
            setplayer2(snakes[player2]);
        },1000)
        playSound(snake)
      }
}
const checkLadder = ()=>{
    if (ladder.hasOwnProperty(player1)) {
        setTimeout(()=>{
            setplayer1(ladder[player1]);
        },1000)
      playSound(laddervoice)
      }
      if (ladder.hasOwnProperty(player2)) {
        setTimeout(()=>{
            setplayer2(ladder[player2]);
        },1000)
        playSound(laddervoice)
      }
}

const checkWinner = () => {
    if (player1 === 100) {
       setWinner("Blue")
      playSound(winnervoice)
    } else if (player2 === 100) {
        setWinner("Yellow")
     playSound(winnervoice)
    }
  };

useEffect(()=>{
    if(!moving){
        checkSnake()
    checkLadder()
    checkWinner()
    }
    
console.log(player1,player2)
},[player1,player2])

 
const value ={resetGame,player1,player2,setplayer1,setplayer2,isPlayer1,setIsPlayer1,generateRandom,val,winner}
  return (
    <gameContext.Provider value ={value}>
        {children}
    </gameContext.Provider>
  )
}

export default GameProvider