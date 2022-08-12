import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";


const Airking = {
    id: 1,
    name: "Rolex AirKing",
    price: 10000,
    img: "../src/img/Airking.jpg",
    stock: 10,
    description: "Homenaje a los exploradores del cielo, el Air‑King honra a los pioneros de la aviación e invita a que cada cual tome los mandos de su propio destino. Rolex presenta el Oyster Perpetual Air‑King de nueva generación. Este reloj cuenta con una caja enteramente rediseñada: incorpora protectores de la corona y sus flancos de la carrura son rectos, al igual que en la mayoría de los modelos de la categoría Profesional."
};

export const ItemDetailContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Airking);
            }, 2000);
        });


        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );


}

export default ItemDetailContainer;