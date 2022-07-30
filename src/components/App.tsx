import "../global.scss";
import "./App.scss";

export function App() {
  return (
    <div className="firstWrapper">
      <header>
        <img src="./src/assets/netflix-logo.png" alt="Netflix" />
        <button>Entrar</button>
      </header>

      <div className="mainText">
        <h1>Filmes, séries e muito mais.</h1>
        <h1>Sem limites.</h1>
        <p>Assista onde quiser. Cancele quando quiser.</p>
      </div>

      <div className="inputText">
        <span>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </span>
        <div className="inputAndButton">
          <input type="text" placeholder="Email" />
          <button>Vamos lá {">"}</button>
        </div>
      </div>
    </div>
  );
}
