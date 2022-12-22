import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './Die'

function App() {
  const [dice, setDice] = useState(generateDice())

  function generateDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      let diceObj = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
      newDice.push(diceObj)
    }

    return newDice
  }

  function toggle(diceId) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === diceId ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElement = dice.map(die => {
    return <Die 
      number={die.value} 
      key={die.id} 
      isHeld={die.isHeld} 
      toggle={() => toggle(die.id)} 
      />
  })
  
  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='subtitle'>Roll until all dice are the same. <span>Click each die to freeze it at its current value between rolls.</span></p>
      <div className='dice-container'>
        {diceElement}
      </div>
      <button className='roll-btn'>Roll</button>
    </main>
  )
}

export default App
