import React from "react";
import "./InfoRutina.css";

const InfoRutina = ({ title, series, repetitions }) => {
  return (
    <div className="info-rutina">
      <TituloEjercicio text={title} />
      <p>
        {series} séries x {repetitions} repetições
      </p>
    </div>
  );
};

export default InfoRutina;
