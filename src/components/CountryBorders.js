import React from 'react'

const CountryBorders = ({borderName}) => {
  return (

   

    <div>
      {borderName.map((elem)=>elem).join(",")}
    </div>
  )
}

export default CountryBorders
