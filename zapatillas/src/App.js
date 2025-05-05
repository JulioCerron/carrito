import React, { useState } from "react";
import "./App.css";
import CuentaRegresiva from "./reloj";
import ProductoCard from "./ProductosCard";
import ModalCarrito from "./ModalCarrito"; // Importa el modal
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
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar el modal

  const siguiente = () => setIndex((index + 1) % imagenes.length);
  const anterior = () => setIndex((index - 1 + imagenes.length) % imagenes.length);

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

  const toggleModal = () => setModalVisible(!modalVisible); // Alternar visibilidad del modal

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

        {/* Botón para abrir el modal */}
        <button className="abrir-modal" onClick={toggleModal}>
          CARRITO
        </button>

        {/* Modal */}
        {modalVisible && (
          <ModalCarrito
            carrito={carrito}
            totalCarrito={totalCarrito}
            eliminarDelCarrito={eliminarDelCarrito}
            onClose={toggleModal}
          />
        )}

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
                onAgregar={agregarAlCarrito} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;