import { createContext, useEffect, useState } from "react";


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
    99:41,
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
const [winner,setWinner] = useState(null)

const generateRandom = () =>{
    const val = Math.ceil(Math.random()*6)
    const Max_Val = 100;
    if(isPlayer1){
        let updatedValue = player1+val
        if(updatedValue<=Max_Val){
            setplayer1(player1=>player1+val)
        }
        
    }
    else{
        let updatedValue = player2+val
        if(updatedValue<=Max_Val){
            setplayer2(player2=>player2+val)
        }
    }
    setIsPlayer1(!isPlayer1);
    
}
const checkSnake = ()=>{
    if (snakes.hasOwnProperty(player1)) {
        setTimeout(()=>{
            setplayer1(snakes[player1]);
        },800)
      
      }
      if (snakes.hasOwnProperty(player2)) {
        setTimeout(()=>{
            setplayer2(snakes[player2]);
        },800)
      }
}
const checkLadder = ()=>{
    if (ladder.hasOwnProperty(player1)) {
        setTimeout(()=>{
            setplayer1(ladder[player1]);
        },800)
      
      }
      if (ladder.hasOwnProperty(player2)) {
        setTimeout(()=>{
            setplayer2(ladder[player2]);
        },800)
      }
}

const checkWinner = () => {
    if (player1 === 100) {
      setWinner("Player 1");
      console.log("red")
    } else if (player2 === 100) {
      setWinner("Player 2");
      console.log("blue")
    }
  };
useEffect(()=>{
    checkSnake()
    checkLadder()
    checkWinner()
console.log(player1,player2)
},[player1,player2])

 
const value ={player1,player2,setplayer1,setplayer2,isPlayer1,setIsPlayer1,generateRandom}
  return (
    <gameContext.Provider value ={value}>
        {children}
    </gameContext.Provider>
  )
}

export default GameProvider