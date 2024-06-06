import React from "react";
import "./view3.css";
import { Headd } from "../../components/head/head";
import { Tittle } from "../../components/tittle/tittle";
import Navbar from "../../components/navbar/navbar";
import { Options } from "../../components/options/options";
import { Button } from "../../components/button/button";

export const View3 = () => {
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
      <div className="tipo">
        <Options nombre={"Mancuernas"} imagen={"./public/image 190.png"}></Options>
        <Options nombre={"Banco Plano"} imagen={"./public/image 191.png"}></Options>
      </div>
      <div className="contButton">
        <Button/>
      </div>
    </div>
  );
};
