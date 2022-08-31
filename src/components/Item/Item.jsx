import "./Item.css";



function Item({ id, name, price, img, }) {


    return (

        <div className="card">
            <div className="card-img">
                <img src={img} alt="imagen" />
            </div>
            <div className="card-detail">
                <h2>{name}</h2>
                <h3>$ {price}</h3>
                <button>Ver Mas</button>
                

            </div>
        </div>


    );
}

export default Item;