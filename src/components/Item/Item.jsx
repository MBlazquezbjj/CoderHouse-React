import "./Item.css";
import { Link } from "react-router-dom";

function Item({ id, name, price, img, description }) {


    return (

        <div className="container">
            <div className="card" key={id}>
                <Link to={"/item/${id}"}>
                    <img src={img} alt="imagen" />
                </Link>
                <div className="text">
                    <h2>{name}</h2>
                    <h3>{description}
                        <p>$ {price}</p>
                        <button>Ver mas</button>
                    </h3>
                </div>
            </div>
        </div>

    );
}

export default Item;