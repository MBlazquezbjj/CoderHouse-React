import React from "react";
import swal from "sweetalert";


function ItemCount(props) {
    console.log(props.stock, props.initial);

    const [counter, setCounter] = React.useState(1);

    const add = () => {
        if (counter < 5) {

            setCounter(counter + 1);
        }
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        console.log("agregado")
        if (5 > 0) {
            swal("Hecho", "Agregado con exito", "success");
        }
        else {
            swal("Lo sentimos", "No hay stock disponible por el momento", "error")
        }
    }

    return (
        <div>
            <button onClick={onAdd}>Agregar al carrito</button>
            <button onClick={decrease}>Quitar</button>
            <button onClick={add}>Agregar</button>

            <h3>{counter}</h3>
        </div>

    )
}


export default ItemCount