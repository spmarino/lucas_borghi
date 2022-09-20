import { useState } from "react";
import "./Counter.css";

export default function Counter({ onAdd, stock, initial }) {
  const [counter, setCounter] = useState(1);
  const handlerCounterUp = () => {
    if (counter < stock) {
      setCounter(counter + 1);}};
      
  const handlerCounterDown = () => {
    if (counter > 1) {
      setCounter(counter - 1); }};
  const addToCart = () => {
    onAdd(counter);
  };

  return (
    <div>
      <p className="contador d-flex justify-content-center">{counter}</p>
      <div className="botones d-flex justify-content-evenly">
        <button
          type="button"
          className="boton btn btn-secondary btn-sm"
          onClick={handlerCounterDown}
        >
          -
        </button>
        <button
          type="button"
          className="boton btn btn-secondary btn-sm"
          onClick={handlerCounterUp}
        >
          +
        </button>
      </div>
      <button className="btn btn-primary botoncito" onClick={addToCart}>
        Comprar Ahora
      </button>
    </div>
  );
}
