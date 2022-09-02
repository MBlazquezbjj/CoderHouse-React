import { Link } from 'react-router-dom'

function CartWidget() {


    return (
        <Link to='/cart' className="CartWidget">
            <i>
                <ion-icon name="cart-outline"></ion-icon>
            </i>
        </Link>
    )
}

export default CartWidget