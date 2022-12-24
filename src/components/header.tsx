import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/messages")}>Ver mensagens</button>
      <button onClick={() => navigate("/add-message")}>
        Adicionar mensagem
      </button>
    </header>
  );
}
