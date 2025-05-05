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
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  };

  const eliminarDelCarrito = (id) => {
    const productoExistente = carrito.find((item) => item.id === id);

    if (productoExistente.cantidad > 1) {
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
      );
    } else {
      setCarrito(carrito.filter((item) => item.id !== id));
    }

    console.log(`Producto eliminado del carrito: ${productoExistente.nombre}`);
  };

  const totalCarrito = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

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
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              <ul>
                {carrito.map((item, index) => (
                  <li key={index}>
                    {item.nombre} - Cantidad: {item.cantidad} - Precio: ${item.precio} - Total: ${item.precio * item.cantidad}
                    <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                  </li>
                ))}
              </ul>
              <h3>Total del carrito: ${totalCarrito}</h3>
            </>
          )}
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