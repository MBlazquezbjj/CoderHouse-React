import React from "react";
import Cellini from "../img/Cellini.jpg";
export const Item = () => {
    return (


        <div className="container">
            <div className="card">
                <img src={Cellini} alt="imagen" />

                <div className="text">
                    <h2>Cellini</h2>
                    <p> El Cellini Moonphase está equipado con una esfera lacada blanca con un disco esmaltado azul en la posición de las 6 h, sobre el que figuran la luna llena —materializada mediante un aplique de meteorito— y la luna nueva, representada por un círculo.El Cellini Moonphase dispone además de visualización de la fecha mediante una aguja central, rematada en una medialuna que indica el día sobre el contorno de la esfera.
                        <h3>$15000</h3>
                        <button>Ver mas</button>
                    </p>
                </div>
            </div>
        </div>
    );


}

export default Item;