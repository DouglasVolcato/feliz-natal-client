import { useState } from "react";
import { Message } from "../domain/message-type";
import { ApiRequest } from "../helpers/api";
import { useNavigate } from "react-router-dom";

export function AddMessage() {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState<Message>({
    message: "",
    author: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await new ApiRequest().createMessage(newMessage);

      if (response.error) {
        alert("Ocorreu um erro ao publicar sua mensagem.");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert("Ocorreu um erro ao publicar sua mensagem.");
    }
  }

  return (
    <div className="addMessage">
      <form
        className="addMessage-form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <h2>Adicionar Mensagem</h2>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          className="addMessage-form-input"
          name="mensagem"
          placeholder="Mensagem"
          onChange={(event) =>
            setNewMessage({ ...newMessage, message: event.target.value })
          }
        />
        <label htmlFor="author">Autor</label>
        <input
          className="addMessage-form-input"
          type="text"
          name="autor"
          placeholder="Autor"
          onChange={(event) =>
            setNewMessage({ ...newMessage, author: event.target.value })
          }
        />
        <button className="addMessage-form-button" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
}
