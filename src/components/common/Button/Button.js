import React from 'react';
import './Button.scss';

const Button = ({ texto, cor }) => {
  return (
    <button className="Button" style={{ backgroundColor: cor }}>
      <marquee>{texto}</marquee>
    </button>
  )
}

Button.defaultProps = {
  texto: "batata",
  cor: "blue"
}

export default Button;