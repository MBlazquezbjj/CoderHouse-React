import React, { useEffect, useState } from "react";
import itemsData from "../../src/Data/data";

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(itemsData), 2000)
    })
};

function Item() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts().then((respuesta) => {
            setData(respuesta);
        });
    }, []);

    return (
        <div>
            <h1> productos</h1>
            {
                data.map()

            }
        </div>

    );
}
export default Item