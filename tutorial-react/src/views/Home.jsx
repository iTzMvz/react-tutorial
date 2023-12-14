import { useState } from 'react';
import './Home.css';
import Calculator from '../components/Calculator.jsx';
import Display from '../components/Display.jsx';
import Board from '../components/Board.jsx';
import Button from '../components/Button.jsx';

function Home() {
  const btns = ['C', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, ',', '=']


  const [calc, setCalc] = useState(
    {
      displayValue: 0,
      operation: null,
    }
  );
const increment = () => {
  setCalc({
    ...calc,
    displayValue: calc.displayValue + 1
  })
}

const handleClick = (btn) => {
  console.log(btn)
  setCalc({
    ...calc,
    displayValue: calc.displayValue + btn.toString()
  })
}

  return (
    <>
      <Calculator>
        <Display value={calc.displayValue}></Display>
        <Board>
          {
            btns.map((btn, index) => (
               <Button key={index} value={btn} onClick={() => handleClick(btn)} ></Button>
            ))
          }
        </Board>
      </Calculator>
      <button onClick={() => increment()} >+</button>
    </>
  )
}


export default Home
