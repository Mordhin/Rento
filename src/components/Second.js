import React from 'react'
import choice from '../assets/choice.svg'
import towing from '../assets/towing.svg'
import offroad from '../assets/offroad.svg'

const Second = () => {
  return (
    <div className="deuxieme">
      <div className="section">
        <img src={towing} alt="" />
        <p>Ideo urbs venerabilis post superbas efferatarum gentium 
         velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda 
         patrimonii iura permisit.</p>
      </div>
      <div className="section">
        <img src={choice} alt="" />
        <p>Ideo urbs venerabilis post superbas efferatarum gentium 
         velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda 
         patrimonii iura permisit.</p>
      </div>
      <div className="section">
        <img src={offroad} alt="" /> 
        <p>Ideo urbs venerabilis post superbas efferatarum gentium 
         velut frugi parens et prudens et dives Caesaribus tamquam liberis suis regenda 
         patrimonii iura permisit.</p> 
      </div>
    </div>
  )
}

export default Second