import React, { useState } from "react";
import "./App.css";
import CuentaRegresiva from "./reloj";
import ProductoCard from "./ProductosCard";
import productos from "./productos";
import fondo from './imagen/fondo.png';

const imagenes = [
  "/Imagen/images1.png",
  "/Imagen/images2.png",
  "/Imagen/images3.png",
  "/Imagen/images4.png",
  "/Imagen/images5.png",
 
];

function App() {
  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((index + 1) % imagenes.length);
  const anterior = () => setIndex((index - 1 + imagenes.length) % imagenes.length);

  return (
    <div
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '210vh',
        width: '100vw',
        margin: 0,
        padding: 0,
      }}
    >
      <div className="contenedor">

        
        <div className="App">
          <CuentaRegresiva fechaObjetivo="2025-12-31T00:00:00" />
        </div>

        <div className="carrusel">
          <img src={imagenes[index]} alt={`Imagen ${index + 1}`} />
          <button onClick={anterior}>⟨</button>
          <button onClick={siguiente}>⟩</button>
        </div>

        <div className="catalogo">
          <h1>Catálogo de Productos</h1>
          <div className="catalogo-grid">
            {productos.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
