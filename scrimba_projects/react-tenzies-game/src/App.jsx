import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Die from './Die'
import Timer from './Timer'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(getNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)


  useEffect(() => {
    let interval
    
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10);
    } 

    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const sameValue = dice.every(die => die.value === firstValue)

    if (allHeld && sameValue) {
      clearInterval(interval)
      setTenzies(true)
    }
  }, [dice])

  function generateDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function getNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDice())
    }

    return newDice
  }

  function holdDice(diceId) {
    setRunning(true)
    setDice(prevDice => prevDice.map(die => {
      return die.id === diceId ? 
        {...die, isHeld: !die.isHeld} : die
    }))
  }

  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? 
          die : 
          generateDice()
      }))
    } else {
      setTime(0)
      setRunning(p => !p)
      setTenzies(false)
      setDice(getNewDice())
    }
  }

  const diceElement = dice.map(die => {
    return <Die 
      number={die.value} 
      key={die.id} 
      isHeld={die.isHeld} 
      toggle={() => holdDice(die.id)} 
      />
  })
  
  return (
    <div>
      <main>
        {tenzies && <Confetti />}
        <h1 className='title'>Tenzies</h1>
        <p className='subtitle'>Roll until all dice are the same. <span>Click each die to freeze it at its current value between rolls.</span></p>
        <div className='dice-container'>
          {diceElement}
        </div>

        <Timer time={time} />

        <button 
          className='roll-btn' 
          onClick={rollDice}
        >
          {tenzies ? 'New Game' : 'Roll'}
        </button>
        <div>
          <p className='author'>created by 
            <span className='quang'> quang</span></p>
        </div>
      </main>
    </div>
  )
}

export default App
