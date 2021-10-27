import React from "react";
import logo from "./logo.png";
import './login.css';
import {FormGroup} from "reactstrap";
import { useEffect, useState } from 'react';
const googleClientId = '761597953454-7ninqjjcrah7jhjgcrgntgd1b754pcu2.apps.googleusercontent.com';

const loadGoogleScript = () => {

  (function () {
    const id = 'google-js';
    const src = 'https://apis.google.com/js/platform.js';

    const firstJs = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) { return; }
    const js = document.createElement('script');
    js.id = id;
    js.src = src;
    js.onload = window.onGoogleScriptLoad;
    firstJs.parentNode.insertBefore(js, firstJs);
  }());

}


function Main() {

  const [gapi, setGapi] = useState();
  const [googleAuth, setGoogleAuth] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();

  const onSuccess = (googleUser) => {
    setIsLoggedIn(true);
    const profile = googleUser.getBasicProfile();
    setName(profile.getName());
    setEmail(profile.getEmail());
    setImageUrl(profile.getImageUrl());
  };

  const onFailure = () => {
    setIsLoggedIn(false);
  }

  const logOut = () => {
    (async () => {
      await googleAuth.signOut();
      setIsLoggedIn(false);
      renderSigninButton(gapi);
    })();
  };

  const renderSigninButton = (_gapi) => {
    _gapi.signin2.render('google-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }

  useEffect(() => {
    window.onGoogleScriptLoad = () => {

      const _gapi = window.gapi;
      setGapi(_gapi);

      _gapi.load('auth2', () => {
        (async () => {
          const _googleAuth = await _gapi.auth2.init({
            client_id: googleClientId
          });
          setGoogleAuth(_googleAuth);
          renderSigninButton(_gapi);
        })();
      });
    }

    loadGoogleScript();

  }, []);

    return(
        <div className="content">
        {/* <main className="container main"> */}
          <div className="logo1">
            <figure>
              <img className = "logo" src={logo} alt="logo" />
              <h1 className="caption">Café Minsoft</h1>
            </figure>
            <h4>Inicie sesión para continuar</h4>
          </div> 
          <form className="etiquetas">
          <FormGroup className="entradas">
            <label for="User" className="mt-2">Usuario</label>
            <input type="text" name="User" className="form-control mt-1"></input>
            </FormGroup>
          <FormGroup className="etiquetas">
            <label for="Password" className="mt-2">Contraseña</label>
          <div className="entradas">
            <input name="Password" className="form-control mt-1"></input>
          </div>
          </FormGroup>
          <div className="buttonlog">
            <button type="submit" className="btn btn-actualizer" data-toggle="button" >
              Ingresar
            </button>
          </div>
          <div className="forgot">
            <p>¿Olvido su contraseña? <a href="#">Click aqui</a>
            </p> 
          </div>
          <div className="register mt-2">
            <a href="registro.html">Registrar</a>
          </div>

          <FormGroup className="formGroupRadios">
            <div>
            <FormGroup className="form-check">
              <input 
                className="form-check-input"
                id="flexRadioDefault1"
                type="radio"
                value="1"
                name="flexRadioDefault"
              />
              <label for="flexRadioDefault1" className="form-check-label">
                Recordar Usuario y Contraseña
              </label>              
            </FormGroup>
            </div>
            <div>
            <FormGroup className="form-check">
              <input
                className="form-check-input"
                id="radio2"
                type="radio"
                value="2"
              />
              <label for="radio2" className="form-check-label">
                Recordar Usuario
              </label>              
            </FormGroup>
            </div>
            <div>
            <FormGroup className="form-check">
              <input
              className="form-check-input"
                id="radio3"
                type="radio"
                value="3"
              />
              <label for="radio3" className="form-check-label">
                Siempre preguntar por Usuario y Contraseña
              </label>              
            </FormGroup>
            </div>
          </FormGroup>
          </form>

          {!isLoggedIn &&
            <div id="google-signin"></div>
          }

          {isLoggedIn &&
            <div>
              <div>
                <img src={imageUrl} />
              </div>
              <div>{name}</div>
              <div>{email}</div>
              <button className='btn-primary' onClick={logOut}>Log Out</button>
            </div>
          }

      </div>
    );
  }

export default Main;