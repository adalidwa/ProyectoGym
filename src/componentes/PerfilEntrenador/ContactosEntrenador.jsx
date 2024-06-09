import React from "react";
import "./ContactosEntrenador.css";

const ContactosEntrenador = ({ number, email }) => {
  return (
    <div className="Contactos">
      <h3>Contacto</h3>
      <p>Tel: {number}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ContactosEntrenador;