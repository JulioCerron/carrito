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
  const [carrito, setCarrito] = useState([]);

  const siguiente = () => setIndex((index + 1) % imagenes.length);
  const anterior = () => setIndex((index - 1 + imagenes.length) % imagenes.length);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
    console.log(carrito);
  };

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

      <div className="carrito">
          <h2>Carrito</h2>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>{item.nombre}</li>
            ))}
          </ul>
        </div>
        
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
              <ProductoCard 
                key={producto.id} 
                producto={producto} 
                onAgregar={agregarAlCarrito} // Pasar la función como prop
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}



export default App;
