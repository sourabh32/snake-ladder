import React, { useState } from 'react'
import Square from './Square'
import { snakes } from '../context/Game.context'
const Board = () => {
  
    let squares = []
    for (let i = 100; i > 0; i--) {
      if (snakes.hasOwnProperty(i)) {
        squares.push(<Square color={"red"} key={i} num={i} />);
      } else {
        squares.push(<Square color={"whit"} key={i} num={i} />);
      }
    }
    


  return (
    <div className='board'>
   {squares}
  
    </div>
  )
}

export default Board