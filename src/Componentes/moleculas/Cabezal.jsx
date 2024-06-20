import React from 'react';
import './Cabezal.css';
import Titulo1Cabezal from '../Titulo1Cabezal';
import Titulo2Cabezal from '../Titulo2Cabezal';

const Cabezal = () => {
  return (
    <div className="cabezal">
      <Titulo1Cabezal text="Exercícios" />
      <Titulo2Cabezal text="4 itens" />
    </div>
  );
}

export default Cabezal;
