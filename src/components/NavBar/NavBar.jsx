import "./NavBar.css";
import CartWidget from "../CartWidget"


    function NavBar() {
    return (
        <header>
            <CartWidget />
            <nav>
                <ul className="nav_links">
                    <li> <a href="#">Iniciar Sesion</a></li>
                    <li> <a href="#">Relojes</a></li>
                    <li> <a href="#">Galeria</a></li>
                    <li> <a href="#">Quienes somos</a></li>
                </ul>
            </nav>
            <a href="#"><button>Contacto</button></a>

        </header>


    )

}

export default NavBar;
