import React from 'react'
import { useState } from 'react';
import "./UserForm.css"

function UseForm() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    });

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("submit");
    }

    function inputChangeHandler(evt) {
        const input = evt.target;
        const value = input.value;
        const inputName = input.name;
        let copyUserdata = { ...userData };
        copyUserdata[inputName] = value;
        setUserData(copyUserdata);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input value={userData.name} onChange={inputChangeHandler} name="name" type="text" placeholder='Nombre' />
                </div>

                <div className="form-item">
                    <label htmlFor="telefono">Telefono</label>
                    <input value={userData.telefono} onChange={inputChangeHandler} name="telefono" type="text" placeholder='Telefono' />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input value={userData.email} onChange={inputChangeHandler} name="email" type="text" placeholder='Correo' />
                </div>

                <div>
                    <button type="submit">Enviar</button>
                    <button type="reset">Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default UseForm