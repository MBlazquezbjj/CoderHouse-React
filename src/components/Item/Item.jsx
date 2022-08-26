import "./Item.css";
import { Link } from "react-router-dom";
import Button from "../../../src/components/Button/Button"


function Item({ id, name, price, img, }) {


    return (

        <div className="card">
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{name}</h2>
                <h3>$ {price}</h3>
                
                <Link to={`/detalle/${id}`}>
                    <Button
                        onTouch={() => alert(`Clickeado el item: ${name}`)} 
                        text="Ver más"
                    ></Button>
                </Link>

            </div>
        </div>


    );
}

export default Item;