import axios from "axios";
import { ApiResponse } from "../domain/api-response";
import { Message } from "../domain/message-type";
const apiUrl = "https://feliz-natal-server-production.up.railway.app/message";

export class ApiRequest {
  async getMessages(): Promise<ApiResponse<Message[]>> {
    const messages = await axios.get<ApiResponse<Message[]>>(
      apiUrl + "/get-all"
    );
    return messages.data;
  }

  async createMessage(messageBody: Message): Promise<ApiResponse<Message>> {
    const createdMessage = await axios.post<ApiResponse<Message>>(
      apiUrl + "/create",
      messageBody
    );
    return createdMessage.data;
  }
}
