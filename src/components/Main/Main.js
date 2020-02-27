import React, { useState } from 'react';
import './Main.scss';
import Button from '../common/Button/Button';

const Main = () => {
  const [contador, setContador] = useState(0);
  const [textoVisible, setTextoVisible] = useState(false);

  const incrementar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    if (contador !== 0) {
      setContador(contador - 1);
    }
  }

  const mudarEstadoText = () => {
    setTextoVisible(!textoVisible);
  }

  return (
    <div className="Main">
      <p>{contador}</p>

      <div>
        <Button texto={"-"} cor={"red"} />
        <Button texto={"+"} cor={"magenta"} />
      </div>

      <p className={`texto-veio ${textoVisible && "visible" }`}>estou visivel</p>
      <button onClick={mudarEstadoText}>aparecer</button>
    </div>
  )
};

export default Main;