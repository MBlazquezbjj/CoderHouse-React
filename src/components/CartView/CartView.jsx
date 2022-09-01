import { useContext } from "react";
import { cartContext } from "../../Store/cartContext";
import UserForm from "../UserForm/UserForm";
import CartItem from "./CartItem";
import "./CartView.css";

function CartView() {
    const { cart, removeFromCart } = useContext(cartContext);

    return (
        <>
            <div className="main container mx-auto mt-5">
                <h1>Tu Carrito</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Miniatura</th>
                            <th>Titulo</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Remover</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            return (
                                <CartItem
                                    key={item.id}
                                    name={item.name}
                                    price={item.price}
                                    total={item.price * item.stock}
                                    img={item.img}
                                    stock={item.stock}
                                    removeItem={() => removeFromCart(item.id)}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div></div>
            <UserForm cart={CartItem} />
        </>
    );
}

export default CartView;