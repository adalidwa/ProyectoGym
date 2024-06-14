import React, { useEffect, useState } from 'react'
import ImagenRutinaAsignada from './ImagenRutinaAsignada'
import OpcionesRutinaAsignada from './OpcionesRutinaAsignada'
import BotonRutinaAsignada from './BotonRutinaAsignada'
import './RutinaAsignadaCliente.css';

const RutinaAsignadaCliente = () => {
  function aletoriedad() {
    const numeros = [];
    
      numeros.push(Math.floor(Math.random() * 3)); // Puedes ajustar el rango según tus necesidades
    
  
    numeros.toString();
    return numeros;
  }
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://665fd3625425580055b101dd.mockapi.io/api/v1/RutinaAsignada/"+ aletoriedad())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className='Todo'>
        <ImagenRutinaAsignada users={users}/>
        <OpcionesRutinaAsignada users={users}/>
        <BotonRutinaAsignada/>
    </div>
  )
}

export default RutinaAsignadaCliente