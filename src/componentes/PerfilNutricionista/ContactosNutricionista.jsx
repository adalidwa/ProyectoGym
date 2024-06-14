import React from "react";
import "./ContactosNutricionista.css";

const ContactosNutricionista = ({ number, email }) => {
  return (
    <div className="Contactos">
      <h3>Contacto</h3>
      <p>Tel: {number}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ContactosNutricionista;