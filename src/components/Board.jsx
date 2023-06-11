import React, { useContext, useState } from 'react'
import Square from './Square'
import { ladder, snakes } from '../context/Game.context'
const Board = () => {

    let squares = []
    for (let i = 100; i > 0; i--) {
      if (snakes.hasOwnProperty(i)) {
        squares.push(<Square color={"snake"} red={snakes[i]} key={i} num={i} />);
      }
      else if(ladder.hasOwnProperty(i)){
        squares.push(<Square color={"ladder"} green={ladder[i]} key={i} num={i} />);
      }
      else if(i%4 == 0 || i%7 ==0){
        squares.push(<Square color={"light"} key={i} num={i} />);
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