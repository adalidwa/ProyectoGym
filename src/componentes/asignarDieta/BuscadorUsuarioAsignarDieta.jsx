import React, { useEffect, useState } from "react";
import Flecha from "../../assets/imagens/Flecha.png";
import VolverAtras from "../Productos/VolverAtras";
import "./BuscadorUsuarioAsignarDieta.css";

const BuscadorUsuarioAsignarDieta = () => {
  

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(`https://6661a6e163e6a0189feaef7e.mockapi.io/Users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedUser(null); // Limpiamos el usuario seleccionado cuando se realiza una nueva búsqueda
  };

  const handleSelectUser = (event) => {
    const userId = event.target.value;
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
  };

  const filteredUsers = users.filter((user) =>
    user.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="BuscadorUsuAsigdi">
      <div className="BuscadorUsuAsigTextodi">
        <VolverAtras/>
        <p>DIETA A ASIGNAR</p>
      </div>

      <div className="BuscadorUsuAsigimagendi">
        <input
          placeholder="Buscar..."
          className="input-field"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />

        {filteredUsers.length > 0 && (
          <div className="dropdown-container">
            <select className="dropdown1" onChange={handleSelectUser} value={selectedUser ? selectedUser.id : ''}>
              <option value="">Selecciona un usuario</option>
              {filteredUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstname}
                </option>
              ))}
            </select>

            {selectedUser && (
              <select className="dropdown1" defaultValue="Desayuno">
                <option value="Desayuno">Desayuno</option>
                <option value="Almuerzo">Almuerzo</option>
                <option value="Cena">Cena</option>
              </select>
            )}
          </div>
        )}
      </div>
    </div>

  );
};

export default BuscadorUsuarioAsignarDieta;
