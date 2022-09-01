import React from "react";
import "./NavBar.css";
import CartWidget from "../NavBar/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    console.log(Link)

    return (
        <header>
            <CartWidget />
            <nav>
                <ul className="nav_links">
                    <li> <Link to="/src/components/Login/Login.jsx">Iniciar Sesion</Link> </li>
                    <li> <Link to="/">Productos</Link> </li>
                    <li> <Link to="">Galeria</Link> </li>
                    <li> <Link to="../Footer/Footer.jsx">Sobre nosotros</Link> </li>
                </ul>
            </nav>
            <Link to="/src/components/UserForm/UserForm.jsx">
                <button>Contacto</button>
            </Link>

        </header>


    )

}

export default NavBar;
