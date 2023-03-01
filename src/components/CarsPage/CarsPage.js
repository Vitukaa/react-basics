import { getByDisplayValue } from "@testing-library/react"
import { useState } from "react"
import Brand from "./Brand"
import Option from "./Option"

export default function CarsPage() {
    const engineTypes = ['electric', 'diesel', 'petrol', 'hybrid']
    const colors = ['black', 'red', 'blue', 'silver', 'white', 'special blue', 'other']
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
    const [basePrice, setBasePrice ] = useState(1000)
    const [mileage, setMileage ] = useState(0)
    const [color, setColor ] = useState(colors[0])
    const [otherColor, setOtherColor ] = useState(otherColors[0])
    const [discountCode, setDiscountCode ] = useState('')

    

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

    const basePriceInputHandler = (event) => {
        setBasePrice(Number(event.target.value))
    }
    
    const mileageInputHandler = (event) => {
        setMileage(Number(event.target.value))
    }
    
    const colorInputHandler = (event) => {
        setColor(event.target.options[event.target.selectedIndex].text)
    }
    
    const otherColorInputHandler = (event) => {
        setOtherColor(event.target.options[event.target.selectedIndex].text)
    }
    
    const discountCodeInputHandler = (event) => {
        setDiscountCode(event.target.value)
    }

    const getEnginePrice = () => {
        if (engine === 'electric') {
            return 10000
        } else if (engine === 'hybrid') {
            return 7500
        } else if (engine === 'diesel') {
            return 5000
        } else {
            return 0
        }
    }

    const getColorPrice = () => {
        if (color === 'special blue') {
            return 500
        } else if (color === 'other') {
            return 3000
        } else {
            return 0
        }
    }

    const getMileageDiscount = () => {
        if (mileage > 400000) {
            return 50
        } else if ( mileage > 100000) {
            return 30
        } else if (mileage > 50000) {
            return 20
        } else if (mileage > 20000) {
            return 15
        } else if (mileage > 0) {
            return 10
        } else {
            return 0
        }
    }

    const getDiscountWithCode = () => {
        if (discountCode === 'get10off') {
            return 10
        } else {
            return 'wrong code'
        }
    }


    const getPriceForExtra = () => {
        return getEnginePrice() + getColorPrice()
    }
    
    const getPriceAfterDiscounts = () => {
        return (car.price.basePrice + getPriceForExtra()) - ((car.price.basePrice + getPriceForExtra()) * car.price.allDiscounts / 100)
    }



    const formSubmitHandler = (event) => {
        event.preventDefault()

        const newCar = {
            brand: brand,
            model: model,
            engineType: engine,
            mileage: mileage,
            color: color,
            otherColor: otherColor,
            price: {
                basePrice: basePrice,
                enginePrice: getEnginePrice(),
                colorPrice: getColorPrice(),
                priceForExtra: getPriceForExtra(),
                mileageDiscount: getMileageDiscount(),
                discountCode: !isNaN(getDiscountWithCode()) ? (getDiscountWithCode() + "%") : getDiscountWithCode(),
                allDiscounts: !isNaN(getDiscountWithCode()) ? getMileageDiscount() + getDiscountWithCode() : getMileageDiscount()
            },
        }
        setCar(newCar)

        setBrand('')
        setModel('')
        setEngine(engineTypes[0])
        setBasePrice('')
        setMileage('')
        setColor(colors[0])
        setOtherColor(otherColors[0])
    }

    // let models = carsArr.map(model => model)
    
    // console.log(models)
    // console.log(carsArr)
    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div className="form-control">
                    <label htmlFor='brand'>Brand:</label>
                    {/* <select name='brand' onChange={brandInputHandler}>
                        {carsArr.map((car, index) => <Brand data={car} key={index}/>)}
                    </select> */}
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
                    {/* <select name='model' onChange={modelInputHandler}></select> */}
                </div>
                <div className="form-control">
                    <label htmlFor='engine-type'>Engine type:</label>
                    <select name='engine-type' onChange={engineInputHandler} >
                        <Option arr={engineTypes} />
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor='base-price'>Base price:</label>
                    <input type='number' name='base-price' placeholder='Enter base price' value={basePrice} onChange={basePriceInputHandler} />
                    {!basePrice &&
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
                <div className="form-control">
                    <label htmlFor='discount-code'>Discount code:</label>
                    <input type='text' name='discount-code' placeholder='Enter discount code' value={discountCode} onChange={discountCodeInputHandler} />
                </div>

                <button type='submit' 
                // disabled={!brand || !model || !basePrice || !mileage}
                >Submit</button>
            </form>

            {car && (
                <div className='car-form-output'>
                    <h1>{car.brand} ({car.model})</h1>
                    <h3>Engine type: {car.engineType}</h3>
                    <ul>
                        <li>Base price: {car.basePrice} eur</li>
                        <li>Mileage: {car.mileage} km</li>
                        <li>{car.color === 'Other' ? `Special color: ${car.otherColor}` : `Color: ${car.color}`}</li>
                    </ul>
                        <h4>Base price: {car.price.basePrice}</h4>

                    <ul>
                        <li>Price for engine: {car.price.enginePrice}</li>
                        <li>Price for color: {car.price.colorPrice}</li>
                    </ul>
                    <h4>Price for extra services: {car.price.priceForExtra}</h4>

                    <ul>
                        <li>Mileage discount: {car.price.mileageDiscount}%</li>
                        <li>Discount from code: {car.price.discountCode}</li>
                    </ul>
                    <h4>All discounts: {car.price.allDiscounts}%</h4>

                    <h4>Price before VAT: {getPriceAfterDiscounts()}</h4>
                    <h4>VAT: {getPriceAfterDiscounts() * 0.21}</h4>
                    <h4>Final price: {getPriceAfterDiscounts() * 1.21}</h4>
                </div>
            )}
        </>
    )
}