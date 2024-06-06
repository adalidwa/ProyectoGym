import React from "react";
import "./view2.css";
import { Headd } from "../../components/head/head";
import { Tittle } from "../../components/tittle/tittle";
import Navbar from "../../components/navbar/navbar";
import { Options } from "../../components/options/options";
import { Button } from "../../components/button/button";

export const View2 = () => {
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
        <Navbar/>
      </div>
      <div className="tipo">
        <Options nombre={"Hombros"} imagen={"./public/part1.png"}></Options>
        <Options nombre={"Biceps"} imagen={"./public/part2.png"}></Options>
        <Options nombre={"Musculo Dorsal Ancho"} imagen={"./public/part3.png"}></Options>
      </div>
      <div className="contButton">
        <Button></Button>
      </div>
    </div>
  );
};
