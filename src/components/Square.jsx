import React,{useContext} from 'react'
import { gameContext } from '../context/Game.context'

const Square = ({num,color,red,green}) => {
const {player1,player2} = useContext(gameContext)
    
  return (
    <div className={`square  ${color}`}>

{
  red ? (
    <p className='snake-text'>{red}</p>
  ) : green ? (
    <p className='ladder-text'>{green}</p>
  ) : (
    <>{num}</>
  )
}

     
       {
        (num == player1 && (<div className='blue'></div>)) ||
        (num == player2 && (<div className='yellow'></div>))
       }
       
  
    </div>
    
  )
}

export default Square