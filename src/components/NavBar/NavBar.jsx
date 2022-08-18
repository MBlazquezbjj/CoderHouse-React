import React from "react";
import "./NavBar.css";
import CartWidget from "../NavBar/CartWidget";
import {Link} from "react-router-dom";


function NavBar() {
    console.log(Link)

    return (
        <header>
            <CartWidget />
            <nav>
                <ul className="nav_links">
                    <li> <link to="../Login/Login.jsx">Iniciar Sesion</link></li>
                    <li> <link to="/">Productos</link></li>
                    <li> <link to="">Galeria</link></li>
                    <li> <link to="../Footer/Footer.jsx">Quienes somos</link></li>
                </ul>
            </nav>
            <link to="../Contact/Contac.jsx"><button>Contacto</button></link>

        </header>


    )

}

export default NavBar;
