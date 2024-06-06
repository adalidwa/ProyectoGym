import React from "react";
import "./view6.css";
import { Headd } from "../../components/head/head";
import { Tittle } from "../../components/tittle/tittle";

export const View6 = () => {
  return (
    <div className="container">
      <div>
        <img src="./public/Dark.png" alt="status" />
      </div>
      <div className="cabecera">
        <Headd />
      </div>
      <div className="portada">
        <img src="./public/image 227.png" alt="imag" />
      </div>
      <div className="titulo">
        <Tittle titulo={"Puente de Gluteo"}></Tittle>
      </div>
      <section className="containerTexto">
        <p className="texto">
          Túmbate boca arriba con la espalda pegada al suelo y flexiona las
          rodillas formando un ángulo de 90 grados. Mantén los pies en
          perpendicular a los hombros y los brazos pegados al suelo con las
          palmas de las manos hacia abajo. Después, levanta las caderas buscando
          que espalda, glúteos y muslos formen una línea recta. La clave está en
          utilizar los músculos de las piernas. Realiza entre cinco y diez
          repeticiones en cada serie.
        </p>
      </section>
    </div>
  );
};
