import React, { useEffect, useState } from 'react';
import './PerfilEntrenador.css';
import useEntre from '../../assets/store/useEntre.js'
function PerfilEntrenador() {
  const id = useEntre((state) => state.id);
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(`https://665fd3625425580055b101dd.mockapi.io/api/v1/Entrenadores/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    
    <div className="PerfilEntrenador">
      <section className="entrendor">
        <img src={users.avatar} lt="Entrenador" className="entrenador-img" />
        <div className="entrenador-info">
          <h2>{users.firstname} {users.lastname}</h2>
          <p>🕓{users.time}</p>
        </div>
      </section>
    </div>
  );
}

export default PerfilEntrenador;

