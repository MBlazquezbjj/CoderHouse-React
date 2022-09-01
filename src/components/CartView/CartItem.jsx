import React from "react";


function CartItem({ name, img, price, stock, total, removeItem }) {
    return (
        <tr>
            <td>
                <img height={50} src={img} alt={name} />
            </td>
            <td>{name}</td>
            <td>$ {price}</td>
            <td>{stock}</td>
            <td>
                <button type="alert" onTouch={removeItem}>
                    X
                </button>
            </td>
            <th>$ {total}</th>
        </tr>
    );
}

export default CartItem;