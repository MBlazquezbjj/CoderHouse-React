import React, { useEffect, useState } from "react";
import Item from "./Item.jsx"



export const ItemList = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });


        getData.then(res => setData(res));
    }, [])

    return (
        <Item data={data} />
    );


}

export default ItemList;