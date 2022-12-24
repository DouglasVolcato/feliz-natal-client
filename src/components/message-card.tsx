import { Message } from "../domain/message-type";

type Props = {
  message: Message;
};

export function MessageCard({ message }: Props) {
  return (
    <div className="messageCard">
      <p className="messageCard-message">{message.message}</p>
      <p className="messageCard-author">Autor: {message.author}</p>
    </div>
  );
}
