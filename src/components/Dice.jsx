import React, { useContext, useState } from 'react'
import { gameContext } from '../context/Game.context'
import "../index.css"
const Dice = () => {
   const {generateRandom} = useContext(gameContext)
  return (
    <div className="center">
      <button className='btn' onClick={generateRandom}>Random</button>
    </div>
    
  )
}

export default Dice