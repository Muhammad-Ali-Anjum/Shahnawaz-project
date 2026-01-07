import React from 'react'

function Header({names,age}) {
  return (
    <div>
     <h1>{names}</h1>
     <h1>{age}</h1>

    </div>
  )
}

export default Header