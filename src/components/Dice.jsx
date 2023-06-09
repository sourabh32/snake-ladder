import React, { useContext, useState } from 'react'
import { gameContext } from '../context/Game.context'

const Dice = () => {
   const {generateRandom} = useContext(gameContext)
  return (
    <button onClick={generateRandom}>Random</button>
  )
}

export default Dice