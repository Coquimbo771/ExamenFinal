import React from "react";
import "./EjerciciosTemplate.css";
import Cabezal from "././moleculas/Cabezal";
import TarjetaClase from "./moleculas/TarjetaClase";

const ejercicios = [
  {
    image: "../../public/image/puxada_frontal.png",
    title: "Puxada frontal",
    series: 3,
    repetitions: 12,
  },
  {
    image: "../../public/image/remada_curvada.png",
    title: "Remada curvada",
    series: 3,
    repetitions: 12,
  },
  {
    image: "../../public/image/remada_unilateral.png",
    title: "Remada unilateral",
    series: 3,
    repetitions: 12,
  },
  {
    image: "../../public/image/levantamento_terra.png",
    title: "Levantamento terra",
    series: 3,
    repetitions: 12,
  },
];

const EjerciciosTemplate = () => {
  return (
    <div className="ejercicios-template">
      <Cabezal />
      {ejercicios.map((ejercicio, index) => (
        <TarjetaClase
          key={index}
          image={ejercicio.image}
          title={ejercicio.title}
          series={ejercicio.series}
          repetitions={ejercicio.repetitions}
        />
      ))}
    </div>
  );
};

export default EjerciciosTemplate;
