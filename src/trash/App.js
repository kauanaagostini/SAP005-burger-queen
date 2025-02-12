import '../style/App.css';
import React, { useState, useEffect } from "react";

function App(props) {
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
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="E-mail"
          onChange={(event) => setAuthInfo({ ...authInfo, "email": event.target.value })} 
        />

        <input 
          type="password" 
          placeholder="Senha"
          onChange={(event) => setAuthInfo({ ...authInfo, "password": event.target.value })} 
        />

        <button 
          type="submit" 
          value="Submit"
        >
          ENTRAR
        </button>

        <p>
          Não tem uma conta? 
          <a href="./CriarConta">Registre-se!</a>
        </p>
      </form>
    </div>
  );
}

export default App;
