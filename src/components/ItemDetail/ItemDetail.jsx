import React from "react";
import Airking from "../../img/Airking.jpg";
export const ItemDetail = () => {
    return (
        <div className="container">
            <div className="card">

                <img src={Airking} alt="imagen" />

                <div className="text">
                    <h2>Rolex AirKing</h2>
                    <p> Homenaje a los exploradores del cielo, el AirKing honra a los pioneros de la aviación e invita a que cada cual tome los mandos de su propio destino. Rolex presenta el Oyster Perpetual AirKing de nueva generación. Este reloj cuenta con una caja enteramente rediseñada: incorpora protectores de la corona y sus flancos de la carrura son rectos, al igual que en la mayoría de los modelos de la categoría Profesional.
                        <h3>$10000</h3>
                        <button>Ver mas</button>
                    </p>
                </div>
            </div>
        </div>

        
    );


}

export default ItemDetail;