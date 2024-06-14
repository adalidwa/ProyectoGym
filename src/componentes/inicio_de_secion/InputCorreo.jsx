import React, { useState } from 'react'

function InputCorreo({ inputValueCorreo, handleChangeCorreo }) {


  return (
    <input 
    type="text" 
    className="correo_contra" 
    placeholder="Correo electronico"
    value={inputValueCorreo}
    onChange={handleChangeCorreo}  
    ></input>
  )
}

export default InputCorreo