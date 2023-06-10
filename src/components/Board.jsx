import React, { useContext, useState } from 'react'
import Square from './Square'
import { ladder, snakes } from '../context/Game.context'
const Board = () => {

    let squares = []
    for (let i = 100; i > 0; i--) {
      if (snakes.hasOwnProperty(i)) {
        squares.push(<Square color={"snake"} key={i} num={i} />);
      }
      else if(ladder.hasOwnProperty(i)){
        squares.push(<Square color={"ladder"} key={i} num={i} />);
      }
       else {
        squares.push(<Square color={"normal"} key={i} num={i} />);
      }
    }
    


  return (<div className="container">
 <div className='board'>
   {squares}
  
    </div>
   
  </div>
   
  )
}

export default Board