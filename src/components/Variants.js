import React, {useState, useEffect} from 'react'

import { BsFillXSquareFill } from 'react-icons/bs'
import { connect } from 'react-redux'
import { ImArrowUp } from 'react-icons/im'
const Variants = (props) => {
  const [variantsArr, setVariantsArr] = useState([])

  useEffect(() => {
    if (props.options) {
      setVariantsArr(Array.from(props.options))
      console.log("Variants_useEffect", props.options )
    }
  }, [props])
  return (
    <>
      <div className="variants">
        <div className="variantsTop">
          <h3>Variants</h3>
          <ImArrowUp type="submit" className="iconsPlus" />
        </div>
        <form className="form" >
          <label htmlFor="Product Code">Product Code
            <input type="text" />
          </label>
          <label htmlFor="Image">Image
            <input type="file" />
          </label>
          { props.options ?
            props.options.map((option, Index) => (
              <label key={ Index } htmlFor="Option">{ `Option ${option}` }
                <select name={ option} >
                <option value="">---</option>
                  
                </select>
              </label>
            )): ""}
          <label htmlFor="Price">Price
            <input type="number" />
          </label>
          <label htmlFor="Weight">Weight
            <input type="number" />
          </label>
          <label htmlFor="SKU">SKU
            <input type="text" />
          </label>
        </form>
        <BsFillXSquareFill />
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