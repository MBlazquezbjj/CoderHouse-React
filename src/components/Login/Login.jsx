import React from 'react'
import "./Login.css"

function Login() {

document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);
    var contenedor_login_register = document.querySelector(".contenedor__login-register");
    var formulario_login = document.querySelector(".formulario__login");
    var formulario_register = document.querySelector(".formulario__register");
    var caja_trasera_login = document.querySelector(".caja__trasera-login");
    var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina() {
        if (window.innerWidth > 850) {
            caja_trasera_login.style.display = "block";
            caja_trasera_register.style.display = "block";
        } else {
            caja_trasera_register.style.display = "block";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.display = "none";
            formulario_login.style.display = "block";
            formulario_register.style.display = "none";
            contenedor_login_register.style.left = "0px";
        }
    }
    anchoPagina();

function iniciarSesion() {
        if (window.innerWidth > 850) {
            formulario_register.style.display = "none";
            contenedor_login_register.style.left = "10px";
            formulario_login.style.display = "block";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        } else {
            formulario_register.style.display = "none";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "block";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

function register() {
        if (window.innerWidth > 850) {
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        } else {
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }

    }

    return (
        <main>
            <div className="contenedor__todo">
                <div className="caja__trasera">
                    <div className="caja__trasera-login">
                        <h3>Ya tienes cuenta?</h3>
                        <p>Inicia sesión para entrar en la pagina</p>
                        <button id='btn__iniciar-sesion'>Iniciar sesión</button>
                    </div>

                    <div className="caja__trasera-register">
                        <h3>Aun no tienes cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button id='btn__iniciar-sesion'>Registrarse</button>
                    </div>
                </div>

                <div className="contenedor__login-register">
                    <form action="" className='formulario__login'>
                        <h2>Iniciar sesión</h2>
                        <input type="text" placeholder='Correo Electronico' />
                        <input type="password" placeholder='Contraseña' />
                        <button>Entrar</button>
                    </form>

                    <form action="" className='formulario__register'>
                        <h2>Regístrarse</h2>
                        <input type="text" placeholder='Nombre Completo' />
                        <input type="text" placeholder='Correo Electronico' />
                        <input type="text" placeholder='Usuario' />
                        <input type="password" placeholder='Contraseña' />
                        <button>Regístrarse</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login