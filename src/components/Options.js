import React, { useState, useEffect } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { BsFillXSquareFill } from 'react-icons/bs'
import { ImArrowUp } from 'react-icons/im'
import { TextField } from '@material-ui/core'
import { createOption, removeOption } from '../Actions'
import { connect } from 'react-redux'


const Options = (props) => {
  const [count, setCount] = useState(0)
  const [change, setChange] = useState(0)
  // const [myArr, setMyArr] = useState([])
  const [optionFields, setOptionFields] = useState([])

  // Just looking for a re-render here
  useEffect(() => { }, [change])


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
    // console.log('hrOptions', values)
    values.splice(index, 1);
    setOptionFields(values);
    setCount(count - 1)
  };

  const handleAddValues = (e, index) => {
    e.preventDefault()
    const values = [...optionFields]
    // console.log('addValues', values[index].choices)
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
    // const options = new Set(values)
    // console.log('check for Dupes', options)
    values[index][event.target.name] = event.target.value
    console.log('changeOption', values)
    setOptionFields(values)
  }

  const handleChangeValue = (vIdx, index, event) => {
    const values = [...optionFields]
    const variants = values[index].choices
    variants[vIdx][event.target.name] = event.target.value

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('OptionFields', optionFields)
  }



  return (
    <>
      <div className="options">
        <div className="optionTop">
          <h3>Options</h3>

          <div>
            <FaPlusSquare onClick={ handleAddOptions } className="iconsPlus" />
            <ImArrowUp onClick={ handleSubmit } type="submit" className="iconsPlus" />

          </div>

        </div>
        <div >
          <form className="optionBlock" onSubmit={ handleSubmit }>
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
    </>
  )
}
const mapStateToProps = (state) => {
  const { options } = state
  return {
    options
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addOption: (option) => dispatch(createOption(option)),
    deleteOption: (option) => dispatch(removeOption(option))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Options)

// { type: "ADD_OPTION", payload: option }
// console.log('updateOpt', updateOpt)
// console.log('props', props.options)
// const createOption = () => {
//   console.log(count)
//   if (count < 3) {
//     props.addOption("Option" + " " + count)
//     setCount(count + 1)
//   }

//   console.log('finish createOption')
// }
// useEffect(() => {
//   if (props.options) {


//     setMyArr(Array.from(props.options))


//   }
// }, [props, count])

// if (props.options) {
//   console.log('optionsComponent', props.options, count)
// }

{/* { myArr ? myArr.map((choice, index) => (
            <div key={ index } className="optBox">
              <div className="optTitle">
               
                <input
                  type="text"
                  name='title'
                  data-id={index}
                  onChange={ handleChange }
                  placeholder={ choice }
                />
                <BsFillXSquareFill className="smIcons" />
                <FaPlusSquare className="smIcons" />
              </div>
            </div>
          )) : "" } */}



{/* { myArr.length > 0 ?
          props.options.map(opt => (
            <div key={ choice.title } className="opt">
              <div className="optTop">
                <input
                  type="text"
                  onChange={ handleChange }
                  placeholder={ option.title }
                /> */}

{/* </div> */ }
{/* {opt.values ? opt.values.map(v =>
                <div className="optValue">
                  <input
                    type="text"
                    onChange={updateValue}
                    placeholder={ v.title? v.title :`Value ${v.counter}`  }
                  />
                  <FaMinusSquare onClick={deleteValue(v.name)}/>
                </div>
              )
                : ''
              } */}
{/* </div>
          )) : ''
        } */}