import React, { useEffect, useState } from 'react'
import ClasesCircuitos from "./ClasesCircuitos.jsx";
import "./ClasesDisponibles.css"
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion';
import useStore from '../../assets/store/useStore';
const ClasesDisponibles = () => {
  const id = useStore((state) => state.id);
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://666997ea2e964a6dfed5c8e7.mockapi.io/api/v1/Cursos`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  console.log(users);

  return (
    
    <div className="contenedor_usuario">
      <BarraNavegacion id={id}/>
      <div className="contenedor_targetas_C"> 
      {users.map((personajes) => (
      <ClasesCircuitos key={personajes.id} producto={personajes}/>
      ))}
      </div>

    </div>
  )
}

export default ClasesDisponibles;