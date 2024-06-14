import React, { useEffect, useState } from 'react'
import ClasesCalendario from "./ClasesCalendario.jsx";
import DescripcionClaseCita from "./DescripcionClaseCita.jsx"
import DescripcionOtra from "./DescripcionOtra.jsx"
import BarraNavegacion from '../BarraNavegacionAll/BarraNavegacion';
import useStore from '../../assets/store/useStore';
import "./ReservaClasesCircuitos.css"
import { useSearchParams } from 'react-router-dom';


const ReservaClasesCircuitos = () => {
  const id = useStore((state) => state.id);
  const [users, setUsers] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  const ide=searchParams.get("id")

  useEffect(() => {
    fetch(`https://666997ea2e964a6dfed5c8e7.mockapi.io/api/v1/Cursos/${ide}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="contenedor_usuario">
      <BarraNavegacion id={id}/>
      <div className="contenendor_Reserva">
        <ClasesCalendario/>
        <DescripcionClaseCita users={users}/>
      </div>
    </div>
  )
}

export default ReservaClasesCircuitos;