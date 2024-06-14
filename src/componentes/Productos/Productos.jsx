import React, { useEffect, useState } from 'react'
import "./Productos.css"
import Productos_targ from './Productos_targ.jsx'
function Productos() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://6668f5c02e964a6dfed36157.mockapi.io/api/v1/ProductosNutricionales`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="contenedor_productos">
      <p className="subtitulo">SUPLEMENTOS</p>
      <div className="orgprod">
      {users.map((personajes) => (
        <Productos_targ producto={personajes} key={personajes.id}/>
      ))}
      
      </div>
    </div>
  )
}

export default Productos