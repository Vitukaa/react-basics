import { useState } from "react"
import { transliterate as tr, slugify } from "transliteration"
import Option from "./Option"

export default function CarsPage() {
    const engineTypes = ['Electric', 'Diesel', 'Petrol', 'Hybrid']
    const colors = ['Black', 'Red', 'Blue', 'Silver', 'White', 'Special blue', 'Other']
    const otherColors = ['Yellow', 'Orange', 'Purple', 'Pink', 'Green']
    const carsArr = [
        {
            brand: 'bmw',
            models: ['e39', 'e60', 'e36']
        },
        {
            brand: 'volvo',
            models: ['v60', 'v50', 'xc90'],
        },
        {
            brand: 'peugeot',
            models: ['406', '2008', '3008'],
        }
    ]

    const [ car, setCar ] = useState(null)
    const [ brand, setBrand ] = useState('')
    const [model, setModel ] = useState('')
    const [engine, setEngine ] = useState(engineTypes[0])
    const [price, setPrice ] = useState('')
    const [mileage, setMileage ] = useState('')
    const [color, setColor ] = useState(colors[0])
    const [otherColor, setOtherColor ] = useState(otherColors[0])

    

    const brandInputHandler = (event) => {
        setBrand(event.target.value)
    }

    const modelInputHandler = (event) => {
        setModel(event.target.value)
    }

    const engineInputHandler = (event) => {
        setEngine(event.target.selectedOptions[0].textContent)
        // setEngine(event.target.options[event.target.selectedIndex].text)
    }

    const priceInputHandler = (event) => {
        setPrice(event.target.value)
    }
    
    const mileageInputHandler = (event) => {
        setMileage(event.target.value)
    }
    
    const colorInputHandler = (event) => {
        setColor(event.target.options[event.target.selectedIndex].text)
    }
    
    const otherColorInputHandler = (event) => {
        setOtherColor(event.target.options[event.target.selectedIndex].text)
    }



    const formSubmitHandler = (event) => {
        event.preventDefault()

        const newCar = {
            brand: brand,
            model: model,
            engineType: engine,
            price: price,
            mileage: mileage,
            color: color,
            otherColor: otherColor,
        }
        setCar(newCar)

        setBrand('')
        setModel('')
        setEngine(engineTypes[0])
        setPrice('')
        setMileage('')
        setColor(colors[0])
        setOtherColor(otherColors[0])
    }

    console.log(!brand ? 'tuscia' : 'parasyta')
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div className="form-control">
                    <label htmlFor='brand'>Brand:</label>
                    <input type='text' name='brand' placeholder='Enter brand' value={brand} onChange={brandInputHandler}/>
                    {!brand &&
                        <span>Required input</span>
                    }
                </div>
                <div className="form-control">
                    <label htmlFor='model'>Model:</label>
                    <input type='text' name='model' placeholder='Enter model' value={model} onChange={modelInputHandler} />
                    {!model &&
                        <span>Required input</span>
                    }
                </div>
                <div className="form-control">
                    <label htmlFor='engine-type'>Engine type:</label>
                    <select name='engine-type' onChange={engineInputHandler} >
                        <Option arr={engineTypes} />
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor='price'>Price:</label>
                    <input type='text' name='price' placeholder='Enter price' value={price} onChange={priceInputHandler} />
                    {!price &&
                        <span>Required input</span>
                    }
                </div>
                <div className="form-control">
                    <label htmlFor='mileage'>Mileage:</label>
                    <input type='number' name='mileage' placeholder='Enter mileage' value={mileage} onChange={mileageInputHandler} />
                    {!mileage &&
                        <span>Required input</span>
                    }
                </div>
                <div className="form-control">
                    <label htmlFor='color'>Color:</label>
                    <select name='color' onChange={colorInputHandler}>
                        <Option arr={colors} />
                    </select>
                </div>
                {color === 'Other' && (
                    
                    <div className="form-control">
                        <label htmlFor='otherColor'>Other color:</label>
                        <select name='otherColor' onChange={otherColorInputHandler}>
                            <Option arr={otherColors} />
                        </select>
                    </div>
                    )
                }
                <button type='submit' disabled={!brand || !model || !price || !mileage}>Submit</button>
            </form>

            {car && (
                <div className='car-form-output'>
                    <h1>{car.brand} ({car.model})</h1>
                    <h3>Engine type: {car.engineType}</h3>
                    <ul>
                        <li>Price: {car.price} eur</li>
                        <li>Mileage: {car.mileage} km</li>
                        <li>{car.color === 'Other' ? `Special color: ${car.otherColor}` : `Color: ${car.color}`}</li>
                    </ul>
                </div>
            )}
        </>
    )
}