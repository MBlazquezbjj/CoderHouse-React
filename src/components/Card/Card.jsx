import "./Card.css";

function Card(props) {
    console.log(props.data);

    return (
        
            <div className="container">
                <div className="card">
                    <figure>
                    <img src={props.data.img} alt="imagen" />
                    </figure>
                </div>
                <div className="contenido">
                    <h2>{props.data.name}</h2>
                    <p>{props.data.description}</p>
                    <h3> $ {props.data.price}</h3>
                    <button>Comprar</button>
                </div>
            </div>
        

    );
}

export default Card;