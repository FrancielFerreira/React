import "./App.css";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";

function App() {
  const imgURL = "https://via.placeholder.com/800x160";
  const pp = {
    nome: "João",
    idade: 22,
    profissao: "dev",
    foto: "https://via.placeholder.com/200x160",
  };

  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <List />
      <Frase />
      <Frase />
      <SayMyName nome="Franciel" />
      <SayMyName nome="José" />
      <Pessoa
        nome={pp.nome}
        idade={pp.idade}
        profissao={pp.profissao}
        foto={pp.foto}
      />
      <img src={imgURL} alt="minha foto" />
      <HelloWorld />
    </div>
  );
}

export default App;
