import React from 'react'
import Options from './Options'
import Variants from './Variants'

const OV = () => {
  return (
    <>
      <div className="optionsValues">
        <div className="ovTitle">
          <h3>Options/Variants</h3>
        </div>
        <Options />
        <Variants />

      </div>
    </>
  )
}

export default OV
