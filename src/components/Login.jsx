import React from 'react';
import '../Styles/Login.css'
import swal from 'sweetalert';
import axios from 'axios';
import { useState, useEffect } from 'react'

function Login({ handleNavBar }) {

  const [AccessLogin, SetAccessLogin] = useState({ NombreUser: '', Contraseña: '' });
  const apiUrl = "https://localhost:44395/api/LoginAccess/Login";
  

  useEffect(() => {
    return () => {
      localStorage.setItem('MyData', JSON.stringify(AccessLogin))

    };
  }, []);

  const Trigger =()=>{
   let mostrarnav = handleNavBar
  }

  const LogAccess = (e) => {
    e.preventDefault();

    if (AccessLogin.NombreUser == '' || AccessLogin.Contraseña == '') {
      swal({
        title: "Falta informacion!",
        text: "Parese que hay campos sin llenar, verifica e intenta de nuevo!",
        icon: "info",
      })
    } else {
      const data = { NombreUser: AccessLogin.NombreUser, Contraseña: AccessLogin.Contraseña };
      axios.post(apiUrl, data)
        .then((result) => {
          console.log(result.data);
          const serializedState = JSON.stringify(result.data.UserDetails);
          const user = result.data.UserDetails;


          if (result.data.status == '200') {
            window.location = '/DinamicasDeVenta'
            Trigger()
          }
          else {
            swal({
              title: "Error!",
              text: "Usuario o contraseña errada !",
              icon: "error",
            });
          }
        })
    }
  };


  const onChange = (e) => {
    e.persist();
    SetAccessLogin({ ...AccessLogin, [e.target.name]: e.target.value });

  }


  return (

    <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Iniciar sesion</h3>
          <div className="form-group mt-3">
            <label>Nombre usuario</label>
            <input
              onChange={onChange}
              value={AccessLogin.NombreUser}
              name='NombreUser'
              type="text"
              className="form-control mt-1"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              onChange={onChange}
              value={AccessLogin.Contraseña}
              name='Contraseña'
              type="password"
              className="form-control mt-1"
              placeholder=" Contraseña"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary " onClick={LogAccess}  >
              Ingresar
            </button>
          </div>
          <hr />
          {/* <p className="forgot-password text-right mt-2">
            <a href="#">Olvido su contraseña ?</a>
          </p> */}
        </div>
      </form>
    </div>

  );
}

export default Login;
