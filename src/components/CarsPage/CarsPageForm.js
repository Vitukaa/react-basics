import React from 'react'
import Option from "./Option"


export default function CarsPageForm(props) {
    const { onFormSubmit, brand, onBrandInput, model, onModelInput, onEngineType, engineTypes, basePrice, mileage, onBasePriceInput, onMileageInput, onColorInput,onOtherColorInput, otherColors, discountCode, onDiscountCodeInput, colors, color, } = props
  return (
    <form onSubmit={onFormSubmit}>
    <div className="form-control">
        <label htmlFor='brand'>Brand:</label>
        {/* <select name='brand' onChange={brandInputHandler}>
            {carsArr.map((car, index) => <Brand data={car} key={index}/>)}
        </select> */}
        <input type='text' name='brand' placeholder='Enter brand' value={brand} onChange={onBrandInput}/>
        {!brand &&
            <span>Required input</span>
        }
    </div>
    <div className="form-control">
        <label htmlFor='model'>Model:</label>
        <input type='text' name='model' placeholder='Enter model' value={model} onChange={onModelInput} />
        {!model &&
            <span>Required input</span>
        }
        {/* <select name='model' onChange={modelInputHandler}></select> */}
    </div>
    <div className="form-control">
        <label htmlFor='engine-type'>Engine type:</label>
        <select name='engine-type' onChange={onEngineType} >
            <Option arr={engineTypes} />
        </select>
    </div>
    <div className="form-control">
        <label htmlFor='base-price'>Base price:</label>
        <input type='number' name='base-price' placeholder='Enter base price' value={basePrice} onChange={onBasePriceInput} />
        {!basePrice &&
            <span>Required input</span>
        }
    </div>
    <div className="form-control">
        <label htmlFor='mileage'>Mileage:</label>
        <input type='number' name='mileage' placeholder='Enter mileage' value={mileage} onChange={onMileageInput} />
        {!mileage &&
            <span>Required input</span>
        }
    </div>
    <div className="form-control">
        <label htmlFor='color'>Color:</label>
        <select name='color' onChange={onColorInput}>
            <Option arr={colors} />
        </select>
    </div>
    {color === 'Other' && (
        
        <div className="form-control">
            <label htmlFor='otherColor'>Other color:</label>
            <select name='otherColor' onChange={onOtherColorInput}>
                <Option arr={otherColors} />
            </select>
        </div>
        )
    }
    <div className="form-control">
        <label htmlFor='discount-code'>Discount code:</label>
        <input type='text' name='discount-code' placeholder='Enter discount code' value={discountCode} onChange={onDiscountCodeInput} />
    </div>

    <button type='submit' 
    // disabled={!brand || !model || !basePrice || !mileage}
    >Submit</button>
</form>
  )
}
