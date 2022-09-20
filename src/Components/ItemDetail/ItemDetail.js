import React, { useState, useContext } from "react";
import "./ItemCard.css";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export default function ItemDetail({ product }) {
  const { addProduct } = useContext(CartContext);
  const { producto, descripcion, precio, image, stock, initial } = product;

  const onAdd = (counter) => {
    addProduct(product, counter);
  };

  return (
    <div className="ItemContainer">
      <div className="card text-center">
        <div className="card-body">
          <img src={image} className="card-img-top tamano" alt={producto}></img>
          <h5 className="card-title">{producto}</h5>
          <p className="card-text">{descripcion}</p>
          <Counter onAdd={onAdd} initial={initial} stock={stock} />
        </div>
        <div className="card-footer text-muted">
          El precio es de ${precio} por bolsa
        </div>
      </div>

      <Link to={`/`}>
        <button className="btn btn-primary botoncito">Volver atrás</button>{" "}
      </Link>
    </div>
  );
}

