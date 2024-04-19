import { useEffect, useRef, useState } from 'react';
import './App.css';
import backgroundImage from './pexels-karolina-grabowska-4397907.jpg'
import Button from 'react-bootstrap/Button';

const App = () => {
  const [count, updateCount] = useState(250 * 6);
  const [running, norunning] = useState(false);
  const intervalRef = useRef(null)

  useEffect(() =>{
    if (running) {
      intervalRef.current = setInterval(() => {
        updateCount(prevCount => {
          if (prevCount === 0) {
            clearInterval(intervalRef.current)
            return 0
          }
          else {
            return prevCount - 1
          }
        })
      }, 1000)
    }
    else {
      clearInterval(intervalRef.current)
    }
},[running])

const formtime = (count) => {
  const minutes = Math.floor(count / 60)
  const seconds = count % 60
  return `${minutes}: ${seconds}`
}

const timerStarts = () => {
  norunning(true)
}

const paueButton = () => {
  norunning(false)
}

const resetButton = () => {
  norunning(false)
  updateCount(250*6)
}

  return (
    <div className='backgroung-main-container'>
      <div className='conatiner-center'>
      <div>
        <h3 className='heading'>Timer</h3>
      </div>
      <div className='timer-container'>
      <p className='number-counting'>{formtime(count)}</p>
      <button className='btn' onClick={timerStarts}>Start</button>{'  '}
      <button className='btn' onClick={paueButton}>Pause</button> {'  '}
      <button className='btn' onClick={resetButton}>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default App;