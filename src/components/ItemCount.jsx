import React from "react";
import { useState } from "react";
import swal from "sweetalert";
function ItemCount(props) {

    const [counter, setCounter] = useState(props.initial);

    const handleIncrement = () => {
        setCounter(counter + 1);
        if (counter < 5) {
            setCounter(counter + 1);
        }
    };
    const handleDecrement = () => {
        setCounter(counter - 1);
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };
    const handleClick = () => {
        props.onAdd(counter)
        if (5 > 0) {
            swal("Hecho", "Agregado con exito", "success");
        }
        else {
            swal("Lo sentimos", "No hay stock disponible por el momento", "error")
        }
    }

    return (
        <div>
            <button onClick={handleDecrement}>Quitar</button>
            <span>{counter}</span>
            <button onClick={handleIncrement}>Agregar</button>
            <button onClick={handleClick}>{props.text}</button>
        </div>
    )
}


export default ItemCount