import React from 'react'
import fotoprueba from '../img/fotoprueba.png';
import './ImagenRutinaAsignada.css'
const ImagenRutinaAsignada = (props) => {
    const users =props.users
  return (
    <div className='imgtitulo'>
        <img src={users.avatar} alt="" />
        <p> {users.name} </p>
    </div>
  )
}

export default ImagenRutinaAsignada