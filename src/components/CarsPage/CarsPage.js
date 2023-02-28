import { useState } from "react"
import Option from "./Option"

export default function CarsPage() {
    const [ car, setCar ] = useState(null)
    const [ brand, setBrand ] = useState('')
    const [model, setModel ] = useState('')
    const [engine, setEngine ] = useState('')
    const [price, setPrice ] = useState('')
    const [mileage, setMileage ] = useState('')
    const [color, setColor ] = useState('')
    const [otherColor, setOtherColor ] = useState('')

    const engineTypes = ['Electric', 'Diesel', 'Petrol', 'Hybrid']
    const colors = ['Black', 'Red', 'Blue', 'Silver', 'White', 'Special blue', 'Other']
    const otherColors = ['Yellow', 'Orange', 'Purple', 'Pink', 'Green']
    

    const brandInputHandler = (event) => {
        setBrand(event.target.value)
    }

    const modelInputHandler = (event) => {
        setModel(event.target.value)
    }

    const engineInputHandler = (event) => {
        setEngine(event.target.options[event.target.selectedIndex].text)
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



    {console.log(color === 'lack')}
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
        event.target.reset()
    }
    

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div className="form-control">
                    <label htmlFor='brand'>Brand:</label>
                    <input type='text' name='brand' placeholder='Enter brand' value={brand} onChange={brandInputHandler}/>
                </div>
                <div className="form-control">
                    <label htmlFor='model'>Model:</label>
                    <input type='text' name='model' placeholder='Enter model' value={model} onChange={modelInputHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor='engine-type'>Engine type:</label>
                    <select name='engine-type' onChange={engineInputHandler}>
                        <Option arr={engineTypes} />
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor='price'>Price:</label>
                    <input type='text' name='price' placeholder='Enter price' value={price} onChange={priceInputHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor='mileage'>Mileage:</label>
                    <input type='number' name='mileage' placeholder='Enter mileage' value={mileage} onChange={mileageInputHandler} />
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
                <button type='submit'>Submit</button>
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