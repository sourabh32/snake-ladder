import React,{useContext} from 'react'
import { gameContext } from '../context/Game.context'

const Square = ({num,color}) => {
const {player1,player2} = useContext(gameContext)
    
  return (
    <div className={`square  ${color}`}>
     {num}
       {
        (num == player1 && (<div className='blue'></div>)) ||
        (num == player2 && (<div className='yellow'></div>))
       }
    </div>
    
  )
}

export default Square