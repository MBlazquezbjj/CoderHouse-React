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
                    <li> <Link to="/login">Iniciar Sesion</Link> </li>
                    <li> <Link to="/">Productos</Link> </li>
                    <li> <Link to="/galeria">Galeria</Link> </li>
                    <li> <Link to="/nosotros">Sobre nosotros</Link> </li>
                </ul>
            </nav>
            <Link to="/contact">
                <button>Contacto</button>
            </Link>

        </header>


    )

}

export default NavBar;
