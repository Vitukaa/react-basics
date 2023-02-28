import { useState } from 'react';
import './CounterPage.css'


export default function CounterPage() {
    let counterOutputDefault = 1
    const [ count, setCount ] = useState(counterOutputDefault)

    const counterHandler = (num) => {
        setCount(count + num)
    }

    const inputHandler = (event) => {
        setCount(event.target.valueAsNumber)
        
        if (event.target.valueAsNumber > 10) {
            setCount(10)
        } else if (event.target.valueAsNumber < 0) {
            setCount(0)
        }
    }


    return (
        <>
            <h1 className={`counter-output${+ count <= 4 ? ' red' : ''}`}>{count}</h1>
            <input onChange={inputHandler}  type='number' max='10' min='0' value={count}/>
            <button onClick={() => counterHandler(1)} disabled={count > 9}>+1</button>
            <button onClick={() => counterHandler(2)} disabled={count > 8}>+2</button>
            <button onClick={() => counterHandler(-1)} disabled={count < 1}>-1</button>
            <button onClick={() => counterHandler(-2)} disabled={count < 2}>-2</button>
            <button onClick={() => setCount(counterOutputDefault)}>Reset</button>
        </>
    )
}