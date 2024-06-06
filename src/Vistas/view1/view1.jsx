import React from "react";
import "./view1.css";
import { Headd } from "../../components/head/head";
import Navbar from "../../components/navbar/navbar";
import { Tittle } from "../../components/tittle/tittle";

export const View1 = () => {
  return (
    <div className="container">
      <div>
        <img src="./public/Dark.png" alt="status" />
      </div>
      <div className="cabecera">
        <Headd />
      </div>
      <div className="portada">
        <img src="./public/Rectangle 9.png" alt="imagen" />
      </div>
      <div className="titulo">
        <Tittle titulo={"REMOS CON MANCUERNAS"}></Tittle>
      </div>
      <div className="opciones">
        <Navbar />
      </div>
      <section className="containerTexto">
        <p className="texto">
          Con los pies separados a la anchura de los hombros frente al banco.
          Empuja el trasero hacia atrás y baja el torso hacia abajo, extendiendo
          el brazo para descansar la palma de la mano en el banco. Asegúrate de
          que tus hombros se mantengan por encima de las caderas. Coge la
          mancuerna con la mano de trabajo. Aprieta los glúteos y los
          abdominales para crear tensión en todo el cuerpo. Tu espalda debe
          estar plana, con la cabeza en una posición neutral. Aprieta los
          músculos de la parte media de la espalda para subir el codo, remar el
          peso. Mantén los hombros nivelados y evita girar la parte baja de la
          espalda. Haz una pausa para un ritmo, luego vuelve a bajar el peso.
        </p>
      </section>
    </div>
  );
};
