import React, { useState } from 'react'
import "./InputContraseña.css"
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
function InputContraseña({text,inputValueContra,handleChangeContra} ) {
    const [showPassword, setShowPassword] = useState(false)   
    /* constante showpasword el actualizador setshowpasword actualiza el valor =usestate(defien el valor del showpaswor)*/

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
        /* la funcion setshowpasword actualiza le contenido del showpasword que intercala en true o false */
      };
  return (
    <div className="contenedor_InputContra">
        <input 
        type={showPassword ? 'text' : 'password'}  /* dependiande del valor del showpsword cambia entre text o password true false */
        className="correo_contra" 
        placeholder={text}  
        value={inputValueContra}
        onChange={handleChangeContra}  
        ></input>
        {showPassword ? (<FaEye onClick={toggleShowPassword} color='white' size={30} />) : (<FaEyeSlash onClick={toggleShowPassword} color='white' size={30} />)}
    </div>
  )
}

export default InputContraseña