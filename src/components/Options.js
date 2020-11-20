import React, { useState, useEffect } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { BsFillXSquareFill } from 'react-icons/bs'
import { createOption, removeOption } from '../Actions'
import { connect } from 'react-redux'

const Options = (props) => {
  const [count, setCount] = useState(0)

  const [myArr, setMyArr] = useState([])
  const [opt, setOpt] = useState({
    title: `Option ${count}`
  })
  // const [updateOpt, setUpdateOpt] = useState({
  //   title: ''
  // })

  // const handleChange = e => {
  //   setUpdateOpt(
  //     {
  //       ...opt,
  //       [e.target.name]: e.target.value
  //     }
  //   )
  // }
  // console.log('props', props, opt)
  const createOption = () => {
    console.log(count)
    if (count < 3) {
      props.addOption(count)
      setCount(count + 1)
    }

    console.log('finish createOption')
  }
  useEffect(() => {
    if (props.options) {


      setMyArr(Array.from(props.options))

      // console.log("useEffect", props.options, "count", count)
    }
  }, [props, count])

  // if (props.options) {
  //   console.log('optionsComponent', props.options, count)
  // }

  return (
    <>
      <div className="options">
        <div className="optionTop">
          <h3>Options</h3>
          <FaPlusSquare onClick={ createOption } className="iconsPlus" />
        </div>
        <div className="optionBlock">


          { myArr ? myArr.map((choice, index) => (
            <div key={ index } className="optBox">
              <div className="optTitle">

                <input
                  type="text"
                  name='title'
                  // onChange={ handleChange }
                  placeholder={ `Option ${choice}` }
                />
                <BsFillXSquareFill className="smIcons" />
                <FaPlusSquare className="smIcons" />
              </div>
            </div>
          )) : "" }
        </div>
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