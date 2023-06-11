



import { Toaster,toast } from 'react-hot-toast'
import Board from './components/Board'
import Dice from './components/Dice'
import { useContext } from 'react'
import { gameContext } from './context/Game.context'

function App() {
 const {winner} = useContext(gameContext)
 if(winner){
  toast(winner.toLowerCase(), {
    icon: '👏',
  });
 }

  return (
    <>
    <Toaster />
    <div className="main">
    <Board   />
   <Dice  />
    </div>
  
  
    </>
  )
}

export default App




