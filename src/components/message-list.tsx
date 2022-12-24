import { useEffect, useState } from "react";
import { Message } from "../domain/message-type";
import { ApiRequest } from "../helpers/api";
import { MessageCard } from "./message-card";

export function MessageList() {
  const [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    new ApiRequest().getMessages().then((messages) => {
      setMessageList(messages.body);
    });
  }, []);

  return (
    <div className="messageList">
      {messageList.map((message) => (
        <MessageCard message={message} />
      ))}
    </div>
  );
}
