import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer className="pie-pagina">
                <div className="grupo-1">
                    <div className="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, in. Et quidem repellat, nihil id,
                            asperiores eum debitis amet cupiditate quos temporibus libero quaerat nisi illo, quas earum iusto
                            sequi.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro voluptates autem veniam at
                            voluptatum, cumque unde non libero cupiditate aperiam eligendi ratione? Sunt cupiditate cum amet
                            magni, atque officiis!</p>
                    </div>
                    <div className="box">
                        <h2> SIGUENOS</h2>
                        <div className="red-social">
                            <link to="#" class="fa fa-facebook"></link>
                            <link to="#" class="fa fa-instagram"></link>
                            <link to="#" class="fa fa-twitter"></link>
                            <link to="#" class="fa fa-youtube"></link>

                        </div>

                    </div>

                </div>
                <div className="grupo-2">
                    <small>&copy;2022 <b>E-Watch</b> - Todos los derechos reservados.</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer