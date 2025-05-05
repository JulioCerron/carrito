import React, { useEffect, useState } from "react";
import "./CuentaRegresiva.css";

function CuentaRegresiva({ fechaObjetivo }) {
  const calcularTiempo = () => {
    const diferencia = new Date(fechaObjetivo) - new Date();
    const segundos = Math.floor((diferencia / 1000) % 60);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferencia / (10000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="cuenta-regresiva">
    
    
    <div className="reloj">
        
      <div className="unidad">
        <div className="numero">{tiempo.dias}</div>
        <div className="label">Días</div>
      </div>
      <div className="unidad">
        <div className="numero">{tiempo.horas}</div>
        <div className="label">Horas</div>
      </div>
      <div className="unidad">
        <div className="numero">{tiempo.minutos}</div>
        <div className="label">Minutos</div>
      </div>
      <div className="unidad">
        <div className="numero">{tiempo.segundos}</div>
        <div className="label">Segundos</div>
      </div>
    </div>
    </div>
  );
}

export default CuentaRegresiva;
