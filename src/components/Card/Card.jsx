function Card(props) {
    console.log(props.data);

    return (
        <div className="main">
            <div className="card">
                <div className="card-img">
                    <img src={props.data.img} alt="imagen" />
                </div>
                <div className="card-detail">
                    <h2>{props.data.name}</h2>
                    <p>{props.data.description}</p>
                    <h3> $ {props.data.price}</h3>
                    <button className="btn">Comprar</button>
                </div>
            </div>
        </div>

    );
}

export default Card;