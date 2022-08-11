
import React, { useEffect, useState } from "react";
import itemsData from "../../src/Data/data";
import Card from "../components/Card/Card";


function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsData), 2000)
    })
};


function ItemListContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
        });
    }, []);

    return (
        <div>
            <h2>Nuestros productos</h2>
            {
                data.map((productos) => <Card
                    key={productos.id}
                    img={productos.img}
                    name={productos.name}
                    description={productos.description}
                    price={productos.price}

                />

                )
            }
        </div>

    );
}

export default ItemListContainer