import React, { useEffect, useState } from 'react'
import "./Producto.css"
import VolverAtras from './VolverAtras'
import { useSearchParams } from 'react-router-dom';
function Producto() {
    let [searchParams, setSearchParams] = useSearchParams();
    const id=searchParams.get("id")
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch(`https://6668f5c02e964a6dfed36157.mockapi.io/api/v1/ProductosNutricionales/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        });
    }, []);


  return (
    
    <div className="contenedor_usuario">
        <VolverAtras/>
        <div className="contenedor_Producto">
            <h1>{users.NameProduct}</h1>
            <img className="producto_imagen" src={users.img} alt="" />
            <h2 className="descripcion">{users.descripcion}</h2>
        </div>
    </div>
  )
}

export default Producto