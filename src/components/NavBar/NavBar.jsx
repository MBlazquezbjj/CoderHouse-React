import "./NavBar.css";
import CartWidget from "../CartWidget"


function NavBar() {
    return (
        <header>
            <CartWidget />
            <nav>
                <ul className="nav_links">
                    <li> <link to="/">Iniciar Sesion</link></li>
                    <li> <link to="/">Relojes</link></li>
                    <li> <link to="/">Galeria</link></li>
                    <li> <link to="/">Quienes somos</link></li>
                </ul>
            </nav>
            <link to=""><button>Contacto</button></link>

        </header>


    )

}

export default NavBar;
