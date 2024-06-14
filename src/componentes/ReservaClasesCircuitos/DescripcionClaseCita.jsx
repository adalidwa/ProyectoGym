import React, { useEffect, useState } from 'react';
import ComponenteReservar from '../ComponenteReservar/ComponenteReservar';
import './DescripcionClaseCita.css';


const DescripcionClaseCita = (props) => {
  const users=props.users;
  console.log(users)

  function aletoriedad() {
    const numeros = [];
  
      numeros.push(Math.floor(Math.random() * 10)); // Puedes ajustar el rango según tus necesidades

  
    numeros.toString();
    return numeros;
  }

 



  const [entre, setEntre] = useState([])

  useEffect(() => {
    fetch(`https://665fd3625425580055b101dd.mockapi.io/api/v1/Entrenadores/`+ aletoriedad())
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEntre(data);
      });
  }, []);
  
  const [showModal, setShowModal] = useState(false);
const handleButtonClick = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
    setShowModal(false);
};

  return (
    <div className="cita">
      <div className="componente_izquierda">
        <h2 className='TituloCita'> {users.Dias} - {users.NombreCurso}</h2>
        <div className="hora">
          <span>🕔{users.Hora}</span>
          
        </div>
        <div className="ubicacion">
          <p>➡️{users.Sala}</p>
          <p>🏭{users.Lugar}</p>
          <p>{users.Espacio}</p>
        </div>
        <button className="btn-enviar" onClick={handleButtonClick}>RESERVAR✅</button>
        {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <ComponenteReservar users={users} entre={entre} onClose={handleCloseModal} />
                    </div>
                </div>
            )}
        
      </div>
      <div className="componente_derecha">
        <div className="instructora">
          <img src={entre.avatar} alt="entrenador" />
          <p>🏃‍♀️Instructor:</p>
          <p>{entre.firsname}-{entre.lastname}</p>
        </div>
      </div>      
      
    </div>
    
  );
};


export default DescripcionClaseCita;
