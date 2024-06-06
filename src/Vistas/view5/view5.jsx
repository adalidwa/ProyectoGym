import React from "react";
import { Headd } from "../../components/head/head";
import "./view5.css"
import { Header } from "../../components/header/header";
import { Video } from "../../components/video/video";

export const View5 = () => {
  return (
    <div className="container">
      <div>
        <img src="./public/Dark.png" alt="status" />
      </div>
      <div className="cabecera">
        <Headd />
      </div>
      <div className="contEncabezado">
        <Header encabezado={"Ejercicios de Estiramiento"}></Header>
      </div>
      <div className="contVideos">
        <Video nombre={"Puente De Gluteo"} imagen={"./public/img-videos/gym5.png"} minutos={"10 Minutes"} rep={"3 Rep"}></Video>
        <Video nombre={"Pancha Isometrica"} imagen={"./public/img-videos/gym6.png"} minutos={"15 Minutes"} rep={"4 Rep"}></Video>
        <Video nombre={"Estiramiento Piramidal"} imagen={"./public/img-videos/gym7.png"} minutos={"10 Minutes"} rep={"4 Rep"}></Video>
        <Video nombre={"Torsion Lumbar"} imagen={"./public/img-videos/gym8.png"} minutos={"15 Minutes"} rep={"4 Rep"}></Video>
      </div>
    </div>
  );
};