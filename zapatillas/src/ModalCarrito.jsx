import React from "react";
import "./ModalCarrito.css"; // Archivo CSS para los estilos del modal

function ModalCarrito({ carrito, totalCarrito, eliminarDelCarrito, onClose }) {
  return (
    <div className="modal">
      <div className="modal-contenido">
        <h2>Carrito de Compras</h2>
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
        <button className="cerrar-modal" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ModalCarrito;