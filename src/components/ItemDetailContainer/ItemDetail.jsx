import { useState } from "react";
import "../Item/Item.css";
import ItemCount from "../../components/ItemCount";
import { useContext } from "react";
import { cartContext } from "../../Store/cartContext";
import { Link } from "react-router-dom";

function CardDetail({ id, name, price, img, description, stock }) {
    const { addToCart } = useContext(cartContext);
    const [quantityInCart, setQuantityInCart] = useState(0);
    const [feedbackMsg, setFeedbackMsg] = useState(false);

    function handleAdd(counter) {
        const itemToCart = { id, name, price, img, description, stock };
        addToCart(itemToCart, counter);
        setFeedbackMsg("Producto agregado al carrito: " + counter + " unidades");
        setQuantityInCart(counter);
    }

    return (
        <div className="card">
            <small>{feedbackMsg &&
                <p>{feedbackMsg}</p>}
            </small>
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>$ {price}</h3>
            </div>

            {quantityInCart === 0 ? (
                <ItemCount initial={1} stock={stock} onAdd={handleAdd} text={"Finalizar"} value={quantityInCart} />
            ) : (
                <Link to="/cart">Ir al carrito</Link>
            )
            }
        </div>
    );
}

export default CardDetail;