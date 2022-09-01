import "./Item.css";
import { Link } from "react-router-dom"

function Item({ id, name, price, img }) {

    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{name}</h2>
                <h3>$ {price}</h3>
                <Link to= "/src/components/ItemDetailContainer/ItemDetail.jsx">
                    <button>
                        Ver Mas
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Item;