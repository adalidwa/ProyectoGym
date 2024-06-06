import React from "react";
import { Headd } from "../../components/head/head";
import "./view4.css"
import { Header } from "../../components/header/header";
import { Video } from "../../components/video/video";

export const View4 = () => {
  return (
    <div className="container">
      <div>
        <img src="./public/Dark.png" alt="status" />
      </div>
      <div className="cabecera">
        <Headd />
      </div>
      <div className="contEncabezado">
        <Header encabezado={"Ejercicios de Recuperamiento"}></Header>
      </div>
      <div className="contVideos">
        <Video nombre={"Gato Vaca"} imagen={"./public/img-videos/gym1.png"} minutos={"10 Minutes"} rep={"3 Rep"}></Video>
        <Video nombre={"Postura Del Niño"} imagen={"./public/img-videos/gym2.png"} minutos={"15 Minutes"} rep={"4 Rep"}></Video>
        <Video nombre={"Purvottanasana"} imagen={"./public/img-videos/gym3.png"} minutos={"10 Minutes"} rep={"4 Rep"}></Video>
        <Video nombre={"Posición De Corredor"} imagen={"./public/img-videos/gym4.png"} minutos={"15 Minutes"} rep={"4 Rep"}></Video>
      </div>
    </div>
  );
};
