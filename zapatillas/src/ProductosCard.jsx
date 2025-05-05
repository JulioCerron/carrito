import React from "react";
import "./ProductosCard.css";

function ProductoCard({ producto, onAgregar }) {
  const handleComprar = () => {
    // Lógica para manejar la compra
    console.log(`Producto comprado: ${producto.nombre}`);
    // Aquí podrías agregar la funcionalidad de carrito de compras
  };

  return (
    <div className="producto-card">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="producto-imagen"
      />
      <div className="producto-info">
        <h2 className="producto-nombre">{producto.nombre}</h2>
        <p className="producto-descripcion">{producto.description}</p>
        <p className="producto-precio">${producto.precio.toFixed(2)}</p>
        <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductoCard;