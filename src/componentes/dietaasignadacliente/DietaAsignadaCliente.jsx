import React from 'react'
import './DietaAsignadaCliente.css';
import DietaFechaCliente from './DietaFechaCliente';
import DietAClienteasignar from './DietaClienteAsignar';
import DietaComentario from './DietaComentario';
import DietaDescripcion from './DietaDescripcion';
const DietaAsignadaCliente = () => {
  return (
    <div className='DietaAsignada' >
        <DietaFechaCliente/>
        <DietaDescripcion/>
        <DietAClienteasignar/>
        <DietaComentario/>
    </div>
  )
}

export default DietaAsignadaCliente