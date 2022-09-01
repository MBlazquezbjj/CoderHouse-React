import React from "react";

function ItemCount(props) {

    const [counter, setCounter] = React.useState(1);
    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div>
            <button onClick={handleDecrement}>Quitar</button>
            <span>{counter}</span>
            <button onClick={handleIncrement}>Agregar</button>
            <button onClick={props.onAdd(counter)}>{props.text}</button>
        </div>
    )
}


export default ItemCount