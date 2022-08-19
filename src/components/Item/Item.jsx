import "./Item.css";
import { link } from "react-router-dom"

function Item({ id, name, price, img, description }) {

    return (

        <div className="container">
            <div className="card" key={id}>
                <link to={"/item/${id}"}>
                    <img src={img} alt="imagen" />
                </link>
                <div className="text">
                    <h2>{name}</h2>
                    <p>{description}
                        <h3>$ {price}</h3>
                        <button>Ver mas</button>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Item;