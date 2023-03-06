import React from 'react'

export default function CounterPageCounter(props) {
    const { count, onInput, onCounter, counterOutputDefault, setCount, onNumber } = props
  return (
    <div>
    <h1 className={`counter-output${+ count <= 4 ? ' red' : ''}`}>{count}</h1>
    <input onChange={onInput}  type='number' max='10' min='0' value={count}/>
    <button onClick={() => onCounter(1)} disabled={count > 9}>+1</button>
    <button onClick={() => onCounter(2)} disabled={count > 8}>+2</button>
    <button onClick={() => onCounter(-1)} disabled={count < 1}>-1</button>
    <button onClick={() => onCounter(-2)} disabled={count < 2}>-2</button>
    <button onClick={() => setCount(counterOutputDefault)}>Reset</button>
    <button onClick={onNumber}>Save number</button>
</div>
  )
}
