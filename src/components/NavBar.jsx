import "./NavBar.css";
import CartWidget from "./CartWidget"
export default

function NavBar() {
    return (
        <header>
            
            <div className="interior">
                
                <nav className="navegacion">
                    <ul>

                        <li>
                            <a href="">Iniciar Sesion</a>
                        </li>
                        <li>
                            <a href="">Relojes</a>
                        </li>
                        <li>
                            <a href="">Galeria</a>
                        </li>
                        <li>
                            <a href="">Contacto</a>
                        </li>
                    </ul>
                    
                </nav>
                
            </div>
            <CartWidget/>
        </header>
        
        
    )

}
