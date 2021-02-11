import '../style/login.css'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png'

function Login(props) {
    const [authInfo, setAuthInfo] = useState(props.authInfo);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authInfo)
      };
  
      fetch('https://lab-api-bq.herokuapp.com/auth', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }
  
    return (
      <div>
        <section className="login">
            <img className="logo" src={Logo} />
            <form className="form-login" onSubmit={handleSubmit}>
            <input 
                className="form-input"
                type="text" 
                placeholder="E-mail"
                onChange={(event) => setAuthInfo({ ...authInfo, "email": event.target.value })} 
            />
    
            <input
                className="form-input"
                type="password" 
                placeholder="Senha"
                onChange={(event) => setAuthInfo({ ...authInfo, "password": event.target.value })} 
            />
    
            <button
                className="form-button" 
                type="submit" 
                value="Submit"
            >
                ENTRAR
            </button>
    
            <p className="form-text">
                Não tem uma conta? 
                <Link className="form-router" to="/register" alt="Página Registro">Registre-se!</Link>
            </p>
            </form>
        </section>
        <footer>
            <p className="footer-text">Projeto desenvolvido por
            <a className="footer-link" href="" alt="Ana Clara GitHub"> Ana Clara</a> e
            <a className="footer-link" href="" alt="Kauana GitHub"> Kauana </a> 
            durante o Bootcamp da
            <a className="footer-link" href="" alt="Site Laboratória"> Laboratória</a>
            .</p>
        </footer>
      </div>
      
    );
}

export default Login;