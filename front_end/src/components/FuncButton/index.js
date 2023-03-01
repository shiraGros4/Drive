import React from 'react'


function FuncButton({func , name}) {
  return (
    <div>
        <button onClick={func}>{name}</button>
    </div>
  )
}

export default FuncButton