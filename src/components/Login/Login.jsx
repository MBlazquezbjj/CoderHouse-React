import React from 'react'
import "./Login.css"

function Login() {



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