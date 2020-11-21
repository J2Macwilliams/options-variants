import React, {useState, useEffect} from 'react'

import { BsFillXSquareFill } from 'react-icons/bs'
import { connect } from 'react-redux'
import { ImArrowUp } from 'react-icons/im'
const Variants = (props) => {
  const [optionValuesArr, setOptionValuesArr] = useState([])
  const [itemVariants, setItemVariants] = useState({
    code: '',
    image: '',
    price: 0,
    weight: 0,
    sku: ''
  
  })

  const handleChange = e => {
    setItemVariants({
      ...itemVariants,
      [e.target.name]: e.target.value
    })
  }

  // useEffect(() => {
  //   if (props.options) {
  //     setOptionValuesArr(Array.from(props.options))
  //     console.log("Variants_useEffect", props.options )
  //   }
  // }, [props])
  return (
    <>
      <div className="variants">
        <div className="variantsTop">
          <h3>Variants</h3>
          <ImArrowUp  type="submit" className="iconsPlus" />
        </div>
        <div className="variantsBottom">
        <form className="form" >
          <label htmlFor="Product Code">Product Code
            <input name="" onChange={handleChange} value="" type="text" />
          </label>
          <label htmlFor="Image">Image
            <input name="" onChange={handleChange} value="" type="file" />
          </label>
          {/* { props.options ?
            props.options.map((option, Index) => (
              <label key={ Index } htmlFor="Option">{ option }
                <select name={ option} >
                <option onChange={handleChange} value="">---</option>
                  
                </select>
              </label>
            )): ""} */}
          <label htmlFor="Price">Price
            <input name="" onChange={handleChange} value="" type="number" />
          </label>
          <label htmlFor="Weight">Weight
            <input name="" onChange={handleChange} value="" type="number" />
          </label>
          <label htmlFor="SKU">SKU
            <input name="" onChange={handleChange} value="" type="text" />
          </label>
          <label >Remove
            <BsFillXSquareFill className='iconsPlus'/>
          </label>
          
        </form>
        
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { options } = state
  return {
    options
  }
}
export default connect(mapStateToProps)(Variants)

{/* { option.values ? option.values.map((v, index) => (
                    <option key={ index } value={ v.name }>{ v.name }</option>
                  )): "" } */}