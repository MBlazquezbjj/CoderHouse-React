import React from 'react'
import Item from "../Item/Item";

function ItemList({ data }) {

    return (
        <div>
            {data.map(item => (
                <Item
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    description={item.description}
                    id={item.id} />
            ))}
        </div>
    )
}

export default ItemList