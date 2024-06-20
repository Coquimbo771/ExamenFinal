import React from "react";
import "./TarjetaClase.css";

const TarjetaClase = ({ image, title, series, repetitions }) => {
  return (
    <div className="tarjeta-clase">
      <img src={image} alt={title} />
      <InfoRutina title={title} series={series} repetitions={repetitions} />
    </div>
  );
};

export default TarjetaClase;
