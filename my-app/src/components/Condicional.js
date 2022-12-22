import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState()

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email)
    console.log(userEmail);
  }

  return (
    <div>
      <h2>Cadastre Seu Email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar E-mail
        </button>
        {userEmail && (
          <div>
            <p>O e-mail do usuário é: {userEmail}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
