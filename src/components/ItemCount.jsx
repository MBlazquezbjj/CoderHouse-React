import React from "react";
import { useState } from "react";

function ItemCount(props) {

    const [counter, setCounter] = useState(props.initial);
    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    
    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    const handleClick = ()=>{
        props.onAdd(counter)
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