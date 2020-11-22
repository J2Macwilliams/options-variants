import React, { useState, useEffect } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { BsFillXSquareFill } from 'react-icons/bs'
import { ImArrowUp } from 'react-icons/im'
import { TextField } from '@material-ui/core'
import { createOption, removeOption, createProduct } from '../Actions'
import { connect } from 'react-redux'


const Options = (props) => {
  const [count, setCount] = useState(0)
  const [change, setChange] = useState(0)

  const [optionFields, setOptionFields] = useState([])
  const [itemVariants, setItemVariants] = useState({
    code: '',
    image: '',
    price: 0,
    weight: 0,
    sku: ''

  })
  // Just looking for a re-render here
  useEffect(() => { }, [change])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('OptionFields', optionFields)
  // }

  const handleAddOptions = () => {
    if (count <= 2) {
      const values = [...optionFields];
      values.push({
        option: 'Option ' + count,
        choices: []
      });

      setOptionFields(values);
      // Increment for Option constraint
      setCount(count + 1)
    }
  };

  const handleRemoveOptions = (e, index) => {
    e.preventDefault();
    const values = [...optionFields];
    values.splice(index, 1);
    setOptionFields(values);
    setCount(count - 1)
  };

  const handleAddValues = (e, index) => {
    e.preventDefault()
    const values = [...optionFields]
    const variants = values[index].choices
    variants.push({ choice: "" })
    setChange(change + 1)
  };

  const handleRemoveValues = (e, index, vIdx) => {
    e.preventDefault()
    const values = [...optionFields];
    const variants = values[index].choices
    variants.pop();
    setChange(change - 1)
  };

  const handleChangeOption = (index, event) => {
    const values = [...optionFields]
    values[index][event.target.name] = event.target.value
    setOptionFields(values)
  }

  const handleChangeValue = (vIdx, index, event) => {
    const values = [...optionFields]
    const variants = values[index].choices
    variants[vIdx][event.target.name] = event.target.value
    setChange(change + 1)
  }



  const handleChange = e => {
    e.preventDefault()
    setItemVariants({
      ...itemVariants,
      [e.target.name]: e.target.value
    })

  }

  const clearProduct = () => {
    setItemVariants({
      code: '',
      image: '',
      price: 0,
      weight: 0,
      sku: ''
    })
    setOptionFields([])
  }

  const productSubmit = (e) => {
    e.preventDefault()
    // console.log(itemVariants)
    props.createProduct(itemVariants)
  }

  if (props.products) {
    console.log("ProductCreationResponse", props.products)
  }
  return (
    <>
      <div className="options">
        <div className="optionTop">
          <h3>Options</h3>
          <div>
            <FaPlusSquare onClick={ handleAddOptions } className="iconsPlus" />
            {/* <ImArrowUp onClick={ handleSubmit } type="submit" className="iconsPlus" /> */ }
          </div>
        </div>
        <div >
          <form className="optionBlock"
          // onSubmit={ handleSubmit }
          >
            { optionFields.map((option, index) => (
              <div key={ index } className='optBox'>
                <div className="optTitle">
                  <TextField
                    variant="filled"
                    name="option"
                    label="Option"
                    value={ option.option }
                    onChange={ event => handleChangeOption(index, event) }
                  />
                  <BsFillXSquareFill className="iconsPlus" onClick={ (e) => handleRemoveOptions(e, index) } />
                  <FaPlusSquare onClick={ (e) => handleAddValues(e, index) } className="iconsPlus" />
                </div>
                { option.choices.map((v, vIdx) => (
                  <div key={ vIdx }>

                    <TextField
                      variant="filled"
                      name='choice'
                      label="value"
                      value={ v.choices }
                      onChange={ event => handleChangeValue(vIdx, index, event) }
                    />
                    <BsFillXSquareFill className="iconsPlus"
                      onClick={ (e) => handleRemoveValues(e, index, vIdx) }
                    />
                  </div>
                )) }
              </div>
            )) }
          </form>
        </div>
      </div>
      <div className="variants">
        <div className="variantsTop">
          <h3>Variants</h3>
          <ImArrowUp type="submit" onClick={ productSubmit } className="iconsPlus" />
        </div>
        <div className="variantsBottom">
          <form className="form" >
            <label htmlFor="Product Code">Product Code
            <input name="code" onChange={ handleChange } value={ itemVariants.code } type="text" />
            </label>
            <label htmlFor="Image">Image
            <input name="image" onChange={ e => handleChange(e) } value={ itemVariants.image } type="file" />
            </label>
            { optionFields.map((option, index) => (
              <div>
                <label key={ index }>{ option.option }</label>
                <select onChange={ handleChange } name={ option.option } value={ itemVariants[option] }>
                  <option value="---">---</option>
                  { option.choices.map((v, vIdx) =>
                    <option key={ vIdx } value={ v.choice }>{ v.choice }</option>
                  ) }
                </select>
              </div>
            )) }
            <label htmlFor="Price">Price
            <input name="price" onChange={ e => handleChange(e) } value={ itemVariants.price } type="number" />
            </label>
            <label htmlFor="Weight">Weight
            <input name="weight" onChange={ e => handleChange(e) } value={ itemVariants.weight } type="number" />
            </label>
            <label htmlFor="SKU">SKU
            <input name="sku" onChange={ e => handleChange(e) } value={ itemVariants.sku } type="text" />
            </label>
            <label >Remove
            <BsFillXSquareFill className='iconsPlus' onClick={ () => clearProduct() } />
            </label>

          </form>

        </div>
      </div >
    </>
  )
}
const mapStateToProps = (state) => {
  const { options, products } = state
  return {
    options,
    products
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addOption: (option) => dispatch(createOption(option)),
    deleteOption: (option) => dispatch(removeOption(option)),
    createProduct: (product) => dispatch(createProduct(product))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Options)

