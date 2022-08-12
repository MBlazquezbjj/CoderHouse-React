import "./Card.css";

function Card(props) {
    console.log(props.data);

    return (

        <div className="container">
            <div className="card">

                <img 
                src={props.data.img} 
                alt="imagen" />

                <div className="text">
                    <h2>
                        {props.data.name}
                    </h2>
                    <p>
                        {props.data.description}
                        <h3>
                            $ {props.data.price}
                        </h3>
                        <button>
                            Ver mas
                        </button>
                    </p>
                </div>
            </div>
        </div>



    );
}

export default Card;