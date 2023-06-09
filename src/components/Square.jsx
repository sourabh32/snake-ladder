import React,{useContext} from 'react'
import { gameContext } from '../context/Game.context'
import red from "../assets/download2.png"
import blue from "../assets/download.png"
const Square = ({num,color}) => {
const {player1,player2} = useContext(gameContext)
    
  return (
    <div className={`square ${color}`}>
     {num}
       {
        (num == player1 && (<div  ><img className='token' src={red} /></div>)) ||
        (num == player2 && (<div  ><img className='token' src={blue} /></div>))
       }
    </div>
    
  )
}

export default Square