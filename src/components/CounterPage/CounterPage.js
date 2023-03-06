import { useState } from 'react';
import './CounterPage.css'
import CounterPageCounter from './CounterPageCounter';
import CounterPageListItem from './CounterPageListItem';


export default function CounterPage() {
    let counterOutputDefault = 1
    const [ count, setCount ] = useState(counterOutputDefault)
    const [numbers, setNumbers] = useState([])

    
    
    const counterHandler = (num) => setCount(prevState => prevState + num)
    
    const inputHandler = (event) => {
        setCount(event.target.valueAsNumber)
        
        if (event.target.valueAsNumber > 10) {
            setCount(10)
        } else if (event.target.valueAsNumber < 0) {
            setCount(0)
        }
    }
    
    const numberHandler = () => {
        const numberData = {
            id: Math.random(),
            number: count,
        }
       setNumbers(prevState => [numberData, ...prevState])
       setCount(counterOutputDefault)
    }

    const deleteNumberHandler = (id) => {
        setNumbers(prevState => {
            return prevState.filter(number => number.id !== id)
        })
    }

    return (
        <>
            <CounterPageCounter count={count} onInput={inputHandler} onCounter={counterHandler} counterOutputDefault={counterOutputDefault} setCount={setCount} onNumber={numberHandler} />

            {(numbers && numbers.length > 0) ?
                <div>
                    <h2>Saved numbers:</h2>
                    <ul>
                        {numbers.map((number, index) => <CounterPageListItem key={index} number={number} onDeleteNumber={deleteNumberHandler} />)}
                    </ul>
                </div>
            :
                <div>
                    <h2>No saved numbers yet.</h2>
                </div>
            }
        </>
    )
}