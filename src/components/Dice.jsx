import React, { useContext, useState } from 'react'
import { gameContext } from '../context/Game.context'
import "../index.css"
const Dice = () => {
   const {generateRandom,val,isPlayer1,winner,resetGame} = useContext(gameContext)
   console.log(winner)
  return (
    <div className="center">
     <button className={`btn ${!isPlayer1 ? "btn-yellow" : ""}`} onClick={generateRandom}>{val}</button>
{winner !=null && <button className="btn" onClick={resetGame}>Reset</button>}

    </div>
    
  )
}

export default Dice